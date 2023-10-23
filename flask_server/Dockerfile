# syntax=docker/dockerfile:1

FROM python:3.10-slim-bullseye

WORKDIR /terraria-flask

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .
WORKDIR /terraria-flask/src

EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]