/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    // //splity the string 
    // let stringArray = s.split(' ')
    // let result =[]
    // //reverse the string array
    // stringArray = stringArray.reverse()

    // //loop to add valid string to array
    // for(let i=0;i< stringArray.length;i++){
    //     if(stringArray[i].length){
    //         //  stringArray.splice(i,1)
    //         result.push(stringArray[i])
    //     }
    // }

    // //join the array string and return the value
    // return result.join(' ')

    s= s.trim()

    return s.split(/\s+/).reverse().join(' ')
};
