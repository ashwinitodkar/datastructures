/**
 * find sum exist in array elements
 */
var arr = [1,2,3,4];
var sum = 8;
var dict = {};
function findSum(arr, sum){
    for(var i = 0; i< arr.length; i++){
        if(dict[arr[i]]){
            return true;
        }
        dict[sum-arr[i]] = 1;
    }
    return false;
}
findSum(arr,sum);

/**
 * find multiplication exist in array elements
 */
var arr = [1,2,3,4];
var mult = 8;
var dict = {};
function findMult(arr, mult){
    for(var i = 0; i< arr.length; i++){
        if(dict[arr[i]]){
            return true;
        }
        dict[mult/arr[i]] = 1;
    }
    return false;
}
findMult(arr,mult);

/**
 * read file line by line
 */
function processAsyncFile(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);
     
    rl.on('line', function (line) {
        console.log(line.split(' '));
    });
    
    rl.on('close', function (line) {
        console.log('done reading file.');
    });
}
processAsyncFile('file.txt');
console.log('++++++++++++');

function readSyncFile(inputFile) {
    var fs = require('fs');
    var data = fs.readFileSync('file.txt', 'utf8');
    console.log(data.split('\n'));
}
readSyncFile('file.txt');

 /***================================file based===============================================***/


 /***================================array problems===============================================***/


 function findLeasrNumberForASum(n){    
    if(n <= 0)
     return 0;
 
    var sqrt = parseInt(Math.sqrt(n));
    
/*    if(sqrt * sqrt == n){
       return 1;
    }*/
   
    var min = n;
    for(var i = 1; i<= sqrt; i++){
        min = Math.min(min, 1 + findLeasrNumberForASum(n - i * i));
    }
    
    return min;
 }
 console.log(findLeasrNumberForASum(15));

/**
 * DP
 */

 var memo = {};
function findLeastNumberForASum(n){    
   memo["1"] = 1;
   memo["2"] = 2;
   memo["3"] = 3;
   var res = 0;

   for(var i = 4; i <=n ; i++){
    var min = i;
    var sqrt = Math.sqrt(i);
    for(var j = 1; j<= sqrt; j++){
        res = Math.min(min, memo[n - j * j]+1)
    }
    memo[i] = res;
   }
   return memo[n];
 }
 console.log(findLeastNumberForASum(12));




 /***================================substring problems===============================================***/

 function findNumberOfWordsInString(str, c) {
    var resultMap = c.reduce((acc, val)=>{
       acc[val] = 0	;
        return acc;
      }, {});

    for(var i=0; i < str.length; i++){
       for(var j = 0; j< str.length -i; i++){
           var next = str.substr(j, i+1);
           console.log('next:', next);
           if(resultMap[next] == next){
               resultMap[next] = resultMap[next]++;
           }
       }
    }
    return resultMap;
}
var c = ["aca","cat","hello", "world"];
findNumberOfWordsInString("acacabcatghhellomvnsdb", c);



/**
 * The input is a list of names in random order. We need a function that chains elements of the list in such a way that the last character of an name is the same as the first one of the next name.

For instance:

Input: [“Raymond”, “Nora”, “Daniel”, “Louie”, “Peter”, “Esteban”]
Output: [“Peter”, “Raymond”, “Daniel”, “Louie”, “Esteban”, “Nora”]
There should be only one solution, so the first element is unique.
 */

function  printSequence(arr) {
    var result = [];
    var firstMap = arr.reduce((acc, val)=>{
        acc[val[0].toLowerCase()] = val;
        return acc;
    }, {});

    var lastMap = arr.reduce((acc, val)=>{
        acc[val[val.length-1].toUpperCase()] = val;
        return acc;
    }, {});

    debugger;
    //pivot
    for(var key in firstMap){
        if(!lastMap[key.toUpperCase()]){
            result.push(firstMap[key]);
        }          
    }
    
    while(result.length < arr.length){
        var last = result[result.length-1];
        if(firstMap[last[last.length - 1]]){
            result.push(firstMap[last[last.length -1]]);
        }
    }

    return result;
}

console.log(printSequence(['Raymond', 'Nora', 'Daniel', 'Louie', 'Peter', 'Esteban']));

 /***================================anagram problems===============================================***/

 /***================================overlap problems===============================================***/
 //2st solution
 //arr.reduce((a,b)=> Math.min(a,b))

var input = 
[{checkin : 1, checkout: 4}, 
{checkin : 2, checkout: 5}, 
{checkin : 4, checkout: 6}, 
{checkin : 5, checkout: 9}, 
{checkin : 5, checkout: 12},
{checkin : 10, checkout: 12}]; 
 
var timings = input.reduce((acc,obj) => {
    acc.checkin.push(obj.checkin);
    acc.checkout.push(obj.checkout);
    return acc;
}, {checkin: [],checkout: []});

timings.checkin.sort((a,b) => a > b ? 1:0);
timings.checkout.sort((a,b) => a > b ? 1:0);
var count = 1;
var max = 0;
var day = timings.checkin[0];

for(var i =1, j=0; i < timings.checkin.length ;){
    if(timings.checkin[i] <= timings.checkout[j]){
        count++;
        if(count > max){
            day = timings.checkin[i];
            max = count;
        } 
        i++;
    }else{
        count--;
    }
}
console.log('max:', max);
console.log('day:', day);

/***================================stack problems===============================================***/


/***================================searching problems===============================================***/


/***================================polygon===============================================***/


 /***================================tree problems===============================================***/

 
 /***================================graph problems===============================================***/
function delatEncode(arr) {
    var delta = -128;
    var encoding = [];
    var state = arr[0];
    encoding.push(state);

    for(var i =1 ;i < arr.length; i++){
        var diff = Math.abs(arr[i]-state);
        if(Math.abs(diff) > 127)
            encoding.push(delta);
        encoding.push(arr[i]-state);
        state = arr[i];
    }
    return encoding;
}


 var arr = ["25626", "25757", "24367", "24267", "16", "100", "2", "7277"];
 console.log(delatEncode(arr));





 var output = {};
for(var i = 0 ; i < input.length; i++){
    var match = input[i].replace(' ', '').split('').sort().join('');
   debugger
   if(!output[match]){
      output[match] = input[i];
   }else{
       output[match] = output[match] + ',' + input[i];
       output[match] = output[match].split(',').sort(); 
   }
}; 
for(var i = 0; i< Object.keys(output).length(); i++){
  console.log(output[i]);  
};



function findPolygonType(a,b,c,d){
  if(a == c && c == b && b == d){
     return 1;
  }
  if(a <=0 || b <=0 || c <=0 || d <= 0){
    return 3;
  }
  if(a == c || b == d){
     return 2;
  }
  return 3;
}

var c = {s:0,r:0,o:0};

for(var i=0; i<m.length; i++){
  if(findPolygonType(m[i][0], m[i][1], m[i][2], m[i][3]) == 1){
    c['s'] = c['s'] + 1;
  }
  if(findPolygonType(m[i][0], m[i][1], m[i][2], m[i][3])) == 2){
    c['r'] = c['r'] + 1;
  }
 if(findPolygonType(m[i][0], m[i][1], m[i][2], m[i][3])) == 3){
    c['o'] = c['o'] + 1;
  }
}


var userA = [ 2, 3, 1 ];
var userB = [ 2, 5, 3 ];
var userC = [ 7, 3, 1 ];
var mp = {}, commonIds = [];
for(var i =0; i< userA.length; i++){
    if(!mp[userA[i]]){
        mp[userA[i]] = 1;
    }
}

for(var i =0; i< userB.length; i++){
    if(mp[userB[i]]){
        mp[userB[i]] += 1;
    }
}


for(var i =0; i< userC.length; i++){
    if(mp[userC[i]]){
        mp[userC[i]] += 1;
        if(mp[userC[i]] == userA.length){
            commonIds.push(userC[i]);
        }
    } 
}


var words = "breakfast beach citycenter location metro view staff price";
var reviews = [
    {id:1, sentense: "This hotel has a nice view of the citycenter. The location is perfect."},
    {id:2, sentense:"The breakfast is ok. Regarding the location, it is quite far from citycenter but price is cheap so it is worth."}
];
var m = 2;
words = words.split(' ');
var dict = {}, hotels = {};
for(var i =0 ; i< words.length; i++){
   dict[words[i]] = 1; 
}

for(var i =0 ; i< words.length; i++){
   dict[words[i]] = 1; 
}

// number of reviews
for(var j=0; j<m; j++){
    if(!hotels[reviews[j].id]){
        hotels[reviews[j].id] = hotels[reviews[j].id] || 0;
    }
    
    var c = reviews[j].sentense.replace(/[$,.!?]/g, "").toLowerCase().split(' ');
    for(var k = 0 ; k< c.length; k++){
        if(dict[c[k]]){
            hotels[reviews[j].id] += 1;
        }
    }
}   
Object.values(hotels).sort((a,b)=>a < b ? true: false)

var arr = [1,2,3,4];

var sum = 8;
var dict = {};
function findSum(arr, sum){
    for(var i = 0; i< arr.length; i++){
        if(dict[arr[i]]){
            return true;
        }
        dict[sum-arr[i]] = 1;
    }
    return false;
}
findSum(arr,sum);

var arr = [1,2,3,4];

var mult = 8;
var dict = {};
function findMult(arr, mult){
    for(var i = 0; i< arr.length; i++){
        if(dict[arr[i]]){
            return true;
        }
        dict[mult/arr[i]] = 1;
    }
    return false;
}
findMult(arr,mult);

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
