# LyonJS meetup social trailer videos generator

[![🚧 Integration](https://github.com/lyonjs/social-video-generator/actions/workflows/integration.yml/badge.svg)](https://github.com/lyonjs/social-video-generator/actions/workflows/integration.yml)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/lyonjs/social-video-generator/main)
![GitHub](https://img.shields.io/github/license/lyonjs/social-video-generator)
![Twitter](https://img.shields.io/twitter/follow/LyonJS?style=social)

This github project use Remotion to generate video for LyonJS social network.
We could generate video directly with Github Action workflows.

## Available trailers to render

### Sponsor video presentation

When you want to generate a video for announcing the sponsor of an event, you wan use this workflow

- [Workflow to trigger for sponsor](https://github.com/lyonjs/social-video-generator/actions/workflows/render-sponsor.yml)

https://user-images.githubusercontent.com/6263857/188305341-6f2ae2ae-e861-4b6c-978e-55e86fe8a70f.mp4

Available parameters:

- `companyName` Name of the company
- `backgroundImg` Url of an image for background
- `sponsorLogo` Url of sponsor Logo

### Talk video presentation

When you want to generate a video for announcing a specific talk

- [Workflow to trigger for sponsor](https://github.com/lyonjs/social-video-generator/actions/workflows/render-talk.yml)

https://user-images.githubusercontent.com/6263857/188305325-8465abfb-c872-432c-a600-2ed8a9b5bffa.mp4

Available parameters:

- `speakersNames`: string;
- `talkTitle`: string;
- `speakerPicture?`: string;
- `titleSize?`: string;

## [✍️Contributing](./CONTRIBUTING.md)
