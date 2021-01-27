import React from "react";

import Armor from "./equipmentContainers/armorContainer";
import Weapons from "./equipmentContainers/weaponContainer";
import Accessories from "./equipmentContainers/accessoriesContainer";
import Buffs from "./equipmentContainers/buffsContainer";
import Mounts from "./equipmentContainers/mountsContainer";
import Lights from "./equipmentContainers/lightsContainer";

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
