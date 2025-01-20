/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = new Array(9).fill(null).map(() => new Set())
    const cols = new Array(9).fill(null).map(() => new Set())
    const squares = new Array(9).fill(null).map(() => new Set())

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let num = board[row][col]
            if (num === '.') continue
            
            if (rows[row].has(num) || cols[col].has(num) || squares[Math.floor(row / 3) * 3 + Math.floor(col / 3)].has(num)) {
                return false
            }
        
            rows[row].add(num)
            cols[col].add(num)
            squares[Math.floor(row / 3) * 3 + Math.floor(col / 3)].add(num)
        }
    }

    return true
};
