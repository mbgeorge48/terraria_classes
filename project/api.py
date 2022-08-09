import json
import os

from flask import Flask
from markupsafe import escape

DATA_PATH = os.path.normpath("../data/all-items.json")

app = Flask(__name__)

f = open(os.path.normpath(DATA_PATH))
data = json.load(f)
f.close()


@app.route("/<role>/<gameStageAvailable>/<category>")
def filter_json(role, gameStageAvailable, category):
    response = []
    for item in data:
        if (
            item["role"] == escape(role)
            and item["gameStageAvailable"] == int(escape(gameStageAvailable))
            and item["category"] == escape(category)
        ):
            response.append(item)
    return response
