const countBattleshipsBFS = (board) => {
  // time: O(n**2)
  // space: O(1)
  // BFS with modifying
  let count = 0;
  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[0].length; j++) {
      if (board[i][j] === 'X') {
        count++;
        let neighbors = [[i, j]];
        while (neighbors.length) {
          let [x, y] = neighbors[0];
          board[x][y] = 'Y';
          neighbors = getNeighbors(x, y, board);
        }
      }
    }
  }
  return count;
};


const getNeighbors = (i, j, board) => {
  let neighbors = [[i+1, j], [i, j+1]];
  neighbors = neighbors.filter((pos) => {
    let [x, y] = pos;
    return x >= 0 && x <board.length && y >= 0 && y < board[0].length && board[x][y] === 'X';
  });
  return neighbors;
};

const countBattleships = (board) => {
  let count = 0;
  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[0].length; j++) {
      if (board[i][j] === 'X') {
        if ((i === 0 || board[i-1][j] === '.') && (j === 0 || board[i][j-1] === '.')) {
          count++;
        }
      }
    }
  }
  return count;
};
