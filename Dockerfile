FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT=3000
ARG REDIS_SERVER=redis
ENV PORT $PORT
ENV REDIS_SERVER $REDIS_SERVER

EXPOSE $PORT

CMD [ "npm", "start" ]