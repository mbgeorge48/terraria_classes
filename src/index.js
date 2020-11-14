import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "@material-ui/core/Slider";

import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

class Weapons extends Component {
  render() {
    return (
      <div class="col-md weapons">
        <h4>Weapons</h4>
      </div>
    );
  }
}

class Armor extends Component {
  render() {
    return (
      <div class="col-md armor">
        <h4>Armor</h4>
      </div>
    );
  }
}

class Accessories extends Component {
  render() {
    return (
      <div class="col-md accessories">
        <h4>Accessories</h4>
      </div>
    );
  }
}

class Buffs extends Component {
  render() {
    return (
      <div class="col-md buffs">
        <h4>Buffs</h4>
      </div>
    );
  }
}

class Mounts extends Component {
  render() {
    return (
      <div class="col-md mounts">
        <h4>Mounts</h4>
      </div>
    );
  }
}

class Lights extends Component {
  render() {
    return (
      <div class="col-md lights">
        <h4>Lights</h4>
      </div>
    );
  }
}

function PageHeading() {
  return (
    <header class="header text-center">
      <h1>Terraria Classes Guide</h1>
      <p>
        You can use this to find the ultimate class for each stage in the game!
      </p>
    </header>
  );
}

class ProgressBar extends Component {
  marks = [
    {
      value: 0,
      label: "Pre-bosses",
    },
    {
      value: 1,
      label: "Pre-Hardmode",
    },
    {
      value: 2,
      label: "Pre-mechanical bosses",
    },
    {
      value: 3,
      label: "Pre-Plantera",
    },
    {
      value: 4,
      label: "Pre-Golem",
    },
    {
      value: 5,
      label: "Pre-Lunar Events",
    },
    {
      value: 6,
      label: "Endgame",
    },
  ];

  render() {
    return (
      <div class="top-buffer">
        <h4>Select what stage of the game you're on</h4>

        <div class="row">
          <Slider
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks={this.marks}
            min={0}
            max={6}
          />
        </div>
      </div>
    );
  }
}

class Category extends Component {
  render() {
    return (
      <div class="top-buffer">
        <h4>Select your current class</h4>
        <div class="row ">
          <div class="col-md">
            <button class="btn btn-dark btn-lg btn-block">Melee</button>
          </div>
          <div class="col-md">
            <button class="btn btn-dark btn-lg btn-block">Ranged</button>
          </div>
          <div class="col-md">
            <button class="btn btn-dark btn-lg btn-block">Magic</button>
          </div>
          <div class="col-md">
            <button class="btn btn-dark btn-lg btn-block">Summoner</button>
          </div>
        </div>
      </div>
    );
  }
}

class Equipment extends Component {
  render() {
    return (
      <div className="equipment" class="container top-buffer">
        <div class="row">
          <Weapons />
          <Armor />
        </div>
        <div class="row">
          <Accessories />
          <Buffs />
        </div>
        <div class="row">
          <Mounts />
          <Lights />
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
      <div class="container">
        <PageHeading />
        <ProgressBar />
        <Category />
        <div class="row top-buffer">
          <Equipment />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TerrariaClasses />, document.getElementById("root"));
