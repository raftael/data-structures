// Node class
class Node
{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree class
class BinarySearchTree
{
    constructor(){
        this.root = null;
    }

    insert(val) {
        var newNode = new Node(val);
        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode){
        if (newNode.val < node.val){
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);            
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);            
        }
    }

}

var BST = new BinarySearchTree();

BST.insert(1);
BST.insert(null);
BST.insert(2);
BST.insert(3);