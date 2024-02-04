/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  let exception  = 0
  let isSorted = true 
  let currMax = nums[0]
  let a 
  let i= 1 
  for(i=1;i<nums.length;i++){
      
      if(nums[i]>= currMax){
          currMax = nums[i]
      }
      else{
          exception++
          currMax = nums[i]          
      }    

    if(exception >1){
          isSorted = false
          return isSorted
      }
  }

  if(exception){
     return nums[0] >= nums[nums.length-1]
  }
  return true
};
