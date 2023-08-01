# Terraria Class Guide :rabbit2:

This is a single page app that helps you build your character to fit into a certain class

[![Build & Test](https://github.com/mbgeorge48/terraria_classes/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/mbgeorge48/terraria_classes/actions/workflows/build_and_test.yml)

## Roles available

-   Melee
-   Ranged
-   Magic
-   Summoner
-   _Tank_
-   _Healer_
-   _Mixed_

The last three aren't fully fleshed out roles.
Mixed is generally an early game exclusive, while Tank and Healer are late game (usually coop) builds.

---

## Front end

### Setup

This was created using the `create-react-app` script

A `JSON` file is required to fetch all the data required for the app. The file should be saved into `src/data/all-items.json` and have a structure like this:

```json
[
    {
        "name": "Gold Bow",
        "url": "https://terraria.fandom.com/wiki/Gold_Bow",
        "imgPath": "https://static.wikia.nocookie.net/terraria_gamepedia/images/f/ff/Gold_Bow.png",
        "role": "ranged",
        "category": "weapons",
        "gameStageAvailable": 0
    }
]
```

_This is likely to change so it can either use the json file directly or use the api_

~~I wrote a Python script that scrapes the game wiki, [GitHub repo](https://github.com/mbgeorge48/terraria_game_wiki_scraper)~~

I have since migrated that script into this repo to keep it all as one, scroll down to read about the setup and usage of the python BE

### Usage

As this was created with the `create-react-app` script you can start the app by simply running `npm run start`

---

## Backend

There are 2 parts to the backend, the first is the web scrapper reffered to as 'Terraria Game Wiki Scraper' and the second is the Flask API part

### Terraria Game Wiki Scraper :rabbit2:

This is a simple script that should be paired with the single page app, Terraria Classes Guide ([GitHub repo](https://github.com/mbgeorge48/terraria_classes))

#### Setup

_The setup for this script isn't strict so feel free to setup the way you normally would. otherwise..._

1. Create your virtual env

```
python3 -m venv env
```

| Unix                      | Windows                    |
| ------------------------- | -------------------------- |
| `source env/bin/activate` | `env\Scripts\activate.bat` |

2. Install any requirements

```
pip install -r requirements.txt
```

3. Run the script

```
python src/game-wiki-scraper.py
```

#### Example Output

The output is an array of JSON objects that follow this rough format:

```json
[
    {
        "name": "Gold Bow",
        "url": "https://terraria.fandom.com/wiki/Gold_Bow",
        "imgPath": "https://static.wikia.nocookie.net/terraria_gamepedia/images/f/ff/Gold_Bow.png",
        "role": "ranged",
        "category": "weapons",
        "gameStageAvailable": 0
    }
]
```

#### Scraping Details

Move items are found by traversing the HTML and looking for this section of elements:

```html
<span style="xyz" class="abc">
    <a href="url" title="Item Name">
        <img alt="Item Name" src="img path" data-src="img path" ... />
    </a>
    <span>
        <span>
            <a href="url" title="Item Name"> Item Name </a>
        </span>
    </span>
</span>
```

From the above `span` you can find the `name` and `imgPath`, the `url` can be derived using the base url and the url found in the `a` tags

The `role`, `category` and `gameStageAvailable` are found from the parent containers

Sometimes items appear in the HTML as:

```html
<li style="xyz">
    <span class="abc">
        <a href="url" title="Item Name">
            <img
                alt="Item Name"
                src="img path"
                data-src="img path"
                class="abc"
                ...
            />
        </a>
        <span>
            <span>
                <a href="url" title="Item Name ">Item Name</a>
            </span>
        </span>
    </span>
</li>
```

However the data can be extracted in quite a simular way

### Flask API

Creating a Flask API endpoint wasn't necessary for this projects however this app was partly a learning experience for myself so I wanted to give it ago

#### Setup

Copy the setup steps from the 'Terraria Game Wiki Scraper' section

The config for the Flask App lives in `.flaskenv` so once you've installed all the modules simply run:

```
flask run
```

#### Usage

There are 3 endpoints available

-   `/api/docs/`
    -   This returns a summary of the other two endpoints
-   `/api/<role>/<gameStageAvailable>/`

    -   Takes in a [game role](#roles-available) and a [game stage](#game-stage-mapping)
    -   Returns a JSON array containing all the items that fit into those two parameters that looks like [this example output](#example-output)

-   `/api/<role>/<gameStageAvailable>/<category>/`

    -   Takes in a [game role](#roles-available), a [game stage](#game-stage-mapping) and a [category](#categories-available)
    -   Returns a JSON array containing all the items that fit into all three parameters that looks like [this example output](#example-output)

---

#### Game stage mapping

To make it easier I convert the game stages into numbers, the mapping goes like this:

```
Pre-Bosses: 0
Pre-Hardmode: 1
Pre-Mech Bosses: 2
Pre-Plantera: 3
Pre-Golem: 4
Pre-Lunar Events: 5
Endgame: 6
```

#### Categories available

-   Weapons
-   Armor
-   Accessories
-   Buffs
    -   Encompass Buffs, Potions and Flasks
-   Mounts
-   Lights

---

_I'm not the owner of any of the Terraira resources, this was made as a learning expirence and for love of the game_
