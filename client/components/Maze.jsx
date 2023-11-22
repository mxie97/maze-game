import React from 'react';
import pacmanRight from '../images/pacman-right.gif';
import pacmanDown from '../images/pacman-down.gif';
import pacmanUp from '../images/pacman-up.gif';
import pacmanLeft from '../images/pacman-left.gif';
import { useDispatch, useSelector } from 'react-redux';

const Maze = () => {
  const maze = useSelector((store) => store.game.maze);
  const pacManIndex = useSelector((store) => store.game.pacManIndex);
  const pacManDirection = useSelector((store) => store.game.pacManDirection);
  // console.log(pacManIndex);
  console.log(pacManDirection);
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
