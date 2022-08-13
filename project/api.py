import json
import os
from pathlib import Path


from flask import Flask
from markupsafe import escape

DATA_PATH = Path(os.path.join("project", "data", "all-items.json"))

app = Flask(__name__)

f = open(os.path.normpath(DATA_PATH))
data = json.load(f)
f.close()


@app.route("/api/<role>/<gameStageAvailable>/")
def filter_json(role, gameStageAvailable):
    response = []
    for item in data:
        if (
            (item["role"] == escape(role) or item["role"] == 'mixed')
            and item["gameStageAvailable"] == int(escape(gameStageAvailable))
        ):
            response.append(item)
    return response


@app.route("/api/<role>/<gameStageAvailable>/<category>/")
def filter_json_full(role, gameStageAvailable, category):
    response = []
    for item in data:
        if (
            (item["role"] == escape(role) or item["role"] == 'mixed')
            and item["gameStageAvailable"] == int(escape(gameStageAvailable))
            and item["category"] == escape(category)
        ):
            response.append(item)
    return response
