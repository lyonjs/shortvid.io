#!/bin/bash

# Script principal pour la gestion des vidéos DevFest Lyon 2025
# Usage: ./devfest-lyon.sh [command] [options]

set -e

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
    log_header "🎬 Gestionnaire de vidéos DevFest Lyon 2025"
    log_header "==========================================="
    echo ""
    log_info "Usage: $0 [command] [options]"
    echo ""
    log_info "Commandes disponibles:"
    echo "  generate [options]    Générer les vidéos"
    echo "  clean [options]       Nettoyer les vidéos générées"
    echo "  status                Afficher le statut des vidéos"
    echo "  help                  Afficher cette aide"
    echo ""
    log_info "Options pour 'generate':"
    echo "  --dry-run            Afficher les commandes sans les exécuter"
    echo "  --limit N            Limiter à N vidéos (pour les tests)"
    echo "  --force              Forcer la régénération"
    echo "  --parallel N         Générer N vidéos en parallèle"
    echo ""
    log_info "Options pour 'clean':"
    echo "  --dry-run            Afficher ce qui serait supprimé"
    echo "  --confirm            Confirmer sans demander"
    echo ""
    log_info "Exemples:"
    echo "  $0 generate                    # Générer toutes les vidéos"
    echo "  $0 generate --limit 5          # Générer 5 vidéos"
    echo "  $0 generate --dry-run          # Voir ce qui serait généré"
    echo "  $0 clean                       # Nettoyer les vidéos"
    echo "  $0 status                      # Voir le statut"
    echo ""
}

# Afficher le statut
show_status() {
    log_header "📊 Statut des vidéos DevFest Lyon 2025"
    log_header "====================================="
    echo ""
    
    # Vérifier si le fichier speakers.json existe
    if [ ! -f "speakers.json" ]; then
        log_error "Le fichier speakers.json n'existe pas."
        return 1
    fi
    
    # Compter les talks dans speakers.json
    TOTAL_TALKS=$(grep -c '"title"' speakers.json 2>/dev/null || echo "0")
    log_info "Total des talks dans speakers.json: $TOTAL_TALKS"
    
    # Vérifier le répertoire de sortie
    OUTPUT_DIR="./out/devfest-lyon"
    if [ -d "$OUTPUT_DIR" ]; then
        VIDEO_COUNT=$(find "$OUTPUT_DIR" -name "*.mp4" | wc -l)
        STILL_COUNT=$(find "$OUTPUT_DIR" -name "*.png" | wc -l)
        TOTAL_SIZE=$(du -sh "$OUTPUT_DIR" 2>/dev/null | cut -f1 || echo "inconnue")
        log_info "Vidéos générées: $VIDEO_COUNT"
        log_info "Stills générés: $STILL_COUNT"
        log_info "Taille totale: $TOTAL_SIZE"
        log_info "Répertoire: $OUTPUT_DIR"
        
        if [ $VIDEO_COUNT -gt 0 ]; then
            echo ""
            log_info "Vidéos disponibles:"
            find "$OUTPUT_DIR" -name "*.mp4" | while read file; do
                FILE_SIZE=$(du -h "$file" | cut -f1)
                log_success "  - $(basename "$file") ($FILE_SIZE)"
            done
        fi
        
        if [ $STILL_COUNT -gt 0 ]; then
            echo ""
            log_info "Stills disponibles:"
            find "$OUTPUT_DIR" -name "*.png" | while read file; do
                FILE_SIZE=$(du -h "$file" | cut -f1)
                log_success "  - $(basename "$file") ($FILE_SIZE)"
            done
        fi
    else
        log_warning "Aucune vidéo générée. Répertoire $OUTPUT_DIR n'existe pas."
    fi
    
    echo ""
}

# Fonction principale
main() {
    if [ $# -eq 0 ]; then
        show_help
        exit 0
    fi
    
    COMMAND=$1
    shift
    
    case $COMMAND in
        generate)
            log_info "Lancement de la génération des vidéos..."
            ./generate-all-videos.sh "$@"
            ;;
        clean)
            log_info "Lancement du nettoyage des vidéos..."
            ./clean-videos.sh "$@"
            ;;
        status)
            show_status
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            log_error "Commande inconnue: $COMMAND"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Vérifier que les scripts existent
if [ ! -f "generate-all-videos.sh" ] || [ ! -f "clean-videos.sh" ]; then
    log_error "Scripts manquants. Assurez-vous que generate-all-videos.sh et clean-videos.sh existent."
    exit 1
fi

# Exécuter la fonction principale
main "$@"
