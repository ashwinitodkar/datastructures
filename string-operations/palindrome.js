/**
 * Method to check given string palindrome or not
 * A palindrome is a word, number, or other sequence of characters which 
 * reads the same backward as forward e.g. madam or racecar.
 * @param {*} str 
 */
function isPalindrome(str){
    var i=0, j = str.length - 1;
    while(i<j){
        if(str[i] != str[j]){
            return 0;
        }
        i++; 
        j--;
    }
    return(1);    
}