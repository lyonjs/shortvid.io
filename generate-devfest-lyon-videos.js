#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const SPEAKERS_FILE = './speakers.json';
const OUTPUT_DIR = './out/devfest-lyon';
const COMPOSITION_ID = 'DevfestLyonTalk';
const ENTRY_POINT = './remotion/index.tsx';

// Options de ligne de commande
const options = {
    dryRun: process.argv.includes('--dry-run'),
    limit: null
};

// Parser l'option --limit
const limitIndex = process.argv.findIndex(arg => arg.startsWith('--limit'));
if (limitIndex !== -1 && process.argv[limitIndex + 1]) {
    options.limit = parseInt(process.argv[limitIndex + 1], 10);
    if (isNaN(options.limit) || options.limit <= 0) {
        logError('La valeur de --limit doit être un nombre positif');
        process.exit(1);
    }
}

// Couleurs pour les logs
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function logError(message) {
    log(`❌ ${message}`, 'red');
}

function logSuccess(message) {
    log(`✅ ${message}`, 'green');
}

function logInfo(message) {
    log(`ℹ️  ${message}`, 'blue');
}

function logWarning(message) {
    log(`⚠️  ${message}`, 'yellow');
}

// Fonction pour nettoyer le nom de fichier
function sanitizeFileName(str) {
    return str
        .replace(/[^a-z0-9\s-]/gi, '') // Supprimer les caractères spéciaux
        .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
        .replace(/-+/g, '-') // Remplacer les tirets multiples par un seul
        .toLowerCase()
        .substring(0, 100); // Limiter la longueur
}

// Fonction pour formater les speakers
function formatSpeakers(speakers) {
    return speakers.map(speaker => ({
        name: speaker.name,
        picture: speaker.picture
    }));
}

// Fonction pour générer les props pour un talk
function generateProps(talk) {
    const props = {
        title: talk.title,
        speakers: formatSpeakers(talk.speakers),
        date: talk.date || '28 novembre', // Utiliser la date du talk
        time: talk.heure || 'À définir', // Utiliser l'heure du talk
        location: talk.location || 'Grande halle' // Utiliser la location du talk
    };

    return props;
}

// Fonction pour générer une vidéo et un still
function generateVideo(talk, index, total) {
    const fileName = sanitizeFileName(talk.title);
    const outputPath = path.join(OUTPUT_DIR, `${fileName}.mp4`);
    const stillPath = path.join(OUTPUT_DIR, `${fileName}.png`);

    logInfo(`[${index + 1}/${total}] Génération de la vidéo pour: "${talk.title}"`);
    logInfo(`Speakers: ${talk.speakers.map(s => s.name).join(', ')}`);

    try {
        const props = generateProps(talk);

        // Créer le répertoire de sortie s'il n'existe pas
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }

        // Créer un fichier temporaire pour les props (évite les problèmes de quoting)
        const propsFile = path.join(OUTPUT_DIR, `props_${index}.json`);
        fs.writeFileSync(propsFile, JSON.stringify(props, null, 2));

        // Commande Remotion CLI pour la vidéo
        const videoCommand = `npx remotion render ${ENTRY_POINT} ${COMPOSITION_ID} "${outputPath}" --props="${propsFile}"`;

        // Commande Remotion CLI pour le still (dernière frame)
        const stillCommand = `npx remotion still ${ENTRY_POINT} ${COMPOSITION_ID} "${stillPath}" --props="${propsFile}" --frame=359`;

        if (options.dryRun) {
            logInfo(`[DRY-RUN] Commande vidéo qui serait exécutée: ${videoCommand}`);
            logInfo(`[DRY-RUN] Commande still qui serait exécutée: ${stillCommand}`);
            logInfo(`[DRY-RUN] Props: ${JSON.stringify(props, null, 2)}`);
            // Nettoyer le fichier temporaire en mode dry-run
            if (fs.existsSync(propsFile)) {
                fs.unlinkSync(propsFile);
            }
            return { success: true, path: outputPath, stillPath: stillPath, dryRun: true };
        }

        logInfo(`Exécution vidéo: ${videoCommand}`);

        // Exécuter la commande vidéo
        execSync(videoCommand, {
            stdio: 'inherit',
            cwd: process.cwd()
        });

        logInfo(`Exécution still: ${stillCommand}`);

        // Exécuter la commande still
        execSync(stillCommand, {
            stdio: 'inherit',
            cwd: process.cwd()
        });

        // Nettoyer le fichier temporaire
        if (fs.existsSync(propsFile)) {
            fs.unlinkSync(propsFile);
        }

        logSuccess(`Vidéo générée: ${outputPath}`);
        logSuccess(`Still généré: ${stillPath}`);
        return { success: true, path: outputPath, stillPath: stillPath };

    } catch (error) {
        // Nettoyer le fichier temporaire en cas d'erreur
        const propsFile = path.join(OUTPUT_DIR, `props_${index}.json`);
        if (fs.existsSync(propsFile)) {
            fs.unlinkSync(propsFile);
        }

        logError(`Erreur lors de la génération de la vidéo pour "${talk.title}": ${error.message}`);
        return { success: false, error: error.message };
    }
}

// Fonction principale
async function main() {
    log('🎬 Générateur de vidéos DevFest Lyon 2025', 'cyan');
    log('==========================================', 'cyan');

    try {
        // Vérifier que le fichier speakers.json existe
        if (!fs.existsSync(SPEAKERS_FILE)) {
            throw new Error(`Le fichier ${SPEAKERS_FILE} n'existe pas`);
        }

        // Lire et parser le fichier speakers.json
        logInfo(`Lecture du fichier ${SPEAKERS_FILE}...`);
        const speakersData = JSON.parse(fs.readFileSync(SPEAKERS_FILE, 'utf8'));

        if (!Array.isArray(speakersData)) {
            throw new Error('Le fichier speakers.json doit contenir un tableau de talks');
        }

        // Filtrer les talks acceptés et confirmés
        const validTalks = speakersData.filter(talk =>
            talk.deliberationStatus === 'ACCEPTED' &&
            talk.confirmationStatus === 'CONFIRMED' &&
            talk.publicationStatus === 'PUBLISHED'
        );

        // Appliquer la limite si spécifiée
        const talksToProcess = options.limit ? validTalks.slice(0, options.limit) : validTalks;

        logInfo(`Nombre total de talks: ${speakersData.length}`);
        logInfo(`Talks valides (acceptés et confirmés): ${validTalks.length}`);
        if (options.limit) {
            logInfo(`Limite appliquée: ${options.limit} talks`);
        }
        logInfo(`Talks à traiter: ${talksToProcess.length}`);

        if (talksToProcess.length === 0) {
            logWarning('Aucun talk valide trouvé. Vérifiez les statuts dans speakers.json');
            return;
        }

        if (options.dryRun) {
            logWarning('Mode DRY-RUN activé - aucune vidéo ne sera générée');
        }

        // Statistiques
        const stats = {
            total: talksToProcess.length,
            success: 0,
            errors: 0,
            results: []
        };

        log('🚀 Début de la génération des vidéos...', 'magenta');
        log('');

        // Générer chaque vidéo
        for (let i = 0; i < talksToProcess.length; i++) {
            const talk = talksToProcess[i];
            const result = generateVideo(talk, i, talksToProcess.length);

            stats.results.push({
                title: talk.title,
                speakers: talk.speakers.map(s => s.name),
                ...result
            });

            if (result.success) {
                stats.success++;
            } else {
                stats.errors++;
            }

            log(''); // Ligne vide pour la lisibilité
        }

        // Afficher le résumé
        log('📊 Résumé de la génération', 'cyan');
        log('========================', 'cyan');
        logSuccess(`Vidéos générées avec succès: ${stats.success}`);

        if (stats.errors > 0) {
            logError(`Erreurs: ${stats.errors}`);
        }

        logInfo(`Répertoire de sortie: ${OUTPUT_DIR}`);

        // Afficher les détails des erreurs
        if (stats.errors > 0) {
            log('');
            log('❌ Détails des erreurs:', 'red');
            stats.results
                .filter(r => !r.success)
                .forEach(r => {
                    logError(`- ${r.title}: ${r.error}`);
                });
        }

        // Afficher les vidéos générées
        if (stats.success > 0) {
            log('');
            log('✅ Vidéos générées:', 'green');
            stats.results
                .filter(r => r.success)
                .forEach(r => {
                    logSuccess(`- ${r.title} (${r.speakers.join(', ')})`);
                    if (r.stillPath) {
                        logInfo(`  📸 Still: ${path.basename(r.stillPath)}`);
                    }
                });
        }

    } catch (error) {
        logError(`Erreur fatale: ${error.message}`);
        process.exit(1);
    }
}

// Gestion des arguments de ligne de commande
if (process.argv.includes('--help') || process.argv.includes('-h')) {
    log('Usage: node generate-devfest-lyon-videos.js [options]', 'cyan');
    log('');
    log('Options:', 'yellow');
    log('  --help, -h     Afficher cette aide');
    log('  --dry-run      Afficher les commandes sans les exécuter');
    log('  --limit N      Limiter à N vidéos (pour les tests)');
    log('');
    log('Configuration:', 'yellow');
    log(`  Fichier speakers: ${SPEAKERS_FILE}`);
    log(`  Répertoire sortie: ${OUTPUT_DIR}`);
    log(`  Composition: ${COMPOSITION_ID}`);
    process.exit(0);
}

// Exécuter le script
main().catch(error => {
    logError(`Erreur inattendue: ${error.message}`);
    process.exit(1);
});
