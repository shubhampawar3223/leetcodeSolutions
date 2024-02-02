/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

//   let i =0
//   let j=0
//   let v
//   while(j<nums.length && i< nums.length){
     
//     if(!nums[i] && nums[j]){
//       let v = nums[j]
//       nums[j] = nums[i]
//       nums[i] = v
//         i++
//     }

//     if(nums[i]){
//          i++
//      } 
//     j++
//   } 
//   return nums
    let i=0
    let j=0
    while(j<nums.length){
        if(!nums[i] && !nums[j]){
            j++
        }
        else if(!nums[i] && nums[j]){
            nums[i] = nums[j]
            nums[j] = 0
            i++
            j++
        }
        else{
            i++
            j++
        }
    }
    return nums
};
