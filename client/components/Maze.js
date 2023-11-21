import React from 'react';

const Maze = (props) => {
  const { maze } = props;
  const cells = maze.map((color) => <div className={color}></div>);
  return <div className='maze-container'>{cells}</div>;
};

export default Maze;
