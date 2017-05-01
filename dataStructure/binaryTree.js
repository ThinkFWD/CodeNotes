// +++++++++++++++++++++++++++++++++++++++
// ++++ Implementation of Binary Tree ++++
// +++++++++++++++++++++++++++++++++++++++

const node = function (data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

node.prototype.show = function () {
  return this.data;
}

const binaryTree = function () {
  this.root = null;
  this.inOrderArr = [];
  this.preOrderArr = [];
  this.postOrderArr = [];
}

binaryTree.prototype.insert = function (data) {
  
  let dataPoint = new node(data);
  if (this.root === null){
  	this.root = dataPoint;
  } else {
    let current = this.root;
    let parent; 
    while (true){
    	parent = current;
      if (data < current.data){
        current = current.left;
          if(current === null) {
            parent.left = dataPoint;
            break;
          }
      } else {
        current = current.right;
          if(current === null) {
            parent.right = dataPoint;
            break;
          }
      }
    }
  }
}

binaryTree.prototype.inOrder = function (node) {
  if(!(node === null)){
  	this.inOrder(node.left)
  	this.inOrderArr.push(node.show());
  	this.inOrder(node.right)
  }
  return this.inOrderArr;
}

binaryTree.prototype.postOrder = function (node) {
  if(!(node === null)){
  	this.postOrder(node.left)
  	this.postOrder(node.right)
  	this.postOrderArr.push(node.show());
  }
  return this.postOrderArr;
}

binaryTree.prototype.preOrder = function (node) {
  if(!(node === null)){
  	this.preOrderArr.push(node.show());
  	this.preOrder(node.left)
  	this.preOrder(node.right)
  }
  return this.preOrderArr;
}

binaryTree.prototype.getMin = function (){
let node = this.root;
let min = this.root.data || null;
  while(!(node === null)){
    if (node.data < min){
      min = node.data;
	}
	node = node.left;
  }
  return min;
}

binaryTree.prototype.getMax = function (){
  let node = this.root;
  let max = this.root.data || null;
  while(!(node === null)){
    if (node.data > max){
      max = node.data;
	}
	node = node.right;
  }
  return max;

}


// EXAMPLE TEST CASE
var newTree = new binaryTree();
newTree.insert(5);
newTree.insert(7);
newTree.insert(2);
newTree.insert(1);
newTree.insert(13);
newTree.insert(6);
newTree.insert(7);
console.log('Binary Tree', newTree.root)
/*
      5
     / \
    2   7
   /   / \
  1   6   13
          /
         7
*/
console.log('In Order', newTree.inOrder(newTree.root)); 
console.log('Pre Order', newTree.preOrder(newTree.root));  
console.log('Post Order', newTree.postOrder(newTree.root));
console.log('Get Min', newTree.getMin());
console.log('Get Max', newTree.getMax());


