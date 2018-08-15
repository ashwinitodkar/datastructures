/**
 * Method to find substring from a string
 * @param {*} str - sentence where you are looking for substring 
 * @param {*} substr - substring to be searched.
 * e.g. search("Ashwini", "win")
 */
function search(str, substr){
    for(var i=0; i <= str.length - substr.length + 1; i++){
        for(var j=0; (str[i+j] == substr[j] && j != substr.length); j++){
            console.log(str[i+j]);
            if(j == substr.length - 1){
                console.log('string found at location: ', i);
            }
        }
    }
}
