import React from 'react';
import Maze from './Maze.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  CHANGE_DIRECTION_AND_MOVE,
  GHOST_ROAM,
} from '../reducers/gameReducer.js';

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const handler = (e) => {
      dispatch(CHANGE_DIRECTION_AND_MOVE(e.code));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });
  React.useEffect(() => {
    const ghostTimer = setTimeout(() => {
      dispatch(GHOST_ROAM());
    }, 500);
    return () => clearTimeout(ghostTimer);
  });

  const ghostIndex = useSelector((store) => store.game.ghostIndex);
  return (
    <div>
      <Maze ghostIndex={ghostIndex} />
      <button>click me</button>
    </div>
  );
};

export default App;
