# 🎬 Générateur de vidéos DevFest Lyon 2025

Ce script permet de générer automatiquement toutes les vidéos de présentation des talks du DevFest Lyon 2025 à partir du fichier `speakers.json`.

## 🚀 Utilisation rapide

### Générer toutes les vidéos
```bash
./generate-all-videos.sh
```

### Générer seulement quelques vidéos (pour tester)
```bash
./generate-all-videos.sh --limit 5
```

### Voir ce qui serait généré (sans créer de vidéos)
```bash
./generate-all-videos.sh --dry-run
```

## 📋 Prérequis

- Node.js (version 18 ou plus)
- Le fichier `speakers.json` dans le répertoire courant
- Les dépendances Remotion installées (`pnpm install`)

## 🛠️ Scripts disponibles

### Script principal (recommandé)
```bash
./generate-all-videos.sh [options]
```

### Script Node.js direct
```bash
node generate-devfest-lyon-videos.js [options]
```

## ⚙️ Options disponibles

| Option | Description |
|--------|-------------|
| `--help`, `-h` | Afficher l'aide |
| `--dry-run` | Afficher les commandes sans les exécuter |
| `--limit N` | Limiter à N vidéos (utile pour les tests) |
| `--force` | Forcer la régénération (écraser les vidéos existantes) |
| `--parallel N` | Générer N vidéos en parallèle (défaut: 1) |

## 📁 Structure des fichiers

```
out/devfest-lyon/
├── construire-des-serveurs-mcp-plus-intelligents-approches-gnriques-vs-spcifiques-au-domaine.mp4
├── docker-bake-lgance-et-standardisation-pour-le-build-de-vos-images-docker.mp4
└── ...
```

## 🎯 Fonctionnalités

- ✅ **Filtrage automatique** : Seuls les talks acceptés et confirmés sont traités
- ✅ **Noms de fichiers sécurisés** : Les caractères spéciaux sont supprimés
- ✅ **Gestion d'erreurs** : Rapport détaillé des succès et échecs
- ✅ **Mode dry-run** : Test sans génération de vidéos
- ✅ **Limitation** : Possibilité de limiter le nombre de vidéos
- ✅ **Logs colorés** : Interface claire et informative
- ✅ **Validation des données** : Vérification de la structure des données

## 📊 Format des données

Le script lit le fichier `speakers.json` et extrait pour chaque talk :

- **Titre** : `talk.title`
- **Speakers** : `talk.speakers[].name` et `talk.speakers[].picture`
- **Date** : "DevFest Lyon 2025" (fixe)
- **Heure** : "À venir" (à personnaliser si nécessaire)
- **Lieu** : "Lyon, France" (fixe)

## 🔧 Configuration

Vous pouvez modifier les valeurs par défaut dans le script `generate-devfest-lyon-videos.js` :

```javascript
// Configuration
const SPEAKERS_FILE = './speakers.json';
const OUTPUT_DIR = './out/devfest-lyon';
const COMPOSITION_ID = 'DevfestLyonTalk';
const ENTRY_POINT = './remotion/index.tsx';
```

## 🐛 Dépannage

### Erreur "Node.js n'est pas installé"
```bash
# Installer Node.js (avec nvm par exemple)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

### Erreur "speakers.json n'existe pas"
Vérifiez que le fichier `speakers.json` est présent dans le répertoire courant.

### Erreur de génération Remotion
```bash
# Vérifier que les dépendances sont installées
pnpm install

# Vérifier que Remotion fonctionne
npx remotion --help
```

### Vidéos corrompues
Supprimez le répertoire de sortie et relancez :
```bash
rm -rf out/devfest-lyon
./generate-all-videos.sh
```

## 📈 Performance

- **Temps de génération** : ~30 secondes par vidéo (6 secondes à 60fps)
- **Taille des vidéos** : ~1.8 MB par vidéo
- **Résolution** : 1280x720 (HD)
- **Format** : MP4 (H.264)

## 🎨 Personnalisation

Pour modifier l'apparence des vidéos, éditez les composants Remotion dans :
- `remotion/compositions/showcases/devfestLyon/`

## 📝 Logs

Le script affiche des logs détaillés :
- 🔵 **Info** : Informations générales
- 🟢 **Succès** : Opérations réussies
- 🟡 **Avertissement** : Avertissements non bloquants
- 🔴 **Erreur** : Erreurs bloquantes

## 🤝 Support

En cas de problème, vérifiez :
1. Que tous les prérequis sont installés
2. Que le fichier `speakers.json` est valide
3. Que les composants Remotion fonctionnent
4. Les logs d'erreur pour plus de détails
