/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   s= s.trim()
   let arr =s.split(/\s+/)    

   for(let i=0;i<arr.length;i++){
       let temp = arr[i].split('')
       arr[i] =temp.reverse().join('') 
   }
   arr = arr.join(' ')
   return arr 

};
