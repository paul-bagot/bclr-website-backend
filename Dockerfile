FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY ./dist ./dist
RUN npm install --production
CMD ["node", "dist/src/main.js"]
EXPOSE 3000
