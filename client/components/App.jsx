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
      <div className='main-container'>
        <Maze ghostIndex={ghostIndex} />
        <ScoreBox />
      </div>

      <Leaderboard />
      <button
        onClick={() => {
          document.getElementById('modal').classList.add('active');
          document.getElementById('overlay').classList.add('active');
        }}
      >
        click me
      </button>
    </div>
  );
};

export default App;
