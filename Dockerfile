FROM nginx

WORKDIR /usr/src/app

COPY website/package*.json ./

RUN npm install

COPY website/ /usr/src/app/

EXPOSE 3000

CMD [ "yarn", "start" ]

# nanti coba pake RUN npm run start

