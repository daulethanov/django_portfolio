FROM python:3.11.1-alpine3.16
COPY requirements.txt /temp/requirements.txt
COPY service /service
WORKDIR /service
EXPOSE 8000

#RUN apk add postgresql-clients

RUN pip install -r /temp/requirements.txt

RUN adduser --disabled-password admin-user

USER admin-user
