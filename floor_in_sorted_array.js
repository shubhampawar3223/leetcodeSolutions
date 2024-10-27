//URL:https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1?track=DSASP-Searching&amp%253BbatchId=154
//Given a sorted array arr[] of size n without duplicates, and given a value x. Floor of x is defined as the largest element k in arr[] such that k is smaller than or equal to x. Find the index of k(0-based indexing).

findFloor(arr, n, x) {
      
        
        if(x<arr[0]){
            return -1
        }
        
        let ans = n
        let first = 0
        let last = n-1
        
        while( first <= last){
            
            let mid = Math.floor((first+last)/2)
            
            if(arr[mid] <= x){
                ans = mid
                first =mid +1
            }
            else{
                last = mid-1
                
            }
        }
        
        return ans
    }
}
