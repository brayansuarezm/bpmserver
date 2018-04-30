FROM node:carbon
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 80
CMD ["npm","start"]
