import React from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";

import "./scss/index.scss";

function PageHeading() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand mb-0 h1">Terraria Classes Guide</span>
      </div>
    </nav>
  );
}

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-body">
            <h4 className="card-title col">Select your game stage</h4>
            <div className="container card-text">
              <div className="row">
                <div className="col">
                  <input
                    type="range"
                    min="0"
                    max="6"
                    steps="1"
                    className="slider"
                    id="progressSlider"
                    onChange={this.props.progressChange}
                  />
                </div>
                <div className="col-3 pl-3">
                  <h5>{this.props.gameStageValue}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Role extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-body">
            <h4 className="card-title col">Select your class</h4>
            <div
              className="btn-group card-text col"
              role="group"
              aria-label="Role"
            >
              <button
                type="button"
                className="btn btn-melee"
                onClick={this.props.roleChange}
                value="melee"
              >
                Melee
              </button>
              <button
                type="button"
                className="btn btn-ranged"
                onClick={this.props.roleChange}
                value="ranged"
              >
                Ranged
              </button>
              <button
                type="button"
                className="btn btn-magic"
                onClick={this.props.roleChange}
                value="magic"
              >
                Magic
              </button>
              <button
                type="button"
                className="btn btn-summoner"
                onClick={this.props.roleChange}
                value="summoner"
              >
                Summoner
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Equipment extends React.Component {
  render() {
    return (
      <div className="equipment" id="equipment">
        <div className="row">
          <div className="col">
            <Weapons
              currentRole={this.props.currentRole}
              gameStageIndex={this.props.gameStageIndex}
            />
          </div>
          <div className="col">
            <Armor currentRole={this.props.currentRole} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <Accessories currentRole={this.props.currentRole} />
          </div>
          <div className="col">
            <Buffs currentRole={this.props.currentRole} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <Mounts currentRole={this.props.currentRole} />
          </div>
          <div className="col">
            <Lights currentRole={this.props.currentRole} />
          </div>
        </div>
      </div>
    );
  }
}

function getWeapons(currentRole, gameStageIndex) {
  let weaponList = [];
  const weaponData = require("./data/items.json");
  for (var i = 0; i < weaponData.length; i++) {
    const weapon = weaponData[i];
    if (
      weapon.role === currentRole &&
      weapon.gameStageAvailable === gameStageIndex &&
      weapon.category === "Weapons"
    ) {
      weaponList.push(weapon);
    }
    // console.log(
    //   "name- " +
    //     obj.name +
    //     "role- " +
    //     obj.role +
    //     "gameStageAvailable- " +
    //     obj.gameStageAvailable +
    //     "url- " +
    //     obj.url +
    //     "imgPath- " +
    //     obj.imgPath
    // );
  }

  return weaponList;
}

function populateWeapons(currentRole, gameStageIndex) {
  const weaponList = getWeapons(currentRole, gameStageIndex);

  const listItems = currentRole ? (
    weaponList.map((weapon) => (
      <tr key={uuidv4()}>
        <td key={uuidv4()}>
          <img
            key={uuidv4()}
            src={weapon.imgPath}
            alt={weapon.imgPath}
            className="mr-3 mt-1"
            decoding="async"
          ></img>
        </td>
        <td key={uuidv4()}>
          <a href={weapon.url} key={uuidv4()} target="_blank" rel="noreferrer">
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

class Weapons extends React.Component {
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

class Armor extends React.Component {
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
          <h6 className="card-text">Gold</h6>
        </div>
      </div>
    );
  }
}

class Accessories extends React.Component {
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
          <h6 className="card-text">Ranger Emblem</h6>
        </div>
      </div>
    );
  }
}

class Buffs extends React.Component {
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
          Buffs
        </div>
        <div className="card-body">
          <h6 className="card-text">Ironskin</h6>
        </div>
      </div>
    );
  }
}

class Mounts extends React.Component {
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
          Mounts
        </div>
        <div className="card-body">
          <h6 className="card-text">Horse</h6>
        </div>
      </div>
    );
  }
}

class Lights extends React.Component {
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
          Light Pets
        </div>
        <div className="card-body">
          <h6 className="card-text">Torch</h6>
        </div>
      </div>
    );
  }
}

class TerrariaRoles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      equipmentCardStyle: ["card-header", "equip-type"],
      currentRole: null,
      roleStyle: null,
      gameStageIndex: "0",
      gameStageValue: [
        "Pre-bosses",
        "Pre-Hardmode",
        "Pre-mech bosses",
        "Pre-Plantera",
        "Pre-Golem",
        "Pre-Lunar Events",
        "Endgame",
      ],
    };
    this.roleChange = this.roleChange.bind(this);
    this.progressChange = this.progressChange.bind(this);
  }

  componentDidMount() {
    document.title = "Terraria Classes Guide";
    this.setState({
      roleStyle: this.state.equipmentCardStyle.join(" "),
    });
    document.getElementById("progressSlider").value = this.state.gameStageIndex;
  }

  roleChange(e) {
    this.setState({
      currentRole: e.target.value,
      roleStyle:
        this.state.equipmentCardStyle.join(" ") +
        " equipment-" +
        e.target.value,
    });
  }

  progressChange(e) {
    this.setState({
      gameStageIndex: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <PageHeading />
        <div className="container">
          <div className="card text-white bg-dark mb-3 mt-3">
            <ProgressBar
              gameStageIndex={this.state.gameStageIndex}
              gameStageValue={
                this.state.gameStageValue[this.state.gameStageIndex]
              }
              progressChange={this.progressChange}
            />
            <Role roleChange={this.roleChange} />
          </div>
          <div className="card text-white bg-dark pb-3 mt-3">
            <Equipment
              currentRole={this.state.currentRole}
              gameStageIndex={this.state.gameStageIndex}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TerrariaRoles />, document.getElementById("root"));
