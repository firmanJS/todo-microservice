FROM node:carbon

WORKDIR /users-services

COPY package.json /users-services

RUN npm install 

COPY ./services/users /users-services

CMD npm run prod:users-services

EXPOSE 8003