FROM node:carbon

WORKDIR /app

ADD . /app

RUN npm install
RUN npm install -g strongloop

EXPOSE 80
CMD ["node", "."]
