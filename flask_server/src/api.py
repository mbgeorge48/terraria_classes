import json
import os
from pathlib import Path

from flask import Flask, jsonify
from flask_cors import CORS
from markupsafe import escape

app = Flask(__name__)
CORS(app)


data_path = Path(os.path.join("data", "all-items.json"))
f = open(os.path.normpath(data_path))
data = json.load(f)
f.close()


@app.route("/api/docs/")
def docs():
    filter_json_usage = "Send a role \
        (melee, ranged, magic, summoner, mixed, healer, tank) \
        and a game stage and it will return the items that fit that role \
        and are availible in that game stage"
    filter_json_full_usage = "Same as the above, but you can also send \
        the item category to filter it further"
    return jsonify(
        {
            "docs": [
                {"/api/<role>/<gameStageAvailable>/": filter_json_usage},
                {
                    "/api/<role>/<gameStageAvailable>/<category>/": filter_json_full_usage
                },
            ]
        }
    )


@app.route("/api/<role>/<gameStageAvailable>/")
def filter_json(role, gameStageAvailable):
    response = []
    for item in data:
        if (item["role"] == escape(role) or item["role"] == "mixed") and item[
            "gameStageAvailable"
        ] == int(escape(gameStageAvailable)):
            response.append(item)
    return jsonify(deduplicate_response(response))


@app.route("/api/<role>/<gameStageAvailable>/<category>/")
def filter_json_full(role, gameStageAvailable, category):
    response = []
    for item in data:
        if (
            (item["role"] == escape(role) or item["role"] == "mixed")
            and item["gameStageAvailable"] == int(escape(gameStageAvailable))
            and item["category"] == escape(category)
        ):
            response.append(item)
    return jsonify(deduplicate_response(response))


def deduplicate_response(response):
    items = []
    item_names = []
    for data in response:
        if data["name"] in item_names:
            continue
        item_names.append(data["name"])
        items.append(data)
    return items


if __name__ == "__main__":
    app.run(host='0.0.0.0')