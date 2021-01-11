// Work in progress

import React from "react";

export default class progressBar extends React.Component {
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