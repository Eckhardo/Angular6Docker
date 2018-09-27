
## Stage 1: build angular 6 appilication ##
FROM node:8 as builder

COPY app /app

WORKDIR /app
RUN npm install
RUN $(npm bin)/ng build


## Stage 2: run nginx to serve appilication ##
FROM nginx

COPY --from=builder /app/dist/* /usr/share/nginx/html/

EXPOSE 80
