FROM nginx:alpine
#!/bin/sh
COPY ./nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY ./dist /usr/share/nginx/html

EXPOSE 8091 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

