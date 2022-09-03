# LyonJS meetup social trailer videos generator

![Twitter](https://img.shields.io/twitter/follow/LyonJS?style=social)

This github project use Remotion to generate video for LyonJS social network.
We could generate video directly with Github Action workflows.

## Commands

**Install Dependencies**

```console
pnpm i
```

**Start Preview**

```console
pnpm start
```

**Upgrade Remotion**

```console
pnpm run upgrade
```

**Format code with prettier**

```console
pnpm format
```

## Available trailers to render

### Sponsor video presentation

When you want to generate a video for announcing the sponsor of an event, you wan use this workflow

- [Workflow to trigger for sponsor](https://github.com/lyonjs/social-video-generator/actions/workflows/render-sponsor.yml)
- [Example](https://github.com/lyonjs/social-video-generator/issues/1#issuecomment-1236144787)

Available parameters:

- `companyName` Name of the company
- `backgroundImg` Url of an image for background
- `sponsorLogo` Url of sponsor Logo

## Docs of Remotion

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).
