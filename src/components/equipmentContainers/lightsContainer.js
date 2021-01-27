import React from "react";
import { v4 as uuid } from "uuid";

// Check this our for some ideas to avoid duplicating code
// https://stackoverflow.com/questions/36983158/rendering-json-data-in-multiple-react-js-components

function getLights(currentRole, gameStageIndex) {
  let lightsList = [];
  const lightsData = require("../../data/items.json");
  for (var i = 0; i < lightsData.length; i++) {
    const buff = lightsData[i];
    if (
      (buff.role === currentRole || buff.role === "mixed") &&
      buff.gameStageAvailable === gameStageIndex &&
      buff.category === "lights"
    ) {
      lightsList.push(buff);
    }
  }

  return lightsList;
}

function populateLights(currentRole, gameStageIndex) {
  const lightsList = getLights(currentRole, gameStageIndex);

  const listItems = currentRole ? (
    lightsList.map((lights) => (
      <tr key={uuid}>
        <td className="image-cell">
          <img
            key={uuid}
            src={lights.imgPath}
            alt={lights.name}
            className="mr-3 mt-1"
            decoding="async"
          ></img>
        </td>
        <td key={uuid}>
          <a href={lights.url} key={uuid} target="_blank" rel="noreferrer">
            {lights.name}
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

export default class Lights extends React.Component {
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
          Lights
        </div>
        <div className="card-body">
          <div className="card-text">
            <table>
              <tbody>
                {populateLights(
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
