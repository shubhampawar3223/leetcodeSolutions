// Given a matrix, print it in Reverse Wave Form. 

// Examples : 

// Input :  1  2  3  4
//          5  6  7  8
//          9  10 11 12
//          13 14 15 16
// Output : 4 8 12 16 15 11 7 3 2 6 10 14 13 9 5 1

function getWaveTraversal(arr){
    let r=arr.length-1
    let c= arr[0].length-1
    let i=0
    for(let j=c;j>=0;j--){
        if(i<=0){
            i=0
            while(i>=0 && i<=r){
            console.log(arr[i][j]) 
            i++
        }    
        }
        else{
            i=3
           while(i>=0 && i<=r){
            console.log(arr[i][j]) 
            i--
        } 
        }
        
    }
}


let arr = [ [ 1, 2, 3, 4 ], 
            [ 5, 6, 7, 8 ], 
            [ 9, 10, 11, 12 ], 
            [ 13, 14, 15, 16 ] ];

getWaveTraversal(arr)
            
