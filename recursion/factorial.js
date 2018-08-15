/**
 * Method to get factorial of given number
 * Factorial of a number n is the product of all positive numbers less than equal to n
 * @param {*} n 
 */
function factorial(n){
    if(n == 0){ // value of function at  n = 0 is 1 which is called as base , recursion terminates on reaching base 
        return 1;
    }
    console.log(n);
    return n * factorial(n-1);
}