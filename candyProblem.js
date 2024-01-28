//1431. Kids With the Greatest Number of Candies
var kidsWithCandies = function(candies, extraCandies) {
      let resultArray = []
      for(let i =0;i<candies.length;i++){
          if(candies[i]+extraCandies >= Math.max(...candies)  ){
              resultArray.push(true)
          }
          else{
              resultArray.push(false)     
          }
      }
      return resultArray

};
