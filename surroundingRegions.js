// 130. Surrounded Regions

var solve = function(board) {

    if(board.length ===0) return null

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j]==='O' && (i===0 || i===board.length-1 || j===0  || j===board[0].length-1)){        
                dfs(board,i,j)
                console.log("log10",i,j,board)

            }
        }
    }

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] === 'W'){
                board[i][j] = 'O'
            }
            else{
                board[i][j] = 'X'
            }
        }    
    }
    console.log("log",board)
    return board
    
};

function dfs(board,i,j){
    if(i<0 || i > board.length-1 || j<0 || j > board[0].length-1 ||board[i][j] === 'X' || board[i][j] === 'W'){
        return 
    }

    board[i][j] = 'W'
    
    dfs(board,i+1,j)
    dfs(board,i-1,j)
    dfs(board,i,j+1)
    dfs(board,i,j-1)
    return 
}
