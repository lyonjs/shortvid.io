#!/bin/bash

# Script de nettoyage des vidéos générées
# Usage: ./clean-videos.sh

set -e

# Couleurs pour les logs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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
    log_header "🧹 Nettoyeur de vidéos DevFest Lyon 2025"
    log_header "========================================"
    echo ""
    log_info "Usage: $0 [options]"
    echo ""
    log_info "Options:"
    echo "  --help, -h           Afficher cette aide"
    echo "  --dry-run            Afficher ce qui serait supprimé sans le faire"
    echo "  --confirm            Confirmer la suppression sans demander"
    echo ""
    log_info "Ce script supprime:"
    echo "  - Le répertoire ./out/devfest-lyon/ et tout son contenu"
    echo "  - Toutes les vidéos générées"
    echo ""
}

# Variables par défaut
DRY_RUN=false
CONFIRM=false

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
        --confirm)
            CONFIRM=true
            shift
            ;;
        *)
            log_error "Option inconnue: $1"
            show_help
            exit 1
            ;;
    esac
done

# Répertoire à nettoyer
OUTPUT_DIR="./out/devfest-lyon"

log_header "🧹 Nettoyeur de vidéos DevFest Lyon 2025"
log_header "========================================"

# Vérifier si le répertoire existe
if [ ! -d "$OUTPUT_DIR" ]; then
    log_warning "Le répertoire $OUTPUT_DIR n'existe pas. Rien à nettoyer."
    exit 0
fi

# Compter les fichiers
FILE_COUNT=$(find "$OUTPUT_DIR" -name "*.mp4" | wc -l)
TOTAL_SIZE=$(du -sh "$OUTPUT_DIR" 2>/dev/null | cut -f1 || echo "inconnue")

log_info "Répertoire trouvé: $OUTPUT_DIR"
log_info "Nombre de vidéos: $FILE_COUNT"
log_info "Taille totale: $TOTAL_SIZE"

if [ $FILE_COUNT -eq 0 ]; then
    log_warning "Aucune vidéo trouvée. Rien à nettoyer."
    exit 0
fi

# Mode dry-run
if [ "$DRY_RUN" = true ]; then
    log_warning "Mode DRY-RUN - voici ce qui serait supprimé:"
    echo ""
    find "$OUTPUT_DIR" -name "*.mp4" | while read file; do
        log_info "  - $(basename "$file")"
    done
    echo ""
    log_info "Commande qui serait exécutée: rm -rf $OUTPUT_DIR"
    exit 0
fi

# Demander confirmation si pas en mode --confirm
if [ "$CONFIRM" = false ]; then
    echo ""
    log_warning "Êtes-vous sûr de vouloir supprimer $FILE_COUNT vidéo(s) ?"
    log_warning "Taille totale: $TOTAL_SIZE"
    echo ""
    read -p "Tapez 'yes' pour confirmer: " -r
    if [ "$REPLY" != "yes" ]; then
        log_info "Suppression annulée."
        exit 0
    fi
fi

# Supprimer le répertoire
log_info "Suppression du répertoire $OUTPUT_DIR..."
if rm -rf "$OUTPUT_DIR"; then
    log_success "Répertoire supprimé avec succès: $OUTPUT_DIR"
    log_success "$FILE_COUNT vidéo(s) supprimée(s)"
else
    log_error "Erreur lors de la suppression du répertoire $OUTPUT_DIR"
    exit 1
fi

log_success "Nettoyage terminé !"
