/**
 * Method to get nth Fibonacci number
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
 * Fibonacci numbers are the numbers in the above integer sequence, every number after 
 * the first two is the sum of the two preceding ones
 * @param {*} n 
 */
function getNthFibNumber(n){
   //T0 = 0
   //T1 = 1
   //Tn = Tn-1 + Tn-2          if n > 1
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    console.log(n);   
    return getNthFibNumber(n-1) + getNthFibNumber(n-2);
}

//DP
var memoized = {}
memoized["1"] = 1; 
memoized["2"] = 1; 
function getNthFibNumber(n){
   var result = 0;
    if(memoized[n]){
        return memoized[n];     
    }
    //T0 = 0
    //T1 = 1
    //Tn = Tn-1 + Tn-2          if n > 1
     if(n == 1 || n ==2 ){
         result = 1;
     }else{
        result = getNthFibNumber(n-1) + getNthFibNumber(n-2);    
        memoized[n] = result;       
     }
     return result;   
 }
 getNthFibNumber(6);
/**
 * Method to return Fibonacci series with linear (without recursion)
 * @param {*} n 
 */
function getFibonacciSeries(n){
    var n1 = 0, n2 = 1, a = [], n3;
    a.push(n1);
    a.push(n2);
    for(i=2; i < n; i++){
        n3 = n1 + n2;
        a.push(n3);
        n1 = n2;
        n2 = n3;
    }
    console.log(a);
    return a;
}

/**
 * Method to return Fibonacci series with recursion
 * @param {*} n = number till u want to print series 
 * @param {*} n1 = 0 
 * @param {*} n2 = 1
 * note - n1 and n2 you can declare globally - here in javascript we can't create static 
 * variable thats why i have passed it in parameter 
 */
function printFibonacciSeries(n, n1, n2){
    var n3;
    if(n > 0){
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        console.log(n3);
        printFibonacciSeries(n-1, n1, n2);
    }
}