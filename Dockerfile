FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm ci --only=production && npm install typescript -g
RUN npm run build

COPY . .

EXPOSE $PORT
CMD [ "npm", "run", "start" ]