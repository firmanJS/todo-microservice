FROM node:carbon

WORKDIR /app

COPY package.json /app

RUN npm install 

COPY ./server /app

CMD npm run prod:server

EXPOSE 8001