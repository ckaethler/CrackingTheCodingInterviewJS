// ----------------------------------------------------------------------------
// SOLUTION
const rotateMatrix = (matrix=[]) => {
    if(matrix.length === 0 || matrix.length != matrix[0].length) return matrix;

    const n = matrix.length;
    for (let layer = 0; layer < n / 2; layer++) {
        let start = layer;
        let end = n - 1 - layer;
        for(let i = start; i < end; i++) {
            let offset = i - start;
            let top = matrix[start][i];
            
            // left -> top
            matrix[start][i] = matrix[end-offset][start];

            // bottom -> left
            matrix[end - offset][start] = matrix[end][end - offset];

            // right -> bottom
            matrix[end][end - offset] = matrix[i][end];

            // top -> right
            matrix[i][end] = top;
        }
    }

    return matrix;
}


// ----------------------------------------------------------------------------
// TESTS
let matrix_1 = [
    [1, 2],
    [3, 4]
];
let matrix_2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(rotateMatrix(matrix_1));
console.log(rotateMatrix(matrix_2));