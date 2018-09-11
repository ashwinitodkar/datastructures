/*//define a node
function Node(data){
    this.data = data;
}

function Tree(data){
    var node = new Node(data);
    this._root = node;
}

Tree.traverseDF = function(callback){   
    (function recurse(currentNode){
        for(var i = 0, length = currentNode.children.length; i < length; i++){
            recurse(currentNode.children[i]);
        }
        callback(currentNode);   
    })(this._root);
}

Tree.prototype.preOrderTraversal = function(root){
    console.log(root.data);
    if(root.left){
        this.preOrderTraversal(root.left);
    }
    if(root.right){
        this.preOrderTraversal(root.right);
    }   
}
//define a tree


// add DFS - in order, pre order, post order

// add BFS

*/

class BST {
    constructor() {
        this.root = null;
    }

    insertNode(val) {
        var node = {
            data: val,
            left: null,
            right: null
        };

        var currentNode;
        if (this.root == null) {
            this.root = node;
        } else {
            currentNode = this.root;
            while (currentNode) {
                if (val < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (val > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
                    break;
                }
            }
        }
    }
}

BST.prototype.preOrderTraversal = function(root){
    console.log(root.data);
    if(root.left){
        this.preOrderTraversal(root.left);
    }
    if(root.right){
        this.preOrderTraversal(root.right);
    }
}

BST.prototype.postOrderTraversal = function(root){
    if(root.left){
        this.postOrderTraversal(root.left);
    }
    if(root.right){
        this.postOrderTraversal(root.right);
    }
    console.log(root.data);    
}


BST.prototype.BFSTraversal = function(root){
    var temp , q = new queue();
    debugger
    q.enqueue(root);
    while(q.data.length){
        temp = q.dequeue();
        console.log(temp.data);
        if(temp.left){
            q.enqueue(temp.left)
        }
        if(temp.right){
            q.enqueue(temp.right);
        }
    }
}


BST.prototype.inOrderTraversal = function(root){
    if(root.left){
        this.inOrderTraversal(root.left);
    }
    console.log(root.data);        
    if(root.right){
        this.inOrderTraversal(root.right);
    }
}

var bst = new BST();
bst.insertNode(10);
bst.insertNode(2);
bst.insertNode(3);
bst.insertNode(5);
bst.insertNode(1);

bst.insertNode(13);
bst.insertNode(11);
bst.insertNode(12);

function queue(){
    this.data = [];
    this.enqueue = function enqueue(element){
        return this.data.push(element)
    }
    this.dequeue = function dequeue(element){
        return this.data.shift();
    }
    this.front = function front(){
        return this.data[0];
    }
    this.back = function back(){
        return this.data[this.data.length - 1];
    }
}

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
}