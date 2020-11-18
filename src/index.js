import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./scss/index.scss";

class Weapons extends Component {
  render() {
    return (
      <div class="card bg-secondary text-light">
        <div class="card-header">Weapons</div>
        <div class="card-body">
          <h6 class="card-text">Point Stick</h6>
        </div>
      </div>
    );
  }
}

class Armor extends Component {
  render() {
    return (
      <div class="card bg-secondary text-light">
        <div class="card-header">Armor</div>
        <div class="card-body">
          <h6 class="card-text">Gold</h6>
        </div>
      </div>
    );
  }
}

class Accessories extends Component {
  render() {
    return (
      <div class="card bg-secondary text-light">
        <div class="card-header">Accessories</div>
        <div class="card-body">
          <h6 class="card-text">Ranger Emblem</h6>
        </div>
      </div>
    );
  }
}

class Buffs extends Component {
  render() {
    return (
      <div class="card bg-secondary text-light">
        <div class="card-header">Buffs</div>
        <div class="card-body">
          <h6 class="card-text">Ironskin</h6>
        </div>
      </div>
    );
  }
}

class Mounts extends Component {
  render() {
    return (
      <div class="card bg-secondary text-light">
        <div class="card-header">Mounts</div>
        <div class="card-body">
          <h6 class="card-text">Horse</h6>
        </div>
      </div>
    );
  }
}

class Lights extends Component {
  render() {
    return (
      <div class="card bg-secondary text-light">
        <div class="card-header">Light Pets</div>
        <div class="card-body">
          <h6 class="card-text">Torch</h6>
        </div>
      </div>
    );
  }
}

function PageHeading() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <span class="navbar-brand mb-0 h1">Terraria Classes Guide</span>
      </div>
    </nav>
  );
}

class ProgressBar extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="card-body">
            <h5 class="card-title col">Select your game stage</h5>
            <div class="container card-text">
              <div class="row">
                <div class="col">
                  <input
                    type="range"
                    min="0"
                    max="6"
                    steps="1"
                    class="slider"
                    id="myRange"
                  />
                </div>
                <div class="col-3">
                  <h6>Pre-mechanical bosses</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Role extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will notice which button clicked it and then do change the currrent state to the role
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
    console.log();
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="card-body">
            <h5 class="card-title col">Select your class</h5>
            <div class="btn-group card-text col" role="group" aria-label="Role">
              <button
                type="button"
                class="btn btn-melee"
                id="melee-button"
                onClick={this.handleClick}
              >
                Melee
              </button>
              <button type="button" class="btn btn-ranged" id="ranged-button">
                Ranged
              </button>
              <button type="button" class="btn btn-magic" id="magic-button">
                Magic
              </button>
              <button
                type="button"
                class="btn btn-summoner"
                id="summoner-button"
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

class Equipment extends Component {
  render() {
    return (
      <div className="equipment">
        <div class="row">
          <div class="col">
            <Weapons />
          </div>
          <div class="col">
            <Armor />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <Accessories />
          </div>
          <div class="col">
            <Buffs />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <Mounts />
          </div>
          <div class="col">
            <Lights />
          </div>
        </div>
      </div>
    );
  }
}

class TerrariaClasses extends Component {
  componentDidMount() {
    document.title = "Terraria Classes Guide";
  }

  render() {
    return (
      <div>
        <PageHeading />
        <div class="container">
          <div class="card text-white bg-dark mb-3 mt-3">
            <ProgressBar />
            <Role />
          </div>
          <div class="card text-white bg-dark pb-3 mt-3">
            <Equipment />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TerrariaClasses />, document.getElementById("root"));
