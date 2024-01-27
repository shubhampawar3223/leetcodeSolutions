/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let newString = ''
    let maxLen = 0
    for(let i=0;i<s.length;i++){
        if(newString.includes(s[i])){
            newString.length> maxLen ? maxLen=newString.length: null
            let j =  newString.indexOf(s[i])
            // console.log("log1",j,newString)
            newString=newString.replace(newString.substr(0,j+1),'')          
            // console.log("log2",newString)
            newString += s[i]
        }
        else{
           newString = newString + s[i] 
        }
    }


    return maxLen>newString.length?maxLen:newString.length
};
