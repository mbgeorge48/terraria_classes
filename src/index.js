import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "@material-ui/core/Slider";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

class Weapons extends Component {
  render() {
    return <h4>Weapons</h4>;
  }
}

class Armor extends Component {
  render() {
    return <h4>Armor</h4>;
  }
}

class Accessories extends Component {
  render() {
    return <h4>Accessories</h4>;
  }
}

class Buffs extends Component {
  render() {
    return <h4>Buffs</h4>;
  }
}

class Mounts extends Component {
  render() {
    return <h4>Mounts</h4>;
  }
}

class Lights extends Component {
  render() {
    return <h4>Lights</h4>;
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
      <div>
        <h4>Select what stage of the game you're on</h4>
        <Slider
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks={this.marks}
          min={0}
          max={6}
        />
      </div>
    );
  }
}

class Equipment extends Component {
  render() {
    return (
      <div className="equipment">
        <div class="row top-buffer">
          <div class="col weapons">
            <Weapons />
          </div>
          <div class="col armor">
            <Armor />
          </div>
        </div>
        <div class="row top-buffer">
          <div class="col accessories">
            <Accessories />
          </div>
          <div class="col buffs">
            <Buffs />
          </div>
        </div>
        <div class="row top-buffer">
          <div class="col mounts">
            <Mounts />
          </div>
          <div class="col lights">
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
      <div class="container">
        <PageHeading />
        <div class="row top-buffer">
          <div class="col">
            <ProgressBar />
          </div>
        </div>
        <div class="row top-buffer">
          <Equipment />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TerrariaClasses />, document.getElementById("root"));
