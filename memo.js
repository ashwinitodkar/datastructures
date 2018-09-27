
 var memo = {};
function findLeastNumberForASum(n){    
   memo["1"] = 1;
   var res = 0;

   for(var i = 2; i <=n ; i++){
    var min = i;
    var sqrt = Math.sqrt(i);
    for(var j = 1; j<= sqrt; j++){ //5
        //1  (4, (5-1)+1) = 4
        //2  (4, (5-4)+1) = 2
        res = Math.min(min, memo[n - j * j]+1)
        //1,2
    }
    //memo[4] = 2;
    memo[i] = res;
   }
   return memo[n];
 }
 console.log(findLeastNumberForASum(12));

