# syntax=docker/dockerfile:1

FROM python:3.10-slim-bullseye

WORKDIR /terraria_classes

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY data/ data
COPY react-client/dist/ react-client/dist
COPY flask-server/ flask-server

EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "flask-server:app"]
