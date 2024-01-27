var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
        let ans = []
        
        if(nums.length < 3){
            return ans
        }    
        
        if(nums[0]>0){
            return ans
        }
        
        let hashmap = new Map()
        
        for(let i=0;i<nums.length;i++){
            hashmap.set(nums[i],i)    
        }
        
        for(let i=0;i<nums.length-2;i++){
            if(nums[i] > 0){
                break
            }    
            
            for(let j= i+1; j<nums.length-1;j++){
                let req = -1*(nums[i]+nums[j])
                if(hashmap.has(req) && hashmap.get(req) > j){
                    ans.push([nums[i],nums[j],req])    
                }
                j = hashmap.get(nums[j])
                
            }
            i =  hashmap.get(nums[i])
        }
        return ans
};
