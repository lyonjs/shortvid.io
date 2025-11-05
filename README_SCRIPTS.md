# 🎬 Scripts de génération de vidéos DevFest Lyon 2025

Ce projet contient des scripts automatisés pour générer des vidéos de présentation des talks du DevFest Lyon 2025 à partir du fichier `speakers.json`.

## 🚀 Utilisation rapide

### Script principal (recommandé)
```bash
# Voir l'aide
./devfest-lyon.sh help

# Générer toutes les vidéos
./devfest-lyon.sh generate

# Générer seulement 5 vidéos (pour tester)
./devfest-lyon.sh generate --limit 5

# Voir le statut des vidéos
./devfest-lyon.sh status

# Nettoyer les vidéos générées
./devfest-lyon.sh clean
```

## 📁 Fichiers créés

### Scripts principaux
- `devfest-lyon.sh` - **Script principal** (interface unifiée)
- `generate-all-videos.sh` - Script de génération des vidéos
- `clean-videos.sh` - Script de nettoyage des vidéos
- `generate-devfest-lyon-videos.js` - Script Node.js de génération

### Documentation
- `DEVFEST_LYON_VIDEOS.md` - Documentation détaillée
- `README_SCRIPTS.md` - Ce fichier (résumé des scripts)

## 🎯 Fonctionnalités

### ✅ Génération automatique
- Lecture du fichier `speakers.json`
- Filtrage des talks acceptés et confirmés
- Génération des vidéos avec Remotion CLI
- Noms de fichiers sécurisés
- Gestion d'erreurs complète

### ✅ Options avancées
- Mode dry-run (test sans génération)
- Limitation du nombre de vidéos
- Génération en parallèle
- Logs colorés et informatifs
- Validation des données

### ✅ Gestion des vidéos
- Affichage du statut
- Nettoyage sécurisé
- Comptage et taille des fichiers
- Interface utilisateur intuitive

## 📊 Statistiques

- **19 talks** dans le fichier `speakers.json`
- **Tous acceptés et confirmés** (prêts pour la génération)
- **~30 secondes** par vidéo (6 secondes à 60fps)
- **~1.8 MB** par vidéo (résolution 1280x720)
- **Format MP4** (H.264)

## 🛠️ Prérequis

- Node.js (version 18+)
- Dépendances Remotion installées (`pnpm install`)
- Fichier `speakers.json` dans le répertoire courant

## 📋 Commandes disponibles

### Script principal (`./devfest-lyon.sh`)
```bash
./devfest-lyon.sh generate [options]    # Générer les vidéos
./devfest-lyon.sh clean [options]       # Nettoyer les vidéos
./devfest-lyon.sh status                # Afficher le statut
./devfest-lyon.sh help                  # Afficher l'aide
```

### Script de génération (`./generate-all-videos.sh`)
```bash
./generate-all-videos.sh                # Générer toutes les vidéos
./generate-all-videos.sh --limit 5      # Limiter à 5 vidéos
./generate-all-videos.sh --dry-run      # Mode test
```

### Script de nettoyage (`./clean-videos.sh`)
```bash
./clean-videos.sh                       # Nettoyer avec confirmation
./clean-videos.sh --confirm             # Nettoyer sans demander
./clean-videos.sh --dry-run             # Voir ce qui serait supprimé
```

### Script Node.js (`node generate-devfest-lyon-videos.js`)
```bash
node generate-devfest-lyon-videos.js --help
node generate-devfest-lyon-videos.js --dry-run --limit 3
```

## 🎨 Personnalisation

### Modifier les données par défaut
Éditez `generate-devfest-lyon-videos.js` :
```javascript
const props = {
    title: talk.title,
    speakers: formatSpeakers(talk.speakers),
    date: 'DevFest Lyon 2025',    // ← Modifiable
    time: 'À venir',              // ← Modifiable
    location: 'Lyon, France'      // ← Modifiable
};
```

### Modifier l'apparence des vidéos
Éditez les composants Remotion dans :
- `remotion/compositions/showcases/devfestLyon/`

## 🐛 Dépannage

### Problèmes courants
1. **Node.js manquant** : Installer Node.js 18+
2. **Dépendances manquantes** : `pnpm install`
3. **Fichier speakers.json manquant** : Vérifier la présence du fichier
4. **Erreurs Remotion** : Vérifier la configuration Remotion

### Logs et débogage
- Tous les scripts affichent des logs détaillés
- Utilisez `--dry-run` pour tester sans générer
- Vérifiez les permissions d'exécution : `chmod +x *.sh`

## 📈 Performance

- **Génération séquentielle** : ~30s par vidéo
- **Génération parallèle** : Possible avec `--parallel N`
- **Espace disque** : ~1.8 MB par vidéo
- **Mémoire** : ~500 MB pendant la génération

## 🤝 Support

Pour toute question ou problème :
1. Vérifiez les logs d'erreur
2. Testez avec `--dry-run` d'abord
3. Consultez la documentation détaillée dans `DEVFEST_LYON_VIDEOS.md`
4. Vérifiez que tous les prérequis sont installés

---

**🎬 Bonne génération de vidéos !** 🎬
