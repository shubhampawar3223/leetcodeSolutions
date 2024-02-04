/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0

    
    for(let i=0;i<s.length;i++){
        getPallindrome(i,i)
        getPallindrome(i,i+1)
    }

    function getPallindrome(left,right){
        while( left>=0 && right<s.length &&  s[left]=== s[right]){
            count++
            left-=1
            right+=1
        }
    }
    return count
};
