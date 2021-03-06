FROM node:current-slim

WORKDIR /use/src/app
COPY package.json .
RUN npm install 

EXPOSE 8000
CMD ["npm", "start"]

COPY . .