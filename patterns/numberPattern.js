/** print below pattern	
   1
  121
 12321
1234321
 12321
  121
   1
 * 
 * @param {*} n 
 */
function pattern(n){
	var str = '';
	for(var i = 1; i <= n; i++){
  	for(var j = 1; j <= (n-i); j++){
    	str += ' ';
    }
    
    for(var k = 1; k <= i; k++){
    	str += k;
    }
    for(var l = i - 1 ; l >= 1; l--){
    	str += l;
    }
    
    str += '\n';
  }
  
  for(var i = 1; i <= n - 1 ; i++){
  	for(var j = 1; j <= i ; j++){
    	str += ' ';
    }
    
    for(var k = 1; k <= n - i; k++){
    	str += k;
    }
    
    for(var l = n - i - 1 ; l >= 1; l--){
    	str += l;
    }
    
    str += '\n';
  }
  console.log(str);
}

pattern(5);



/** print below pattern	
   
---------stair case start------
*
**
***
****
----------stair case end-----

 * 
 * @param {*} n 
 */
function leftStairCasePattern(n){
	var str = '';
	for(var i = 1; i <= n; i++){
  
    /*for(var j = 1; j <= (n-i); j++){
    	str += ' ';
    }*/
    for(var j = 1; j <= i; j++){
    	str += '*';
    }
    
    str += '\n';
  }
  console.log(str);
}

leftStairCasePattern(3);

/**
 * 
-------stair case start-------
    *
   **
  ***
 ****
*****
-------stair case end-------
 * @param {*} n 
 */
function rightStairCasePattern(n){
	var str = '';
	for(var i = 1; i <= n; i++){
  
    for(var j = 1; j <= (n-i); j++){
    	str += ' ';
    }
   
    for(var k = 1; k <= i; k++){
    	str += '*';
    }
    
    str += '\n';
  }
  console.log(str);
}

rightStairCasePattern(3);


