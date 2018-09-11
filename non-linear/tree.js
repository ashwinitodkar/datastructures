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

    // if(node){
    //     inorder(node.left);
    //     console.log(node.value);
    //     inorder(node.right);
    //  }
}

BST.prototype.isBST = function(node){
    if(!node){
        return true;
    }
    if(node.left!= null && node.left.data > node.data){
        return false;
    }
    if(node.right != null && node.right.data < node.data){
        return false;
    }

    if(!this.isBST(node.left) || !this.isBST(node.right)){
        return false;
    }

    return true;
}

BST.prototype.isBalanced = function(node){
    var lh;
    var rh;

    if(!node){
        return 1;
    }

    lh = this.height(node.left);
    rh = this.height(node.right);

    if(Math.abs(lh-rh) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right)){
        return 1;
    }

    return 0;
}

BST.prototype.height = function(node){
    if(!node){
        return 0;
    }

    var leftHeight = this.height(node.left);
    var rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
} 

BST.prototype.printAncestor = function printAncestor(node, target){
    if(!node){
        return false;
    }

    if(node.data  == target){
        return true;
    }

    if(this.printAncestor(node.left, target) || this.printAncestor(node.right, target)){
        console.log(node.data);
        return true;
    }

    return false;
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

