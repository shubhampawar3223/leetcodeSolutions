//url: https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1
//Note: use the upper and floor of the element

class Solution {
    getFloorAndCeil(x, arr) {
        // code here
         
     arr.sort((a,b)=>a-b)
        let floor = arr.length
        let ceil = -1
        let first = 0
        let last = arr.length-1
        if(x < arr[0]){
            return [-1,arr[0]]
        }
        
        while( first <= last){
            
            let mid = Math.floor((first+last)/2)
            
            if(arr[mid] == x){
                return [arr[mid],arr[mid]]
            }
             else if(arr[mid] > x){
                ceil = arr[mid] 
                last = mid -1
            }
           
            else{
                floor = arr[mid]
                first = mid+1
                
            }
        }
        
        return [floor, ceil]
    }
}
