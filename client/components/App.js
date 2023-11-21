import React, { Component } from 'react';
import Maze from './Maze';

function getInitialState() {
  const arrayColors = ['white', 'black'];
  const mazeResults = [];
  for (let i = 0; i < 100; i++) {
    mazeResults.push(arrayColors[Math.round(Math.random())]);
  }

  return {
    maze: mazeResults,
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  render() {
    const { maze } = this.state;

    return (
      <div>
        <Maze maze={maze} />
        <button>click me</button>
      </div>
    );
  }
}

export default App;
