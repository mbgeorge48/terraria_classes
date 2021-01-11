import React from "react";
import { v4 as uuid } from "uuid";

// Check this our for some ideas to avoid duplicating code
// https://stackoverflow.com/questions/36983158/rendering-json-data-in-multiple-react-js-components

function getWeapons(currentRole, gameStageIndex) {
  let weaponList = [];
  const weaponData = require("../data/items.json");
  for (var i = 0; i < weaponData.length; i++) {
    const weapon = weaponData[i];
    if (
      (weapon.role === currentRole || weapon.role === "mixed") &&
      weapon.gameStageAvailable === gameStageIndex &&
      weapon.category === "weapons"
    ) {
      weaponList.push(weapon);
    }
  }

  return weaponList;
}

function populateWeapons(currentRole, gameStageIndex) {
  const weaponList = getWeapons(currentRole, gameStageIndex);

  const listItems = currentRole ? (
    weaponList.map((weapon) => (
      <tr key={uuid}>
        <td className="image-cell">
          <img
            key={uuid}
            src={weapon.imgPath}
            alt={weapon.name}
            className="mr-3 mt-1"
            decoding="async"
          ></img>
        </td>
        <td key={uuid}>
          <a href={weapon.url} key={uuid} target="_blank" rel="noreferrer">
            {weapon.name}
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

export default class Weapons extends React.Component {
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
          Weapons
        </div>
        <div className="card-body">
          <div className="card-text">
            <table>
              <tbody>
                {populateWeapons(
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
