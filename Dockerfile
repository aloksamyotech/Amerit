FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json
COPY .env.local ./.env.local

CMD ["npm","run", "dev"]