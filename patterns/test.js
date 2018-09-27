function getNumber(num){
    var result =0;
    for(var i =0 ; i< num.length; i++){
          debugger;
          result = result * 10 + num.charCodeAt(i) - 48;
  
    }
    return result;
}

function getString(num){
    var result = ''
    while(num >= 1){
        var digit = num%10;
       result =  digit.toFixed(0) + result; 
       num = num/10;
    }
    return result;  
}

    function anagramCount(s){
        var count = 0;
        var result = {};
        for(var i = 0 ; i < s.length ; i++ ){
            for(var j = 0 ; j < s.length - i; j++){
                debugger;
                var next = s.substr(j,i + 1).split('').sort().join('');
                if(result[next]){
                    var temp = result[next] || 1;
                    count += temp
                }
                if(result[next]){
                    result[next]++;
                }else{
                    result[next] = 1;
                }
            }
        }
        return count;
    }

    anagramCount("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbcaadacaacbdddcdbddaddabcccdaaadcadcbddadababdaaabcccdcdaacadcababbabbdbacabbdcbbbbbddacdbbcdddbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacccbbcaaccbaacbbbcaaaababcacbbababbaacabccccaaaacbcababcbaaaaaacbacbccabcabbaaacabccbabccabbabcbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbcbacaabacacaaacbbcaabccacbaaaabbcaaaaaaaccaccabcacabbbbabbbbacaaccbabbccccaacccccabcabaacaabbcbacacbaacdbaadbabbdbbaabddbdabbbccbdaccdbbdacdcabdbacbcadbbbbacbdabddcaccbbacbcadcdcabaabdbaacdccbbabbbcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaababacaccaaabaaaaaaaccaaaccaaccabcbbbabccbbabababccaabcccacccaaabaccbccccbaacbcaacbcaaaaaaabacbcbbbccbcbabbaccacbacaacbbaccbcbccbaaaabbbcaccaacaccbabcbabccacbaabbaaaabbbcbbbbbaababacacbcaabbcbcbcabbaba", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbcaadacaacbdddcdbddaddabcccdaaadcadcbddadababdaaabcccdcdaacadcababbabbdbacabbdcbbbbbddacdbbcdddbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacccbbcaaccbaacbbbcaaaababcacbbababbaacabccccaaaacbcababcbaaaaaacbacbccabcabbaaacabccbabccabbabcbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbcbacaabacacaaacbbcaabccacbaaaabbcaaaaaaaccaccabcacabbbbabbbbacaaccbabbccccaacccccabcabaacaabbcbacacbaacdbaadbabbdbbaabddbdabbbccbdaccdbbdacdcabdbacbcadbbbbacbdabddcaccbbacbcadcdcabaabdbaacdccbbabbbcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaababacaccaaabaaaaaaaccaaaccaaccabcbbbabccbbabababccaabcccacccaaabaccbccccbaacbcaacbcaaaaaaabacbcbbbccbcbabbaccacbacaacbbaccbcbccbaaaabbbcaccaacaccbabcbabccacbaabbaaaabbbcbbbbbaababacacbcaabbcbcbcabbaba");
    

    function getDelta(array) {
        let diffs = [];
        for (let i = 1, N = array.length -1; i <= N; ++i) {
          diffs.push(array[i] - array[i - 1]);
        } 
        return diffs;
    }
      
      function encode(array) {
        if (array.length === 0) {
          return array;
        }
        let encoding = [];
        let deltas = getDelta(array);
      
        for (let delta of deltas) {
          if (127 < delta || delta < -127) {
            encoding.push(-128);
          }
          encoding.push(delta);
        }
        encoding.unshift(array[0]);
        return encoding;
      }
      
      
      console.log(encode('25626'.split(' ')).join(' '));
      console.log(encode('25626 25757 24367 24267 16 100 2 7277'.split(' ')).join(' '));




      function getPairOfSum(arr, sum){
        var compliments = {};
        for(var i = 0; i < arr.length; i++ ){
            debugger;
            if(compliments[arr[i]]){
              return true;
            }
            compliments[sum - arr[i]] = arr[i];
         
        }
        return false;
      }

      getPairOfSum([1,2,3,4], 6)



//check given data froms sqaure/rectangle/other polygon
function shape(a,b,c,d){
    if(a == b == c == d){
        return 'SQAURE';
    }else if(a == c && d == b){
        return 'RECTANGLE';
    }
    return 'POLYGON';
}
  
function getShapes(arr){
    return shape(arr[0],arr[1], arr[2], arr[3]);
}

function isArraySorted(arr){
    for(var i = 0; i< arr.length ; i++){
    	if(arr[i] > arr[i+1]){
           return false;
        }
    }
    return true;
}

isArraySorted([1,2,3,4,5,0])


function isBalancedParanthesis(s){

    var opening = ['{', '(', '['], closing = ['}', ')', ']'], arr = [];
    for(var i = 0 ; i< s.length; i++){
        if(opening.indexOf(s[i]) >= 0){
            arr.push(s[i]);
        }
        
        if(closing.indexOf(s[i]) >=0 && closing.indexOf(s[i]) != opening.indexOf(arr.pop())){
            return false;
        }
    }
    if(arr.length > 0){
        return false;
    }

    return true;
}



function leftRotateByOne(arr){
    var temp = arr[0];
    for(var i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
    return arr;
}

function leftRotate(a, d){
    for(var i = 1; i<= d; i++){
        debugger
        a = leftRotateByOne(a);
    }
    return a;
}
leftRotate([1,2,3], 2);

function rightRotateByOne(arr){
    var n = arr.length;
    var temp = arr[n-1];
    for(var i = n - 1; i > 0 ; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
}

/*Fuction to get gcd of a and b*/
function gcd(a,b)
{
    //var temp;
    while(b > 0){
        temp = b;
        b = a%temp;
        a = temp;
    }

    return a;
    /*if(b == 0)
    return a;
     
    else
    return gcd(b, a%b);*/
}


function sherlockAndAnagrams(str) {
    let count=0;
    let resultMap = {};
    for(let i=0; i < str.length; i++)
    {
        for(let j=0;j< str.length-i;j++){
            let next = str.substr(j,i+1);
            
            //sort the string to compare
            let sortedString = [...next].sort().join("");
            debugger
            if(resultMap[sortedString]){
                //add all the occurances
                let occured = resultMap[sortedString] || 1;
                count = count + occured;
            }
            
            if(resultMap[sortedString]){
                resultMap[sortedString]++;
            }
            else{
                resultMap[sortedString] = 1;
            }
        }
    }
    return count;
 
 }

 function findNumberOfWordsInString(str, c) {
     var resultMap = c.reduce((acc, val)=>{
        acc[val] = 0    ;
         return acc;
       }, {});
console.log('resultmap', resultMap);
     for(var i=0; i < str.length ; i++){
        for(var j = 0; j< str.length - i  ; j++){
            var next = str.substr(j, i+1);
            console.log('next:', next);
            console.log('resultMap:', resultMap[next]);
            if(resultMap[next] != null){
              console.log('match found');  
              resultMap[next]++;
            }
        }
     }
     return resultMap;
 }
 var c = ["aca","cat","hello", "world"];
 console.log(findNumberOfWordsInString("acacabcatghhellomvnsdb", c))

 function sherlockAndAnagrams(str) {
    let count=0;
    let resultMap = {};
    for(let i=0; i < str.length; i++)
    {
        for(let j=0;j< str.length-i;j++){
            let next = str.substr(j,i+1);
            
            //sort the string to compare
            let sortedString = [...next].sort().join("");
            debugger
            if(resultMap[sortedString]){
                //add all the occurances
                let occured = resultMap[sortedString] || 1;
                count = count + occured;
            }
            
            if(resultMap[sortedString]){
                resultMap[sortedString]++;
            }
            else{
                resultMap[sortedString] = 1;
            }
        }
    }
    return count;

 }
 
 class user{
     constructor(username, email, password){
         this.username = username;
         this.email = email;
         this.password = password;
     }
     register(){
         console.log(this.username, 'is registered successfully!');
     }
 }
 
 var c =  new User('Ashwini', 'ash@gmail.com', 'test')



 // Complete the howManyAgentsToAdd function below.
function howManyAgentsToAdd(noOfCurrentAgents, callsTimes) {
    var numberOfConcurrentCall = 0;
    for(var i = 0; i < callsTimes.length - 1; i++){
        var starta = callsTimes[i][0], enda = callsTimes[i][1];
        for(var j = i + 1; i < callsTimes.length - 1; i++){
        }
         if(callsTimes[i][0] <= callsTimes[i+1][1] && callsTimes[i][1] >= callsTimes[i+1][0]){
             numberOfConcurrentCall +=1;
         }
     }
    
    if(numberOfConcurrentCall > noOfCurrentAgents)
        return numberOfConcurrentCall - noOfCurrentAgents;
    return 0;
}



// Complete the howManyAgentsToAdd function below.
function howManyAgentsToAdd(noOfCurrentAgents, callsTimes) {
    var numberOfConcurrentCall = 0;
    for(var i = 0; i < callsTimes.length - 1; i++){
         if(callsTimes[i][0] <= callsTimes[i+1][1] && callsTimes[i][1] >= callsTimes[i+1][0]){
             numberOfConcurrentCall +=1;
         }
     }
    
    if(numberOfConcurrentCall > noOfCurrentAgents)
        return numberOfConcurrentCall - noOfCurrentAgents;
    return 0;
}



function sherlockAndAnagrams(str) {
    let count=0;
    let resultMap = {};
    for(let i=0; i < str.length; i++)
    {
        for(let j=0;j< str.length-i;j++){
            let next = str.substr(j,i+1);
            
            //sort the string to compare
            let sortedString = [...next].sort().join("");
            debugger
            if(resultMap[sortedString]){
                //add all the occurances
                let occured = resultMap[sortedString] || 1;
                count = count + occured;
            }
            
            if(resultMap[sortedString]){
                resultMap[sortedString]++;
            }
            else{
                resultMap[sortedString] = 1;
            }
        }
    }
    return count;
 
 }
 
 class user{
     constructor(username, email, password){
         this.username = username;
         this.email = email;
         this.password = password;
     }
     register(){
         console.log(this.username, 'is registered successfully!');
     }
 }
 
 var c =  new User('Ashwini', 'ash@gmail.com', 'test')