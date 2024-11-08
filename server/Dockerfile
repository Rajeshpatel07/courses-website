
FROM node:lts-slim

WORKDIR /home/app

RUN apt-get update -y && apt-get install openssl curl -y

COPY package.json ./

COPY yarn.lock ./

RUN yarn 

COPY ./ ./

RUN curl -o wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh \
    && chmod +x wait-for-it.sh

RUN ./prisma.sh

EXPOSE 5000

CMD ['yarn','start']
