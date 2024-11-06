from bs4 import BeautifulSoup
from datetime import datetime
from pathlib import Path

import json
import re
import requests

BASE_URL = "https://terraria.wiki.gg"


class GameWikiScraper:
    def __init__(self):
        self.square_bracket_trim = re.compile(r"\[.*?\]")

        self.all_items = []

        self.fetchWebPage()
        game_stages = self.filterGameStages()
        self.game_stage_dict = {stage: index for index, stage in enumerate(game_stages)}
        game_stage_list = [
            {"stage": stage, "level": index} for index, stage in enumerate(game_stages)
        ]
        game_stage_file_path = Path("game-stages.json")
        with open(game_stage_file_path, "w") as fp:
            json.dump(game_stage_list, fp, indent=2)

        self.filterItems()
        print(f"Found {len(self.all_items)} items")

        items_file_path = Path("all-items.json")
        with open(items_file_path, "w") as fp:
            json.dump(self.all_items, fp, indent=2)

    def fetchWebPage(self):
        r = requests.get(BASE_URL + "/wiki/Guide:Class_setups")
        self.soup = BeautifulSoup("".join(r.text), features="lxml")

    def filterGameStages(self):
        other_index = 0  # Cut everything off after "Other"
        contents_list = self.soup.find("div", {"id": "toc"}).find("ul")
        for index, stage in enumerate(contents_list.find_all("li")):
            if "other" in stage.text.lower():
                other_index = index
                break

        custom_mappings = {
            "pre-mechanical bosses": "Pre-Mech Bosses",
        }

        formatted_stages = []
        for stage in [
            stage.text for stage in contents_list.find_all("li")[:other_index]
        ]:
            formatted_stage = " ".join(filter(lambda x: not x.isdigit(), stage.split()))
            if formatted_stage.lower() in custom_mappings:
                formatted_stage = custom_mappings[formatted_stage.lower()]
            formatted_stages.append(formatted_stage)
        return formatted_stages

    def filterItems(self):
        info_cards = self.soup.find_all(
            "div", attrs={"class": "infocard clearfix guide-class-setups"}
        )
        for card in info_cards:
            class_container = card.find("div", attrs={"class": "hgroup"})
            if len(class_container) > 1:
                role = class_container.findChildren()[1].text.lower()
                game_stage = self.game_stage_dict.get(
                    class_container.findChildren()[0].text
                )
                item_containers = card.find_all(class_="box", recursive=False)
                for item_container in item_containers:
                    category = self.convertCategory(
                        item_container.find(
                            "div", attrs={"class": "title"}
                        ).text.lower()
                    )
                    subcontainers = item_container.find_all(class_="box")
                    if len(subcontainers) > 0:
                        for subcontainer in subcontainers:
                            self.pullItems(subcontainer, role, game_stage, category)
                    else:
                        self.pullItems(item_container, role, game_stage, category)

    def pullItems(self, item_container, role, game_stage, category):
        if not item_container.find_all("li"):
            for item in item_container.find("p").find_all(
                "span", attrs={"class": ["i break", "i -w break"]}
            ):
                spanList = item.find("span").findAll("span")
                if len(spanList) > 1:
                    if self.get_exclusivity_details(spanList):
                        continue

                name = (
                    item.find("a")
                    .get("title")
                    .replace("(", "")
                    .replace(")", "")
                    .rstrip()
                )
                url_ext = item.find("a").get("href")
                img_path = self.compareImgSrc(item.find("a").find("img"))

                this_item = {
                    "name": name,
                    "url": BASE_URL + url_ext,
                    "imgPath": BASE_URL + img_path,
                    "role": role,
                    "category": category,
                    "gameStageAvailable": game_stage,
                }
                self.all_items.append(this_item)

        for item in item_container.find_all("li"):
            valid = True
            category = self.convertCategory(
                item_container.find("div", attrs={"class": "title"}).text.lower()
            )
            try:
                name = item.text.replace("(", "").replace(")", "").rstrip()
                name = self.square_bracket_trim.sub("", name)
            except (TypeError, AttributeError):
                name = "unknown"
                valid = False
            try:
                url_ext = item.find("a")["href"]
            except (TypeError, AttributeError):
                url_ext = "unknown"
                valid = False
            try:
                img_path = self.compareImgSrc(item.find("img"))
            except (TypeError, AttributeError):
                img_path = "unknown"
                valid = False
            if valid:
                this_item = {
                    "name": name,
                    "role": role,
                    "url": BASE_URL + url_ext,
                    "imgPath": img_path,
                    "category": category,
                    "gameStageAvailable": game_stage,
                }
                self.all_items.append(this_item)

    def get_exclusivity_details(self, spanList):
        for element in spanList:
            title = element.get("title")
            if title:
                if "desktop" not in title.lower() or "console" not in title.lower():
                    return title
        return None

    def convertCategory(self, category):
        if "buffs" in category:
            return "buffs"
        else:
            return category

    def compareImgSrc(self, image_tag):
        if (
            hasattr(image_tag, "data-src")
            and image_tag.get("data-src")
            and image_tag.get("data-src").split(":")[0] != "data"
        ):
            path = image_tag.get("data-src")
        else:
            path = image_tag.get("src")
        if "gif" in path:
            return path.split(".gif")[0] + ".gif"
        return path.split(".png")[0] + ".png"


if __name__ == "__main__":
    time_format = "%H:%M:%S"
    start_time = datetime.now().strftime(time_format)
    print(f"Start time = {start_time}")
    try:
        GameWikiScraper()
    except KeyboardInterrupt:
        print("Goodbye")

    finish_time = datetime.now().strftime(time_format)
    print(f"Finish time = {finish_time}")
    time_delta = datetime.strptime(finish_time, time_format) - datetime.strptime(
        start_time, time_format
    )
    total_seconds = time_delta.total_seconds()
    minutes = total_seconds / 60
    print(f"Time elapsed = {minutes} (minutes)")
