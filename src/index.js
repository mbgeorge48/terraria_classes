import React from "react";
import ReactDOM from "react-dom";

// import progressBar from './components/pb';
import Equipment from './components/equipment';
import Role from './components/roleSelector'

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
