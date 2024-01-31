/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length){
        return false
    }

    let charList ={}

    for(let i=0;i<s1.length;i++){
        charList[s1[i]] = (charList[s1[i]] || 0) +1
    }

    let right = 0
    let left = 0
    let reqLength = s1.length

    while(right < s2.length){

        if(charList[s2[right]] > 0) reqLength--
        charList[s2[right]] -= 1
        right++
        if(!reqLength) return true 

        if(right-left === s1.length){
           if(charList[s2[left]] >= 0) reqLength++
            charList[s2[left]] +=1 
           left++ 
        }
        
    }
    return false
};

