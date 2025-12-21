# [0001] Repository structure for composable animations and videos 📝

- 🔢 RFC Number: 0001
- 👤 Author: @Slashgear, @mickaelalvs
- ⏳ Status: _PENDING_

## Abstract 👋🏼

We started with @mickaelalvs this project a few months ago first to generate the templates of videos of the association LyonJS (first one, then two, then others).

For the sake of simplicity and speed, copy and paste may have been used excessively to duplicate behaviors and displays.

Then the project evolved to allow to manage event templates other than LyonJS (conferences and partner meetups).
We continued to stack _Compositions_ Remotion in the [Video.tsx](../../remotion/Video.tsx) file, thinking that we would change that later.

## Motivation 💪🏼

Now it's time to get started, so let's take advantage of this RFC to study a project architecture that will allow us to answer the following challenges:

- Define a composition library to pick useful and extendable video toolkit element to coule be reused in many videos
- Define library of common animation and transition that could be reused in many videos
- Use Lasy loading of composition for Video dictionnary.
- Make life easy for people who fork the repository create their own template.
- Make our basic template customisation ready (theme / color / font / logo)

## Proposal ✍🏼

[Describe the proposed changes or additions to the project.]

For this we need to reshape our repository structure in order to be able to extend it.

### General 🏠

- Adding eslint and prettier rules
- Clean Github workflow
- Adding slack integration for Pull request notification
- Adding PR-size action to check PR size

### NextJS app 🚀

- SVG website should be "debranded" of LyonJS logo by default in order to let user see the possibility offered by SVG project.
  - Home page
  - Navigation bar
- Migrate to _App directory structure_
- For now forms a duplicated between page generation, we need to study the possibility to generate "video" generation page dynamically.

### Backend app 🏭

- Create a directory name `server` in which should be an index.ts file exposing an HTTP server that can generate video on a API.
- API should handle `/video/$pathtoComposition/$composotionName`, and all props could be passed by queryParams to generate MP4 video.
- API should handle `/frame/$pathtoComposition/$composotionName/[format]/[frameId]`, and all props could be passed by queryParams to generate image with format.
- Server should use `Fastify` library (why, because why not)

### Src (Remotion app) 🎞️

- Remove `src/components.tsx` file as it a proxy that is completely useless
- Use dynamic import to load composition inside Video.tsx and other composition definition
- Testing des composants atomiques Remotion
- Adding JSdoc to all animations and atoms components

### Project structure proposal 📁

```
--app #NextJS app
--pages #Old NextJS pages
--src
----app #for web application
--remotion
----design
------animations
------atoms
----compositions
------templates
--------talks
--------sponsor
--------liveLayers
------showcase
--------mixit
------...
```

### Public 📂

Public directory is a bit of a mess has it is shared between nextJs app public files and remotions assets
Let changes that.

- What is in root directory should have no choice to be there (for example robots.txt, favicon or any other file for the website that coult not be in a subpath)
- Then, a `asset` directory should be created with sub directories `images`, `sounds`.
- In `image`, each conference should have its own directory to be able to clean it more easily.

## Potential Impacts 💥

[Explain any potential impacts or risks associated with implementing this RFC.]

- Build and repository structure
- Documentation and install process
- End user extension and customisation

## References 📚

[List any references, resources, or other relevant information.]

- [Next App directory](https://nextjs.org/blog/next-13#new-app-directory-beta)
- [Remotion, generation from server example](https://www.remotion.dev/docs/ssr)
- [Fastify documenation](https://www.fastify.io/)
