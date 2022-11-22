FROM node:19-alpine3.15

WORKDIR /app

COPY .  .

RUN npm install pm2 -g

RUN yarn install
RUN yarn build

CMD [ "pm2","start /build/index.js" ]


