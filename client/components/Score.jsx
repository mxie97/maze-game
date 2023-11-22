import React from 'react';
import { useSelector } from 'react-redux';

const ScoreBox = () => {
  const currentScore = useSelector((store) => store.game.score);
  return (
    <div className='score-box'>
      <p>
        <strong>Score:</strong>
      </p>
      <p id='userscore'>{currentScore}</p>
    </div>
  );
};

export default ScoreBox;
