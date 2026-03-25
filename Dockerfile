FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY ./node_modules/.prisma ./node_modules/.prisma
COPY ./dist ./dist
CMD ["node", "dist/src/main.js"]
EXPOSE 3000
