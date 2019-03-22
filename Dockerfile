FROM node:latest
RUN mkdir -p /var/app/lessitations
WORKDIR /var/app/lessitations
COPY package.json /var/app/lessitations
RUN npm install
COPY . /var/app/lessitations
CMD ['node', 'app.js']