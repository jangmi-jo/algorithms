const isValidSudoku = (board) => {
  let rSets = [];
  let cSets = [];
  let dSets = [[], [], []];
  for (let i=0; i<9; i++) {
    rSets[i] = new Set();
    cSets[i] = new Set();
    for (let j=0; j<9; j++) {
      if (board[i][j] !== '.' && rSets[i].has(board[i][j])) {
        return false;
      } else {
        rSets[i].add(board[i][j]);
      }

      if (board[j][i] !== '.' && cSets[i].has(board[j][i])) {
        return false;
      } else {
        cSets[i].add(board[j][i]);
      }
    }
  }
  console.log(dSets);
};

isValidSudoku([ [ '.', '8', '7', '6', '5', '4', '3', '2', '1' ],
  [ '2', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '3', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '4', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '5', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '6', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '7', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '8', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '9', '.', '.', '.', '.', '.', '.', '.', '.' ] ]);
