import React from "react";
import { v4 as uuid } from "uuid";

import Armor from "./equipmentContainers/armorContainer";
import Weapons from "./equipmentContainers/weaponContainer";

// bring all the items in here and add them to the state?
// then push them to each child rather than reading the file over and over

export default class Equipment extends React.Component {
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
            <Armor
              currentRole={this.props.currentRole}
              gameStageIndex={this.props.gameStageIndex}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <Accessories
              currentRole={this.props.currentRole}
              gameStageIndex={this.props.gameStageIndex}
            />
          </div>
          <div className="col">
            <Buffs
              currentRole={this.props.currentRole}
              gameStageIndex={this.props.gameStageIndex}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <Mounts
              currentRole={this.props.currentRole}
              gameStageIndex={this.props.gameStageIndex}
            />
          </div>
          <div className="col">
            <Lights
              currentRole={this.props.currentRole}
              gameStageIndex={this.props.gameStageIndex}
            />
          </div>
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
