import React from 'react';
import pacman from '../images/pacman-right.gif';

const Maze = (props) => {
  const { maze } = props;
  const cells = maze.map((color, index) => {
    if (index === 18) {
      return (
        <div
          className={color}
          key={index}
          id={index}
        >
          <img src={pacman}></img>
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
