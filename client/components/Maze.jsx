import React from 'react';
import pacmanRight from '../images/pacman-right.gif';
import pacmanDown from '../images/pacman-down.gif';
import pacmanUp from '../images/pacman-up.gif';
import pacmanLeft from '../images/pacman-left.gif';
import cherry from '../images/cherry.png';
import Ghost from './Ghost.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_MAZE, EAT_FOOD, END_GAME } from '../reducers/gameReducer.js';

//••••

const Maze = (props) => {
  const maze = useSelector((store) => store.game.maze);
  const pacManIndex = useSelector((store) => store.game.pacManIndex);
  const pacManDirection = useSelector((store) => store.game.pacManDirection);
  const cherryIndex = useSelector((store) => store.game.cherryIndex);
  const ghostIndex = props.ghostIndex;
  const foodIndices = useSelector((store) => store.game.foodIndices);

  const dispatch = useDispatch();
  if (pacManIndex === cherryIndex) {
    dispatch(RESET_MAZE());
  }
  if (foodIndices.includes(pacManIndex)) {
    dispatch(EAT_FOOD(pacManIndex));
  }
  if (pacManIndex === ghostIndex) {
    dispatch(END_GAME());
  }

  const cells = maze.map((color, index) => {
    if (index == pacManIndex) {
      if (pacManDirection === 'ArrowRight') {
        return (
          <div
            className={color}
            key={index}
            id={index}
          >
            <img src={pacmanRight}></img>
          </div>
        );
      } else if (pacManDirection === 'ArrowDown') {
        return (
          <div
            className={color}
            key={index}
            id={index}
          >
            <img src={pacmanDown}></img>
          </div>
        );
      } else if (pacManDirection === 'ArrowUp') {
        return (
          <div
            className={color}
            key={index}
            id={index}
          >
            <img src={pacmanUp}></img>
          </div>
        );
      } else if (pacManDirection === 'ArrowLeft') {
        return (
          <div
            className={color}
            key={index}
            id={index}
          >
            <img src={pacmanLeft}></img>
          </div>
        );
      }
    } else if (index === cherryIndex) {
      return (
        <div
          className={color}
          key={index}
          id={index}
        >
          <img src={cherry}></img>
        </div>
      );
    } else if (index === ghostIndex) {
      return (
        <div
          className={color}
          key={index}
          id={index}
        >
          <Ghost />
        </div>
      );
    } else if (foodIndices.includes(index)) {
      return (
        <div
          className={color}
          key={index}
          id={index}
        >
          •
        </div>
      );
    } else
      return (
        <div
          className={color}
          key={index}
          id={index}
        ></div>
      );
  });
  return <div className='maze-container'>{cells}</div>;
};

export default Maze;
