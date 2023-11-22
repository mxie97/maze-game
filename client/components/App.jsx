import React from 'react';
import Maze from './Maze.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_DIRECTION_AND_MOVE } from '../reducers/gameReducer.js';

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      dispatch(CHANGE_DIRECTION_AND_MOVE(e.code));
    });
  });

  return (
    <div>
      <Maze />
      <button>click me</button>
    </div>
  );
};

export default App;
