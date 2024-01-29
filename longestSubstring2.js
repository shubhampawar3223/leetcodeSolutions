// Longest Substring Without Repeating Characters

// Example 1:

// Input: s = "abcabcbb"

// Explanation: The answer is "abc",
// Example 2:

// Input: s = "bbbbb"
// Explanation: The answer is "b",
// Example 3:

// Input: s = "pwwkew"
// Explanation: The answer is "wke"


function getLongestSubstring(str){
    
    let tempStr = ''
    let ans = ''
    let count = 0    
    for(let i=0;i<str.length;i++){
        
        if(tempStr.includes(str[i])){
            let j = tempStr.indexOf(str[i])
            // console.log("log",tempStr)
            if(tempStr.length > count){
                count = tempStr.length
                ans = tempStr
            }
            
            tempStr.replace(tempStr.slice(0,j+1),'')
            tempStr = ''+str[i]
            
        }
        else{
            tempStr += str[i]
        }
    }
    
    return ans.length < tempStr.length ? tempStr: ans
}

console.log(getLongestSubstring("abcabcbb"))
console.log(getLongestSubstring("bcdcdefgh"))
console.log(getLongestSubstring("bbbbbbbbb"))
console.log(getLongestSubstring("pwwkew"))
