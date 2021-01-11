import React from "react";
import { v4 as uuid } from "uuid";

function getArmor(currentRole, gameStageIndex) {
  let armorList = [];
  const armorData = require("../../data/items.json");
  for (var i = 0; i < armorData.length; i++) {
    const armor = armorData[i];
    if (
      (armor.role === currentRole || armor.role === "mixed") &&
      armor.gameStageAvailable === gameStageIndex &&
      armor.category === "armor"
    ) {
      armorList.push(armor);
    }
  }
  return armorList;
}

function populateArmor(currentRole, gameStageIndex) {
  const armorList = getArmor(currentRole, gameStageIndex);

  const listItems = currentRole ? (
    armorList.map((armor) => (
      <tr key={uuid}>
        <td key={uuid}>
          <img
            key={uuid}
            src={armor.imgPath}
            alt={armor.name}
            className="mr-3 mt-1"
            decoding="async"
          ></img>
        </td>
        <td key={uuid}>
          <a href={armor.url} key={uuid} target="_blank" rel="noreferrer">
            {armor.name}
          </a>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <th key="1">Select a class</th>
    </tr>
  );

  return listItems;
}

export default class Armor extends React.Component {
  render() {
    return (
      <div className="card bg-secondary text-light">
        <div
          className={
            "card-header equip-type" +
            (this.props.currentRole
              ? " equipment-" + this.props.currentRole
              : "")
          }
        >
          Armor
        </div>
        <div className="card-body">
          <div className="card-text">
            <table>
              <tbody>
                {populateArmor(
                  this.props.currentRole,
                  this.props.gameStageIndex
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
