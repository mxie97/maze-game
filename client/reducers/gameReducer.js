import { createSlice } from '@reduxjs/toolkit';

function findNeighbors(r, c, grid) {
  const neighbors = [];
  if (r > 1 && grid[r - 2][c]) {
    neighbors.push([r - 2, c]);
  }
  if (r < 15 && grid[r + 2][c]) {
    neighbors.push([r + 2, c]);
  }
  if (c > 1 && grid[r][c - 2]) {
    neighbors.push([r, c - 2]);
  }
  if (c < 15 && grid[r][c + 2]) {
    neighbors.push([r, c + 2]);
  }
  return neighbors;
}

//h = w = 5 * 60px
//H = W = ((2x5)+1) * 60px
//h = w= 8*40px
//H=W= 17 * 40px
//1 - wall, 0 - path
// in 11 by 11 example grid=[
//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//[1, 0, 1, n, 1, 1, 1, 1, 1, 1, 1],
//[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//]

function backtrackingMazeGenerator() {
  const grid = [];
  const row = [];
  for (let columns = 0; columns < 17; columns++) {
    row.push(1);
  }
  for (let rows = 0; rows < 17; rows++) {
    grid.push([...row]);
  }

  //start at cell at row index 1, column index 1 for now. can set randomly later if you want
  let currentRow = 1;
  let currentColumn = 1;
  let track = [[1, 1]];
  grid[currentRow][currentColumn] = 0;

  while (track.length > 0) {
    currentRow = track[track.length - 1][0];
    currentColumn = track[track.length - 1][1];
    let neighbors = findNeighbors(currentRow, currentColumn, grid);

    if (neighbors.length === 0) {
      track.pop();
    } else {
      let randomIndex = Math.floor(Math.random() * neighbors.length);
      let neighborRow = neighbors[randomIndex][0];
      let neighborColumn = neighbors[randomIndex][1];

      //pick a random neighboring cell and set to 0 in grid
      grid[neighborRow][neighborColumn] = 0;

      //clear wall in between neighboring cell and current cell
      grid[Math.floor(neighborRow + currentRow) / 2][
        Math.floor(neighborColumn + currentColumn) / 2
      ] = 0;

      track.push([neighborRow, neighborColumn]);
    }
  }
  return grid;
}

function getMazeState() {
  const generatedMaze = backtrackingMazeGenerator();
  const mazeResultsBinary = [];
  for (let row = 0; row < generatedMaze.length; row++) {
    mazeResultsBinary.push(...generatedMaze[row]);
  }
  const mazeResults = mazeResultsBinary.map((number) => {
    if (number === 1) return 'black';
    else return 'white';
  });

  return mazeResults; //array with colors
}

const initialState = {
  pacManIndex: 18,
  pacManDirection: 'ArrowRight',
  maze: getMazeState(),
  cherryIndex: 256,
  ghostIndex: 270,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    RESET_MAZE: (state, action) => {
      const newMaze = getMazeState();

      state.pacManIndex = 18;
      state.pacManDirection = 'ArrowRight';
      state.maze = newMaze;
      state.cherryIndex = 256;
      state.ghostIndex = 270;
    },
    CHANGE_DIRECTION_AND_MOVE: (state, action) => {
      console.log(action);
      state.pacManDirection = action.payload;
      if (
        action.payload === 'ArrowRight' &&
        state.maze[state.pacManIndex + 1] === 'white'
      ) {
        state.pacManIndex++;
      }
      if (
        action.payload === 'ArrowLeft' &&
        state.maze[state.pacManIndex - 1] === 'white'
      ) {
        state.pacManIndex--;
      }
      if (
        action.payload === 'ArrowDown' &&
        state.maze[state.pacManIndex + 17] === 'white'
      ) {
        state.pacManIndex += 17;
      }
      if (
        action.payload === 'ArrowUp' &&
        state.maze[state.pacManIndex - 17] === 'white'
      ) {
        state.pacManIndex -= 17;
      }
    },
    GHOST_ROAM: (state, action) => {
      state.ghostIndex--;
    },
  },
});

export const { RESET_MAZE, CHANGE_DIRECTION_AND_MOVE, GHOST_ROAM } =
  gameSlice.actions;
export default gameSlice.reducer;
