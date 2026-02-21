# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Shortvid.io is a video generation platform built on [Remotion](https://www.remotion.dev/) for creating social media content for tech meetups and conferences. The project generates videos, thumbnails, and images using React components that are rendered via Remotion's video rendering engine.

## Key Technologies

- **Remotion 4.x**: Core video rendering engine
- **Next.js 14**: Web application framework
- **TypeScript**: Primary language
- **Jest**: Testing framework
- **pnpm**: Package manager (required)
- **ffmpeg**: Required for video rendering

## Common Commands

### Development

```bash
pnpm install                    # Install dependencies
pnpm dev                        # Start Next.js preview website on port 3000
pnpm start                      # Start Remotion dev environment on port 3000
pnpm run:studio                 # Alternative command for Remotion studio
```

### Testing & Linting

```bash
pnpm test                       # Run all tests with Jest
pnpm lint                       # Run ESLint on remotion, app, src, __test__ directories
pnpm test:format                # Run lint + TypeScript compilation check
```

### Building

```bash
pnpm build                      # Build Next.js application
```

### Video Rendering

Render a single video:

```bash
pnpm remotion render remotion/index.tsx <CompositionId> out/<filename>.mp4 --props='{"key":"value"}'
```

Render still frame:

```bash
pnpm remotion still <CompositionId> out/<filename>.jpeg --frame=-1 --props='{"key":"value"}'
```

## Architecture

### Directory Structure

```
remotion/
├── compositions/
│   ├── templates/          # Generic reusable templates (e.g., LyonJSMeetup, MeetupToolKit)
│   │   ├── meetup/         # Meetup-related compositions
│   │   ├── talk/           # Talk/presentation compositions
│   │   ├── silhouette/     # Silhouette-style compositions
│   │   ├── sponsors/       # Sponsor showcase compositions
│   │   └── layers/         # Layered composition components
│   └── showcases/          # Event-specific implementations (e.g., lyonJS, devoxx, mixit)
│       ├── lyonJS/
│       ├── devoxx/
│       ├── devfestNantes/
│       └── ...
├── design/
│   ├── atoms/              # Basic building blocks (Avatar, Title, Text, EventLogo)
│   ├── molecules/          # Composite components (AvatarWithCaption, TalkDetails)
│   ├── animations/         # Reusable animation utilities
│   └── components/         # Shared Remotion components
├── types/                  # TypeScript type definitions
├── hooks/                  # Remotion-specific hooks
├── index.tsx               # Entry point - registers RemotionRoot
└── Video.tsx               # RemotionRoot component that registers all compositions

app/                        # Next.js App Router pages
src/
├── app/
│   ├── components/         # Next.js web app components
│   ├── hooks/              # Next.js app hooks
│   └── utils/              # Next.js utilities
├── context/                # React context providers
└── data/                   # Static data and configuration

__test__/                   # Jest test files mirroring app structure
```

### Composition System

Remotion compositions are organized hierarchically:

1. **Templates** (`remotion/compositions/templates/`): Generic, reusable video templates that accept customization props (colors, logos, text, images). Examples: `LyonJS-Talk`, `TalkBranded`, `Meetup`, `Silhouette`.

2. **Showcases** (`remotion/compositions/showcases/`): Event-specific implementations that extend templates with event branding. Each showcase directory contains compositions for a specific conference/meetup.

3. **Design System**:
   - **Atoms**: Basic visual elements (Avatar, Title, BackgroundCircleNoise, etc.)
   - **Molecules**: Combinations of atoms (AvatarWithCaption, TalkDetails, IconWithCaption)
   - These are composed into larger templates

### Adding New Compositions

1. Create component in appropriate directory under `remotion/compositions/`
2. Define Zod schema for props validation
3. Register composition in parent `.composition.tsx` file using `<Composition>` component
4. Import and include in `remotion/Video.tsx` to expose in Remotion UI

### Schema Validation

All compositions use Zod schemas for prop validation (from `@remotion/zod-types`). Schemas define:

- Required and optional props
- Type validation
- Default values

## Code Style & Linting

### Import Sorting

Imports must follow this exact order (enforced by `simple-import-sort/imports`):

1. Mock imports
2. React and external packages (react first, then @packages, then others)
3. Internal packages
4. Side effect imports
5. Parent imports (deeper first: `../../` before `../`)
6. Relative imports (deeper first)
7. Style imports (`.css` files)

### ESLint Rules

- No `console.log` (only `console.warn` and `console.error` allowed)
- Unused TypeScript variables are errors
- All imports must be sorted correctly
- First import, newline after imports, no duplicate imports enforced

## Testing

- Tests use Jest with jsdom environment
- Test files in `__test__/` mirror the structure of `app/` and `src/`
- Setup file: `setup-jest.js`
- Run single test: `pnpm test <test-file-pattern>`

## Docker Support

Build image:

```bash
docker image build -t shortvid/run .
```

Run with existing image:

```bash
docker run -v $(pwd)/out:/usr/src/app/out -it zenika/shortvid pnpm remotion render remotion/index.tsx <CompositionId> out/<filename>.mp4 [PROPS]
```

## Important Notes

- **Package Manager**: Must use `pnpm` (specified in `package.json` as `pnpm@8.15.9`)
- **Node Version**: Requires Node >= 18
- **Remotion Config**: Configuration in `remotion.config.ts` applies only to CLI renders (not preview)
- **Props**: Composition props can be passed via JSON files, URL parameters (in web UI), or CLI `--props` flag
- **Output Directory**: Rendered videos/images go to `out/` directory
- **Entry Point**: `remotion/index.tsx` is the required entry point for all Remotion CLI commands
