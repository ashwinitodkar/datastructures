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