FROM node:carbon

WORKDIR /posts-services

COPY package.json /posts-services

RUN npm install 

COPY ./services/posts /posts-services

CMD npm run prod:posts-services

EXPOSE 8005