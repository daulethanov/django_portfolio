FROM node:19-alpine3.16

WORKDIR /frontend
COPY package.json package-lock.json ./
COPY . .

RUN npm install


EXPOSE 3000
