//Maximum Number of Vowels in a Substring of Given Length

var maxVowels = function(s, k) {

    let vowels = ['a','e','i','o','u']
    let maxCount = 0
    for(let i=0;i<k;i++){
        if(vowels.includes(s[i])){
              maxCount++                      
        }
    }

    let count = maxCount
    for(let i=k;i< s.length;i++){
        
        if((vowels.includes(s[i]) && vowels.includes(s[i-k])) || (!vowels.includes(s[i]) && !vowels.includes(s[i-k]))){
            continue      
        }
        else if(vowels.includes(s[i]) && !vowels.includes(s[i-k])){
            count++
        }
        else{
            count--;            
        }
        count>maxCount? maxCount=count : null
    }

    return count>maxCount? count:maxCount

};
