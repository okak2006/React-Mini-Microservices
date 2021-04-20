FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
# there is a bug in create-react-app which prevents the app from running correctly in a docker container
# the line below is used to circumvent the issue
# for more information: https://github.com/facebook/create-react-app/issues/8688
ENV CI=true

CMD ["npm","start"]