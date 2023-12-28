# Terraria Class Guide :rabbit2:

This is a single page app that helps you build your character to fit into a certain class

[![Python CI](https://github.com/mbgeorge48/terraria_classes/actions/workflows/ci-backend.yml/badge.svg)](https://github.com/mbgeorge48/terraria_classes/actions/workflows/ci-backend.yml)
[![React CI](https://github.com/mbgeorge48/terraria_classes/actions/workflows/ci-frontend.yml/badge.svg)](https://github.com/mbgeorge48/terraria_classes/actions/workflows/ci-frontend.yml)

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

## Quick start

There's 2 ways of running this project.
If you want to use docker then it can be started by running these 2 commands

```sh
docker build . --tag terraria_classes
docker run -p 5000:5000  terraria_classes
```

To run it locally you can use the `scripts` to build and start the server

```sh
scripts/setup
scripts/server
```

You can call `scripts/server dev` to run it in just `flask` rather than `gunicorn`

---

## More In-Depth Usage

### Front end

This was created using the `create-react-app` script, but then I've since migrated to `vite`

To start the local server you need to make sure yarn is installed

```shell
npm install --global yarn
```

Then run

```shell
cd react-client
yarn install
yarn start
```

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

---

### Backend

There are 2 parts to the backend, the first is the web scrapper reffered to as 'Terraria Game Wiki Scraper' and the second is the Flask API part

The simplest way to spin up the backend is to use the scripts in the `scripts` directory

| Script        | Function                                                                          |
| ------------- | --------------------------------------------------------------------------------- |
| `bootstrap`   | Sets up the enviroment and installs dependencies                                  |
| `flask`       | Runs the flask command with the correct app so you can add args to it, i.e. `run` |
| `format`      | Runs `black` and `isort` on the python code                                       |
| `gunicorn`    | Starts the gunicorn server                                                        |
| `refreshdata` | Runs the Terraria Game Wiki Scraper to refresh the item data                      |
| `server`      | Starts the server                                                                 |
| `setup`       | Run the bootstrap script                                                          |
| `test`        | Checks the code style and runs the frontend tests                                 |
| `update`      | Updates the enviroment and dependencies                                           |

#### Terraria Game Wiki Scraper :rabbit2:

This is the python script that updates the data from the [official Terraria wiki](https://terraria.wiki.gg/wiki).

##### Example Output

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

##### Scraping Details

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

#### Flask API

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

```yaml
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
    -   Things like Buffs, Potions and Flasks
-   Mounts
-   ~~Lights~~

---

### TODO

Update the script so that it can fetch the light pets
