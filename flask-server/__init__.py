from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from markupsafe import escape

import json
import os

app = Flask(__name__)
CORS(app)

react_folder = "react-client"
base_directory = os.getcwd() + f"/{react_folder}/dist/"

item_data_path = os.getcwd() + "/" + os.path.join("data", "all-items.json")
f = open(os.path.normpath(item_data_path))
item_data = json.load(f)
f.close()

game_stage_data_path = os.getcwd() + "/" + os.path.join("data", "game-stages.json")
f = open(os.path.normpath(game_stage_data_path))
game_stage_data = json.load(f)
f.close()


@app.route("/")
def index():
    print(base_directory)
    return send_from_directory(directory=base_directory, path="index.html")


@app.route("/<folder>/<file>")
def assets(folder, file):
    path = folder + "/" + file
    return send_from_directory(directory=base_directory, path=path)


@app.route("/<file>")
def files(file):
    return send_from_directory(directory=base_directory, path=file)


@app.route("/api/game-stages/")
def fetch_game_stages():
    return jsonify(game_stage_data)


@app.route("/api/<role>/<gameStageAvailable>/")
def filter_json(role, gameStageAvailable):
    response = []
    for item in item_data:
        if (item["role"] == escape(role) or item["role"] == "mixed") and item[
            "gameStageAvailable"
        ] == int(escape(gameStageAvailable)):
            response.append(item)
    return jsonify(deduplicate_response(response))


@app.route("/api/<role>/<gameStageAvailable>/<category>/")
def filter_json_full(role, gameStageAvailable, category):
    response = []
    for item in item_data:
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
