FROM node:14.15.3

RUN mkdir /code

ADD . /code

WORKDIR /code

RUN yarn
RUN yarn build
RUN yarn global add serve

EXPOSE 5000
CMD ["serve", "-s", "public"]
