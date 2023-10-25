# syntax=docker/dockerfile:1

FROM python:3.10-slim-bullseye

WORKDIR /terraria_classes

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY data/ data
COPY react_client/dist/ react_client/dist
COPY api.py .

EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "api:app"]
