# Contribution documentation

## Installation

In order to install project, please install Node current LTS version.

- Fetch repository
- Install [pnpm](https://pnpm.io/) and [ffmpeg](https://ffmpeg.org/)
- Install dependencies with [pnpm](https://pnpm.io/)

Remotion also maintain a [great installation doc that could help you too](https://www.remotion.dev/docs/).

## How to generate local video with pnpm

Inside the repo

```console
pnpm install
```

In windows create a props with local file json, it's much easier 😊

```console
pnpm remotion render Devoxx2023 out/Devoxx2023.mp4 --props=filejson/test.json
```

<img width="859" alt="image" src="https://user-images.githubusercontent.com/1814314/230098734-fb6fdabb-e6a3-451a-b4e3-7cc4dea647fa.png">

## How to generate local video with Docker

This project can be run using Docker. 🐳
You can either reuse an image or build your own image:

### Use a existing image

To generate your video, please use this command:

```
docker run -v $(pwd)/out:/usr/src/app/out -it zenika/shortvid pnpm remotion render remotion/index.tsx TalkBranded out/TalkBranded.mp4 [YOUR PARAMETERS]
```

Tips: You can copy paste your parameters directly from (shortvid.io)[https://shortvid.io/]

### Build the image

To build a image, you need to build the image:

```
docker image build -t shortvid/run .
```

Then, you can run it and you will get your video in the `out` folder:

```
docker container run -v $(pwd)/out:/usr/src/app/out  -it shortvid/run
```

The command used to create the shortvid is declared in the Dockerfile at line #13.

Please change it in order to your template with [shortvid.io](https://shortvid.io/) and create your video:

```
CMD pnpm remotion render remotion/index.tsx [YOUR PARAMETERS]
```

## Start preview website

```console
pnpm dev
```

A Next App will start on port `3000`, showing our preview website.

## Start Remotion dev environement

```console
pnpm start
```

Remotion will start on port `3000`

## Start the server side rendering server locally

```console
pnpm serve
```

An ExpressJS server will start locally on port 
