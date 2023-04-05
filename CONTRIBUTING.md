# Contribution documentation

## Installation

In order to install project, please install Node current LTS version.

- Fetch repository
- Install [pnpm](https://pnpm.io/) and [ffmpeg](https://ffmpeg.org/)
- Install dependencies with [pnpm](https://pnpm.io/)

Remotion also maintain a [great installation doc that could help you too](https://www.remotion.dev/docs/).

## How to generate local video 

Inside the repo

```console
pnpm install
```
In windows create a props with local file json, it's much easier :)
```console
pnpm remotion render Devoxx2023 out/Devoxx2023.mp4 --props=filejson/test.json
````
<img width="859" alt="image" src="https://user-images.githubusercontent.com/1814314/230098734-fb6fdabb-e6a3-451a-b4e3-7cc4dea647fa.png">


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

