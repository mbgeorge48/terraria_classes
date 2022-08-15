import { items } from "../types";
import { processData } from "../utils";

export const fakeData: items = [
  {
    name: "Pointy Stick",
    role: "melee",
    url: "https://terraria.gamepedia.com/fake_url",
    imgPath: "https://terraria.gamepedia.com/fake_picture.png",
    category: "weapons",
    gameStageAvailable: 0,
  },
  {
    name: "Hat",
    role: "melee",
    url: "https://terraria.gamepedia.com/fake_url",
    imgPath: "https://terraria.gamepedia.com/fake_picture.png",
    category: "armor",
    gameStageAvailable: 0,
  },
  {
    name: "Leaf",
    role: "melee",
    url: "https://terraria.gamepedia.com/fake_url",
    imgPath: "https://terraria.gamepedia.com/fake_picture.png",
    category: "accessories",
    gameStageAvailable: 0,
  },
  {
    name: "Tree Sap",
    role: "melee",
    url: "https://terraria.gamepedia.com/fake_url",
    imgPath: "https://terraria.gamepedia.com/fake_picture.png",
    category: "buffs",
    gameStageAvailable: 0,
  },
  {
    name: "Broomstick",
    role: "melee",
    url: "https://terraria.gamepedia.com/fake_url",
    imgPath: "https://terraria.gamepedia.com/fake_picture.png",
    category: "mounts",
    gameStageAvailable: 0,
  },
  {
    name: "Firefly",
    role: "melee",
    url: "https://terraria.gamepedia.com/fake_url",
    imgPath: "https://terraria.gamepedia.com/fake_picture.png",
    category: "lights",
    gameStageAvailable: 0,
  },
];

it("should return a list for each category", () => {
  const data = processData(fakeData);

  expect(data.weaponsList[0]).toBe(fakeData[0]);
  expect(data.armorList[0]).toBe(fakeData[1]);
  expect(data.accessoriesList[0]).toBe(fakeData[2]);
  expect(data.buffsList[0]).toBe(fakeData[3]);
  expect(data.mountsList[0]).toBe(fakeData[4]);
  expect(data.lightsList[0]).toBe(fakeData[5]);
});
