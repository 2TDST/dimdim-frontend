FROM node:12.18.2-alpine AS BUILD

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.19-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=BUILD /usr/src/app/dist/angular-client-app /usr/share/nginx/html
