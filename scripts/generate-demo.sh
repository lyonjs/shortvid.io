#!/bin/bash

# Generate demo video for landing page
# This script renders several showcase compositions and merges them with crossfades

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
OUT_DIR="$PROJECT_DIR/out/demo"
FINAL_OUTPUT="$PROJECT_DIR/public/videos/demo.mp4"

# Crossfade duration in seconds
XFADE=0.5

# Create output directory
mkdir -p "$OUT_DIR"
mkdir -p "$(dirname "$FINAL_OUTPUT")"

echo "🎬 Generating demo video..."

# Define compositions to render (id:fps:max_frames)
# Each clip will be trimmed to ~4 seconds for a snappy demo
COMPOSITIONS=(
  "DevfestNantesTalk2025:30:120"
  "Mixit:30:120"
  "Volcamp-2023:30:120"
  "CampingDesSpeakers:60:240"
  "DevfestNantesTalk2024:30:120"
)

# Render each composition
RENDERED_FILES=()
for comp in "${COMPOSITIONS[@]}"; do
  IFS=':' read -r id fps max_frames <<< "$comp"
  output_file="$OUT_DIR/${id}.mp4"

  echo "📹 Rendering $id (fps: $fps, frames: 0-$max_frames)..."

  pnpm remotion render remotion/index.tsx "$id" "$output_file" \
    --frames=0-$max_frames \
    --codec=h264 \
    --crf=18 \
    2>/dev/null || {
      echo "⚠️  Failed to render $id, skipping..."
      continue
    }

  if [ -f "$output_file" ]; then
    RENDERED_FILES+=("$output_file")
    echo "   ✓ Rendered successfully"
  fi
done

if [ ${#RENDERED_FILES[@]} -eq 0 ]; then
  echo "❌ No compositions were rendered successfully"
  exit 1
fi

echo ""
echo "🔗 Normalizing ${#RENDERED_FILES[@]} videos to 1280x720 @ 30fps..."

# Create intermediate normalized files
NORMALIZED_FILES=()
for file in "${RENDERED_FILES[@]}"; do
  base=$(basename "$file" .mp4)
  normalized="$OUT_DIR/${base}_norm.mp4"

  echo "   → $base"

  # Normalize to 1280x720, 30fps, remove audio
  ffmpeg -y -i "$file" \
    -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,fps=30" \
    -c:v libx264 \
    -crf 18 \
    -preset fast \
    -an \
    "$normalized" \
    2>/dev/null

  NORMALIZED_FILES+=("$normalized")
done

echo ""
echo "🎞️  Creating final video with crossfades..."

NUM_FILES=${#NORMALIZED_FILES[@]}

if [ $NUM_FILES -eq 1 ]; then
  cp "${NORMALIZED_FILES[0]}" "$FINAL_OUTPUT"
else
  # Get durations
  DURATIONS=()
  for file in "${NORMALIZED_FILES[@]}"; do
    dur=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$file")
    DURATIONS+=("$dur")
  done

  # Build input arguments
  INPUTS=""
  for file in "${NORMALIZED_FILES[@]}"; do
    INPUTS="$INPUTS -i \"$file\""
  done

  # Build xfade filter chain
  # For N videos, we need N-1 xfade filters chained together
  FILTER_COMPLEX=""
  accumulated_duration=0

  for ((i=0; i<NUM_FILES-1; i++)); do
    if [ $i -eq 0 ]; then
      # First xfade: [0][1] -> [v1]
      offset=$(echo "${DURATIONS[0]} - $XFADE" | bc)
      FILTER_COMPLEX="[0][1]xfade=transition=fade:duration=$XFADE:offset=$offset[v1]"
      accumulated_duration=$(echo "${DURATIONS[0]} + ${DURATIONS[1]} - $XFADE" | bc)
    else
      # Subsequent xfades: [vN][N+1] -> [vN+1]
      next=$((i+1))
      offset=$(echo "$accumulated_duration - $XFADE" | bc)
      FILTER_COMPLEX="$FILTER_COMPLEX;[v$i][$next]xfade=transition=fade:duration=$XFADE:offset=$offset[v$next]"
      accumulated_duration=$(echo "$accumulated_duration + ${DURATIONS[$next]} - $XFADE" | bc)
    fi
  done

  # Final output stream name
  final_stream="[v$((NUM_FILES-1))]"

  # Run ffmpeg with the filter chain
  eval ffmpeg -y $INPUTS \
    -filter_complex "\"$FILTER_COMPLEX\"" \
    -map "\"$final_stream\"" \
    -c:v libx264 -crf 20 -preset medium -movflags +faststart \
    "\"$FINAL_OUTPUT\"" \
    2>/dev/null
fi

echo ""
echo "✅ Demo video generated: $FINAL_OUTPUT"
echo "📊 File size: $(du -h "$FINAL_OUTPUT" | cut -f1)"
echo "⏱️  Duration: $(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$FINAL_OUTPUT" | xargs printf "%.1f")s"

# Cleanup temporary files
rm -rf "$OUT_DIR"

echo ""
echo "🎉 Done!"