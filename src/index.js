import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Weapons extends React.Component{
  render() {
    return (
      <p>Weapons</p>
    );
  }
}

class Armor extends React.Component{
  render() {
    return (
      <p>Armor</p>
    );
  }
}

class Accessories extends React.Component{
  render() {
    return (
      <p>Accessories</p>
    );
  }
}

class Buffs extends React.Component{
  render() {
    return (
      <p>Buffs</p>
    );
  }
}

class Mounts extends React.Component{
  render() {
    return (
      <p>Mounts</p>
    );
  }
}

class Light extends React.Component{
  render() {
    return (
      <p>Light</p>
    );
  }
}

class TerrariaClasses extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Weapons />
          <Armor />
          <Accessories />
          <Buffs />
          <Mounts />
          <Light />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <TerrariaClasses />,
  document.getElementById('root')
);
