var BinarySearchTree = function(value){
  // Storage data structure
  // Object with left and right
  var obj = Object.create(BinarySearchTree.prototype);
  obj.storage = value;
  obj.left;
  obj.right;
  return obj;
};

BinarySearchTree.prototype = {};

BinarySearchTree.prototype.insert = function(value) {

};

BinarySearchTree.prototype.contains = function(value) {
  
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  
};
// Insert: compare value to current node value
// If less than node value, new value placed as left child.
// As right child if greater than.

/* Contains: iterate through tree and return boolean
*/

/* depthfirstlog: iterate through values from top down and execute callback.
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
