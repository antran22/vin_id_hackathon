FROM node
WORKDIR /app

COPY . .

RUN npm install --prod && npm audit fix && npm run build

CMD [ "node", "lib/index.js" ]
