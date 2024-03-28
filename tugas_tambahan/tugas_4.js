const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

let diagonalUtama = 0;
for (let i = 0; i < matrix.length; i++) {
    diagonalUtama += matrix[i][i];
}

let diagonalSamping = 0;
for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
    diagonalSamping += matrix[i][j];
}

const selisihDiagonal = diagonalUtama - diagonalSamping;

console.log(selisihDiagonal);
