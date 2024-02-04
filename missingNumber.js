/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // let max = Math.max(...nums)
    // for(let i=0;i<=max;i++){
    //     if(!nums.includes(i)){
    //         return i
    //     }
    // }

    // return nums.length
    let len = nums.length
    return ((len*(len+1))/2)-nums.reduce((acc,num)=>acc+num,0)
};
