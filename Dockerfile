FROM node
WORKDIR /app

COPY . .

RUN npm install && npm audit fix && npm run build

CMD [ "node", "lib/index.js" ]