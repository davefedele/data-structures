var BinarySearchTree = function(value){
  // Storage data structure
  // Object with left and right
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left;
  obj.right;
  return obj;
};

BinarySearchTree.prototype = {};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value !== value){
    if (value > this.value) {
      if( this.right === undefined) {
        var newNode = BinarySearchTree(value);
        this.right = newNode;
      }
      else {
        this.right.insert(value);
      }
    }
    else {
      if (this.left === undefined) {
        var newNode = BinarySearchTree(value);
        this.left = newNode;
      }
      else {
        this.left.insert(value);
      }
    }
  } 
};

BinarySearchTree.prototype.contains = function(value) {
/* Contains: iterate through tree and return boolean
*/
  if (this.value === value) {
    return true;
  }
  else {
    if (value > this.value) {
      if (this.right) {
        if (this.right.contains(value) === true) {
          return true;
        }
      }
    }
    else {
      if (this.left) {
        if (this.left.contains(value) === true) {
          return true;
        }
      }
    }
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
/* depthfirstlog: iterate through values from top down and execute callback.
*/
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
