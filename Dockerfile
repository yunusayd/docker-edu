# base image
FROM node:alpine

COPY ./ ./

RUN npm install

ENV key=value


CMD ["npm", "start"]