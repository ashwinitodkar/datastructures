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

function InfixToPostfix(infixStr){
    var postFixStr = '';
    var s = new stack();

    for(var i = 0; i < infixStr.length; i++){
        if(isOperand(infixStr[i])){
            postFixStr += infixStr[i];
        }
        else{ 
            //var c = getOperatorPrecedence(infixStr[i]);
            while(!s.isEmpty() && getOperatorPrecedence(infixStr[i]) <= getOperatorPrecedence(s.top)){
                postFixStr += s.pop();
            }
            s.push(infixStr[i]);
        }
    }

    while(!s.isEmpty()){
        postFixStr += infixStr.pop();
    }
}

function isOperand(operand){
    return !isNaN(parseInt(operand));
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

