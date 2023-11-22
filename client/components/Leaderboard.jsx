import React from 'react';

const Leaderboard = () => {
  return (
    <div>
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
        >
          Play again?
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
