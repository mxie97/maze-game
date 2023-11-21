import React from 'react';

const Maze = (props) => {
  const { maze } = props;
  const cells = maze.map((color, index) => (
    <div
      className={color}
      key={index}
    ></div>
  ));
  return <div className='maze-container'>{cells}</div>;
};

export default Maze;
