# Terraria Class Guide :rabbit2:

This is a single page app that helps you build your character to fit into a certain class

[![Build & Test](https://github.com/mbgeorge48/terraria_classes/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/mbgeorge48/terraria_classes/actions/workflows/build_and_test.yml)

## Roles available

- Melee
- Ranged
- Magic
- Summoner
- _Tank_
- _Healer_
- _Mixed_

The last three aren't fully fleshed out roles.
Mixed is generally an early game exclusive, while Tank and Healer are late game (usually coop) builds.

## Setup

This was created using the `create-react-app` script

A `JSON` file is required to fetch all the data required for the app. The file should be saved into `src/data/all-items.json` and have a structure like this:

```JSON
[
    {
      "name": "Copper armor",
      "role": "mixed",
      "url": "https://terraria.gamepedia.com/wiki/Copper_armor",
      "imgPath": "https://static.wikia.nocookie.net/terraria_gamepedia/images/9/9d/Copper_armor.png",
      "category": "armor",
      "gameStageAvailable": 0
    },
]
```

I wrote a Python script that scrapes the game wiki, [GitHub repo](https://github.com/mbgeorge48/terraria_game_wiki_scraper)

---

_I'm not the owner of any of the Terraira resources, this was made as a learning expirence and for love of the game_
