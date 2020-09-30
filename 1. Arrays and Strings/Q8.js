// ----------------------------------------------------------------------------
// SOLUTION
const zeroedMatrix = (matrix=[]) => {
    if(matrix.length === 0) return matrix;
    const row_length = matrix.length;
    const col_length = matrix[0].length;
    let row_zeros = new Array(row_length);
    let col_zeros = new Array(col_length);

    for (let row = 0; row < row_length; row++) {
        for (let col = 0; col < col_length; col++) {
            if (matrix[row][col] === 0) {
                row_zeros[row] = true;
                col_zeros[col] = true;
            }
        }
    }
    for (let row = 0; row < row_length; row++) {
        for (let col = 0; col < col_length; col++) {
            if(row_zeros[row] === true || col_zeros[col] === true) {
                matrix[row][col] = 0;
            }
        }
    }
    return matrix;
}

// ----------------------------------------------------------------------------
// TESTS
const matrix_1 = [[1]];
const matrix_2 = [
    [1, 1, 1, 0]
];
const matrix_3 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
const matrix_4 = [
    [1, 0, 1, 1],
    [0, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
];
const matrix_5 = [
    [0, 0],
    [0, 1]
];
console.log(zeroedMatrix(matrix_1));
console.log(zeroedMatrix(matrix_2));
console.log(zeroedMatrix(matrix_3));
console.log(zeroedMatrix(matrix_4));
console.log(zeroedMatrix(matrix_5));
