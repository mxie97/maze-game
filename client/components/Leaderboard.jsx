import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SAVE_SCORE } from '../reducers/gameReducer.js';

const Leaderboard = () => {
  const userScore = useSelector((store) => store.game.score);

  const highScoresArray = useSelector((store) => store.game.highScores);
  let highScoresComponents = [];

  for (let score in highScoresArray) {
    highScoresComponents.unshift(
      <p key={score}>
        {highScoresArray[score]}: {score}
      </p>
    );
  }
  const dispatch = useDispatch();

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
        <p>Enter username:</p>
        <input
          type='text'
          id='username'
        ></input>
        <p>Score: {userScore}</p>
        <button
          className='button'
          id='restart-button'
          onClick={() => {
            document.getElementById('modal').classList.remove('active');
            let user = document.getElementById('username').value;
            dispatch(SAVE_SCORE([user, userScore]));
          }}
        >
          Save Score
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
