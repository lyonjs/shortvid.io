#!/bin/bash

# Script de génération de toutes les vidéos DevFest Lyon 2025
# Usage: ./generate-all-videos.sh [options]

set -e  # Arrêter en cas d'erreur

# Couleurs pour les logs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Fonctions de logging
log() {
    echo -e "${1}${2}${NC}"
}

log_info() {
    log "${BLUE}" "ℹ️  $1"
}

log_success() {
    log "${GREEN}" "✅ $1"
}

log_warning() {
    log "${YELLOW}" "⚠️  $1"
}

log_error() {
    log "${RED}" "❌ $1"
}

log_header() {
    log "${CYAN}" "$1"
}

# Afficher l'aide
show_help() {
    log_header "🎬 Générateur de vidéos DevFest Lyon 2025"
    log_header "=========================================="
    echo ""
    log_info "Usage: $0 [options]"
    echo ""
    log_info "Options:"
    echo "  --help, -h           Afficher cette aide"
    echo "  --dry-run            Afficher les commandes sans les exécuter"
    echo "  --limit N            Limiter à N vidéos (pour les tests)"
    echo "  --force              Forcer la régénération (écraser les vidéos existantes)"
    echo "  --parallel N         Générer N vidéos en parallèle (défaut: 1)"
    echo ""
    log_info "Exemples:"
    echo "  $0                   # Générer toutes les vidéos"
    echo "  $0 --limit 5         # Générer seulement 5 vidéos"
    echo "  $0 --dry-run         # Voir ce qui serait généré"
    echo "  $0 --parallel 3      # Générer 3 vidéos en parallèle"
    echo ""
}

# Variables par défaut
DRY_RUN=false
LIMIT=""
FORCE=false
PARALLEL=1

# Parser les arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --help|-h)
            show_help
            exit 0
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        --limit)
            LIMIT="$2"
            shift 2
            ;;
        --force)
            FORCE=true
            shift
            ;;
        --parallel)
            PARALLEL="$2"
            shift 2
            ;;
        *)
            log_error "Option inconnue: $1"
            show_help
            exit 1
            ;;
    esac
done

# Vérifier que Node.js est installé
if ! command -v node &> /dev/null; then
    log_error "Node.js n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier que le fichier speakers.json existe
if [ ! -f "speakers.json" ]; then
    log_error "Le fichier speakers.json n'existe pas dans le répertoire courant."
    exit 1
fi

# Vérifier que le script de génération existe
if [ ! -f "generate-devfest-lyon-videos.js" ]; then
    log_error "Le script generate-devfest-lyon-videos.js n'existe pas."
    exit 1
fi

# Construire la commande
CMD="node generate-devfest-lyon-videos.js"

if [ "$DRY_RUN" = true ]; then
    CMD="$CMD --dry-run"
fi

if [ -n "$LIMIT" ]; then
    CMD="$CMD --limit $LIMIT"
fi

# Afficher les informations
log_header "🎬 Générateur de vidéos DevFest Lyon 2025"
log_header "=========================================="
log_info "Mode: $([ "$DRY_RUN" = true ] && echo "DRY-RUN" || echo "GÉNÉRATION")"
if [ -n "$LIMIT" ]; then
    log_info "Limite: $LIMIT vidéos"
fi
log_info "Parallélisme: $PARALLEL"
if [ "$FORCE" = true ]; then
    log_warning "Mode FORCE activé - les vidéos existantes seront écrasées"
fi
echo ""

# Exécuter la commande
log_info "Exécution de la commande: $CMD"
echo ""

if [ "$DRY_RUN" = true ]; then
    log_warning "Mode DRY-RUN - aucune vidéo ne sera générée"
fi

# Exécuter le script Node.js
eval $CMD

# Vérifier le code de sortie
if [ $? -eq 0 ]; then
    log_success "Génération terminée avec succès !"
    
    if [ "$DRY_RUN" = false ]; then
        log_info "Vidéos générées dans le répertoire: ./out/devfest-lyon/"
        log_info "Pour voir les vidéos: ls -la ./out/devfest-lyon/"
    fi
else
    log_error "Erreur lors de la génération des vidéos."
    exit 1
fi
