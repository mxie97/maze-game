import React from 'react';
import Maze from './Maze.jsx';
import { useSelector } from 'react-redux';

const App = () => {
  const maze = useSelector((store) => store.game.maze);
  return (
    <div>
      <Maze maze={maze} />
      <button>click me</button>
    </div>
  );
};

export default App;
