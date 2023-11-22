import React from 'react';
import Maze from './Maze.jsx';
import ScoreBox from './Score.jsx';
import Leaderboard from './Leaderboard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  CHANGE_DIRECTION_AND_MOVE,
  GHOST_ROAM,
} from '../reducers/gameReducer.js';

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const handler = (e) => {
      if (
        e.code === 'ArrowRight' ||
        e.code === 'ArrowDown' ||
        e.code === 'ArrowLeft' ||
        e.code === 'ArrowUp'
      ) {
        dispatch(CHANGE_DIRECTION_AND_MOVE(e.code));
      }
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
      <div className='main-container'>
        <Maze ghostIndex={ghostIndex} />
        <ScoreBox />
      </div>
      <Leaderboard />
    </div>
  );
};

export default App;
