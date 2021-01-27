import React from "react";
import { v4 as uuid } from "uuid";

// Check this our for some ideas to avoid duplicating code
// https://stackoverflow.com/questions/36983158/rendering-json-data-in-multiple-react-js-components

function getAccessories(currentRole, gameStageIndex) {
  let accessoriesList = [];
  const accessoriesData = require("../../data/items.json");
  for (var i = 0; i < accessoriesData.length; i++) {
    const buff = accessoriesData[i];
    if (
      (buff.role === currentRole || buff.role === "mixed") &&
      buff.gameStageAvailable === gameStageIndex &&
      buff.category === "accessories"
    ) {
      accessoriesList.push(buff);
    }
  }

  return accessoriesList;
}

function populateAccessories(currentRole, gameStageIndex) {
  const accessoriesList = getAccessories(currentRole, gameStageIndex);

  const listItems = currentRole ? (
    accessoriesList.map((accessories) => (
      <tr key={uuid}>
        <td className="image-cell">
          <img
            key={uuid}
            src={accessories.imgPath}
            alt={accessories.name}
            className="mr-3 mt-1"
            decoding="async"
          ></img>
        </td>
        <td key={uuid}>
          <a href={accessories.url} key={uuid} target="_blank" rel="noreferrer">
            {accessories.name}
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

export default class Accessories extends React.Component {
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
          Accessories
        </div>
        <div className="card-body">
          <div className="card-text">
            <table>
              <tbody>
                {populateAccessories(
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
