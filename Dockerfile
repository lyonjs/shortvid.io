FROM zenika/alpine-chrome:with-node

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD 1
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser
WORKDIR /usr/src/app
USER root
RUN apk add --no-cache ffmpeg
COPY --chown=chrome package.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY --chown=chrome . ./
ENTRYPOINT ["tini", "--"]
CMD pnpm remotion render remotion/index.tsx TalkBranded out/TalkBranded.mp4 --props='{"backgroundColor":"#347aea","title":"Road to Certification : Cloud Architect en 🇫🇷 avec 250+ inscrits et 40 vouchers","startingDate":"2023-04-19T11:00:00.000Z","endingDate":"2023-05-23T11:45:00.000Z","recurringDay":"mardi","location":"Avec 9 communautés GDG 💚","logoUrl":"https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg","speaker":{"pictureUrl":"https://pbs.twimg.com/profile_images/892750804104380418/J_YkAC_C_400x400.jpg","name":"Julien Landuré","company":"GDG Cloud Nantes & Zenika"}}'