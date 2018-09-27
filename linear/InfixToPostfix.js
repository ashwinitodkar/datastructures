function stack(){
    this.data = [];
    this.pop = function pop(){
        return this.data.pop();
    }
    this.push = function push(element){
        return this.data.push(element);
    }
    this.top = function top(){
        return this.data[this.data.length - 1]
    }
    this.isEmpty = function isEmpty(){
        return this.data.length; 
    }
}


function getOperatorPrecedence(operator){
    switch(operator){
        case "^": 
            return 3;
        case "*":
            return 2;
        case "/":
            return 2;
        case "+":
            return 1;
        case "-":
            return 1;
        default: return 0;
    }
}

function InfixToPostfix(infixStr){
    var postFixStr = '';
    var s = new stack();

    for(var i = 0; i < infixStr.length; i++){
        if(isOperand(infixStr[i])){
            postFixStr += infixStr[i];
        }
        else{ 
            console.log('found operator', infixStr[i]);
            console.log('getOperatorPrecedence(s.top)', getOperatorPrecedence(s.top()), s.top());
            console.log('getOperatorPrecedence(infixStr[i])', getOperatorPrecedence(infixStr[i]), infixStr[i]);
            console.log('s.isEmpty()', s.isEmpty());
            while(s.isEmpty() && getOperatorPrecedence(infixStr[i]) <= getOperatorPrecedence(s.top())){
                console.log('match');
                postFixStr += s.pop();                  
            }
            s.push(infixStr[i]);
        }
    }

    while(s.isEmpty()){
        postFixStr += s.pop();
    }
    console.log('postFixStr', postFixStr);
    console.log('stack', s.data);
}

function isOperand(operand){
    return !isNaN(parseInt(operand));
}

var dd = InfixToPostfix("1+2*4-1");
console.log(dd);