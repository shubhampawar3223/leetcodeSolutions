/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let i=-1
    let j=0
    let count = 0
    let maxCount =0


    for(j=0;j<nums.length;j++){
        if( nums[j] ===1 && i === -1){
            i=j            
        }
        if(!nums[j] && i!==-1){
            
            count = j-i
            maxCount<count?maxCount=count:null
             i=-1
        }
        
    }
    if(i>=0){
         count = j-i
         maxCount<count?maxCount=count:null
    }
    return maxCount
};
