import json
import os
from pathlib import Path


from flask import Flask, jsonify
from flask_cors import CORS
from markupsafe import escape

app = Flask(__name__)
CORS(app)


data_path = Path(os.path.join("project", "data", "all-items.json"))
f = open(os.path.normpath(data_path))
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
    return jsonify({'data':response})


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
