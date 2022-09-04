# LyonJS meetup social trailer videos generator

[![🚧 Integration](https://github.com/lyonjs/social-video-generator/actions/workflows/integration.yml/badge.svg)](https://github.com/lyonjs/social-video-generator/actions/workflows/integration.yml)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/lyonjs/social-video-generator/main)
![GitHub](https://img.shields.io/github/license/lyonjs/social-video-generator)
![Twitter](https://img.shields.io/twitter/follow/LyonJS?style=social)

This github project use Remotion to generate video for LyonJS social network.
We could generate video directly with Github Action workflows.

## Available trailers to render

In order to let you generate videos without installing this repository locally, you can use Github Action workflows to generate video and image based on an input form.
Take a look at the job artifact to get generated video and image.

### Sponsor video presentation

When you want to generate a video for announcing the sponsor of an event, you wan use this workflow

- [Workflow to trigger for sponsor](https://github.com/lyonjs/social-video-generator/actions/workflows/render-sponsor.yml)
  Available parameters:

- `companyName` Name of the company
- `backgroundImg` Url of an image for background
- `sponsorLogo` Url of sponsor Logo

### Talk video presentation

When you want to generate a video for announcing a specific talk

- [Workflow to trigger for talk](https://github.com/lyonjs/social-video-generator/actions/workflows/render-talk.yml)
  Available parameters:

- `speakersNames`: string;
- `talkTitle`: string;
- `speakerPicture?`: string;
- `titleSize?`: string;

### Meetup announce video

- [Workflow to trigger for meetup](https://github.com/lyonjs/social-video-generator/actions/workflows/render-meetup.yml)
  Available parameters:

- `title`: string;
- `date`: string;
- `backgroundImg` Url of an image for background

## ✍️Contributing

[Take a look at the contributing documentation](./CONTRIBUTING.md)
