FROM node:18

WORKDIR /usr/src/promo
COPY . .
COPY ./.env.prod ./.env
EXPOSE 3000
RUN npm install
RUN npm run build
CMD ["npm", "start"]

