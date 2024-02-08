/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // //trim
    // s = s.trim()

    // //convert string to lowercase
    // s= s.toLowerCase()

    // //spliting /\W+/
    // let arr1 = s.split(/[_-\W+]/g)
    // let arr2 = [...arr1].reverse()
    // for(let i=0;i<arr2.length;i++){
    //     arr2[i] = arr2[i].split('').reverse().join('')
    // }

    // if(arr1.join('')===arr2.join('')){
    //     return true
    // }
    // return false

    s= s.trim()

    let r = s.split(/[_-\W+]/g)
    let str= r.join('').toLowerCase()
    let status= true
    let result
    if(str.length%2 === 0){
        let mid = (str.length/2)-1
        result = checkPallindrome(str,mid,mid+1,status)
    }
    else{
        let mid = Math.floor(str.length/2)
        result =checkPallindrome(str,mid,mid,status)
    }
    return result
    
};

function checkPallindrome(str,i,j,status){
    if(i<0 || j>=str.length ){
        return status
    }
    if(str[i] !== str[j]){
        return false
    }

    return checkPallindrome(str,i-1,j+1,status)
}
