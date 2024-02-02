/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length

    for(let i=0;i<m-1;i++){
        for(let j=i+1;j<n;j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for(let i=0; i<m; i++){
        matrix[i] = matrix[i].reverse()
    }

    return matrix
};
