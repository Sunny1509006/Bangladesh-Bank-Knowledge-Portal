FROM node:18.12.1-alpine3.17
WORKDIR /core
ENV PATH="./node_modules/.bin:$PATH"

copy package.json ./
copy package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

COPY . .
RUN npm run build
CMD ["npm", "start"]
