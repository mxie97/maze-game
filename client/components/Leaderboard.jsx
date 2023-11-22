import React from 'react';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const highScoresArray = useSelector((store) => store.game.highScores);
  let highScoresComponents = [];
  for (let user in highScoresArray) {
    highScoresComponents.push(
      <p key={user}>
        {user}: {highScoresArray[user]}
      </p>
    );
  }
  return (
    <div>
      <div
        className='modal'
        id='modal2'
      >
        <h4>High Scores</h4>
        <div>{highScoresComponents}</div>
      </div>

      <div
        className='overlay'
        id='overlay'
      ></div>
      <div
        className='modal'
        id='modal'
      >
        <h4 id='endgame-message'>GAME OVER!</h4>
        <button
          className='button'
          id='restart-button'
          onClick={() => {
            document.getElementById('modal').classList.remove('active');
          }}
        >
          See High Scores
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
