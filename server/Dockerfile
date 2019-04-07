FROM node:10.15.3-alpine

WORKDIR /usr/app

COPY ./package.json ./package-lock.json ./
RUN npm install --quiet

COPY . .

EXPOSE 9000

CMD ["node", "index.js"]
