FROM node:lts-alpine as appbuild
WORKDIR /app
COPY package*.json /app/
RUN npm install --production
COPY ./ /app/
RUN npm run build
FROM nginx:stable-alpine
COPY --from=appbuild /app/build /usr/share/nginx/html
