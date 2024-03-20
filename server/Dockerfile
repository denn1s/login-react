FROM mysql:latest

ENV MYSQL_DATABASE=login_demo
ENV MYSQL_ROOT_PASSWORD=root_password
COPY schema.sql /docker-entrypoint-initdb.d/

EXPOSE 3305
