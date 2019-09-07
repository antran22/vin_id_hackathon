FROM node:10.16.3-alpine
WORKDIR /app

COPY . .
# COPY package*.json ./

RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
RUN npm audit fix
RUN npm run build

EXPOSE 3000
CMD [ "node", "lib/index.js" ]