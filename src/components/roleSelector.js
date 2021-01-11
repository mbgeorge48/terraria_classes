import React from "react";

export default class Role extends React.Component {
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
                data-testid="melee-role-button"
              >
                Melee
              </button>
              <button
                type="button"
                className="btn btn-ranged"
                onClick={this.props.roleChange}
                value="ranged"
                data-testid="ranged-role-button"
              >
                Ranged
              </button>
              <button
                type="button"
                className="btn btn-magic"
                onClick={this.props.roleChange}
                value="magic"
                data-testid="magic-role-button"
              >
                Magic
              </button>
              <button
                type="button"
                className="btn btn-summoner"
                onClick={this.props.roleChange}
                value="summoner"
                data-testid="summoner-role-button"
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
