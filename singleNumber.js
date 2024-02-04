/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let obj = {}

    // for(let i=0;i<nums.length;i++){
    //     obj[nums[i]] = (obj[nums[i]] || 0) +1
    // }

    // return Object.keys(obj).filter((item,i)=> obj[item] === 1)
    let result = nums[0]
    for(let i=1;i<nums.length;i++){
        result^=nums[i]
    }
    return result
};
