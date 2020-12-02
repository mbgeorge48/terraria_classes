import React from "react";
import ReactDOM from "react-dom";

import "./scss/index.scss";

function PageHeading() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <span class="navbar-brand mb-0 h1">Terraria Classes Guide</span>
      </div>
    </nav>
  );
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
          <h6 className="card-text">Point Stick</h6>
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

class ProgressBar extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="card-body">
            <h4 class="card-title col">Select your game stage</h4>
            <div class="container card-text">
              <div class="row">
                <div class="col">
                  <input
                    type="range"
                    min="0"
                    max="6"
                    steps="1"
                    class="slider"
                    id="progressSlider"
                    onChange={this.props.progressChange}
                  />
                </div>
                <div class="col-3">
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
      <div class="container">
        <div class="row">
          <div class="card-body">
            <h4 class="card-title col">Select your class</h4>
            <div class="btn-group card-text col" role="group" aria-label="Role">
              <button
                type="button"
                class="btn btn-melee"
                onClick={this.props.roleChange}
                value="melee"
              >
                Melee
              </button>
              <button
                type="button"
                class="btn btn-ranged"
                onClick={this.props.roleChange}
                value="ranged"
              >
                Ranged
              </button>
              <button
                type="button"
                class="btn btn-magic"
                onClick={this.props.roleChange}
                value="magic"
              >
                Magic
              </button>
              <button
                type="button"
                class="btn btn-summoner"
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
        <div class="row">
          <div class="col">
            <Weapons currentRole={this.props.currentRole} />
          </div>
          <div class="col">
            <Armor currentRole={this.props.currentRole} />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <Accessories currentRole={this.props.currentRole} />
          </div>
          <div class="col">
            <Buffs currentRole={this.props.currentRole} />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <Mounts currentRole={this.props.currentRole} />
          </div>
          <div class="col">
            <Lights currentRole={this.props.currentRole} />
          </div>
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
      gameStageIndex: 0,
      gameStageValue: [
        "Pre-bosses",
        "Pre-Hardmode",
        "Pre-mechanical bosses",
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
        <div class="container">
          <div class="card text-white bg-dark mb-3 mt-3">
            <ProgressBar
              gameStageIndex={this.state.gameStageIndex}
              gameStageValue={
                this.state.gameStageValue[this.state.gameStageIndex]
              }
              progressChange={this.progressChange}
            />
            <Role roleChange={this.roleChange} />
          </div>
          <div class="card text-white bg-dark pb-3 mt-3">
            <Equipment currentRole={this.state.currentRole} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TerrariaRoles />, document.getElementById("root"));
