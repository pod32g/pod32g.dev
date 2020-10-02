FROM node:12.18.4-alpine
RUN mkdir /code
ADD . /code

WORKDIR /code

RUN yarn
RUN yarn build
RUN yarn global add serve

EXPOSE 5000
CMD ["serve", "-s", "build"]