import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './reducers/gameReducer';

export const store = configureStore({
  reducer: {
    game: gameSlice,
  },
});

export default store;
