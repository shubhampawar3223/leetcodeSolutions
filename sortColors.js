/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

let obj={}

for(let i=0;i<nums.length;i++){
    obj[nums[i]] = (obj[nums[i]] || 0) +1
}

for(let i=0;i<nums.length;i++){
    if(obj[0]){
        nums[i] = 0
        obj[0]--
    }
    else if(obj[1]){
        nums[i] = 1
        obj[1]--
    }
    else{
        nums[i] = 2
        obj[2]--
    }
}
return nums

//     if(nums.length<=1){
//         return nums
//     }

//     mergeSort(nums,0,nums.length-1)
//     console.log(nums)
//     return nums
// };

// function mergeSort(nums,l,r){
//     if(r>l){
//         let m = parseInt((l+r)/2)
//         mergeSort(nums,l,m)
//         mergeSort(nums,m+1,r)
//         merge(nums,l,r,m)
//     }
}

function merge(nums,l,r,m){
    let p = []
    let q = []
    for(let i=0;i<m-l+1;i++){
       p.push(nums[l+i])
    }

    for(let i=0;i<r-m;i++){
       q.push(nums[m+1+i])
    }

    let i=0;
    let j=0;
    let k = l;

    while(i< m-l+1 && j<r-m){
        if(p[i] < q[j]){
            nums[k] = p[i]                        
            i++
        }
        else{
            nums[k] = q[j]
            j++
        }
        k++
    }

    while(i<m-l+1){
        nums[k] = p[i]                        
        i++
        k++    
    }

    while(j<r-m){
        nums[k] = q[j]                        
        j++
        k++    
    }
}
