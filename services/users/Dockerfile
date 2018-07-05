FROM node:carbon

WORKDIR /users-services

COPY package.json /users-services

RUN npm install 

RUN npm install -g wait-for-mongo

COPY ./services/users /users-services

CMD wait-for-mongo mongodb://172.18.0.2:27017/ npm run prod:users-services

EXPOSE 8003