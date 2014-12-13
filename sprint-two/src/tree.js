var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0, l = this.children.length; i < l; i += 1) {
      if (this.children[i].contains(target) === true) {
        return true;
      }
    }
    return false;
  }
};

treeMethods.removeFromParent = function(){

};

treeMethods.traverse = function(){
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
