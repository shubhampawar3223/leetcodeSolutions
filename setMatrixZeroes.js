/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // let col = matrix[0][...]
    // let row = matrix[...][0]

    let m = matrix.length-1
    let n = matrix[0].length-1
    let col=1

    for(let i=0;i<=m;i++){
        for(let j=0;j<=n;j++){
            
            if(matrix[i][j]===0){
                matrix[i][0] = 0
                
                if(j === 0){
                    col = 0                     
                }
                else{
                    matrix[0][j] = 0
                }                
            }
        }
    }

    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
             if(matrix[0][j]===0 || matrix[i][0]===0){
                 matrix[i][j] = 0
             }           
        }
    }

    if(matrix[0][0] === 0){
        for(let j=0;j<=n;j++){
            matrix[0][j] = 0
        }
    }

    if(col===0){
        for(let i=0;i<=m;i++){
            matrix[i][0] = 0
        }
    }
    
    // let zeroCol = []
    // let zeroRow = []
    // for(let i=0;i<=m;i++){
    //     for(let j=0;j<=n;j++){
    //         if(matrix[i][j] === 0){
    //             console.log(i,j)
    //             if(!zeroRow.includes(i)){
    //                 makeZeroRow(i)
    //                 zeroRow.push(i)
    //             }
                
    //             if(!zeroCol.includes(j)){
    //                 makeZeroCol(j)
    //                 zeroCol.push(j)
    //             }
                
    //         }
    //     }

    // }

    // function makeZeroCol(col){
    //     for(let i=0;i<=m;i++){
    //         if(matrix[i][col] !== 0 &&  matrix[i][col] !== null){
    //             matrix[i][col]= null
    //         }
            
    //     }
    // }

    // function makeZeroRow(row){
    //     for(let i=0;i<=n;i++){
    //         if(matrix[row][i] !== 0 && matrix[row][i] !== null){
    //             matrix[row][i] = null
    //         }            
    //     }
    // }

    
};
