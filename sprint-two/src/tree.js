var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = Tree(value);
  newNode.parent = this;
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
  //if there is a parent do it
  if (this.parent !== null){
    //find the parents = use parent property
    var parent = this.parent;
    //remove the current node from its parents children
    //remove this from parent's children
    //get index of child in parents children arr
    var location;
    for (var i=0; i<parent.children.length; i++){
      //loop through parent schildren
      //compare value to current node
      //if a match then i is the location in the array
      if (parent.children[i].value === this.value) {
        location = i;
      }
    }
    //remove it
    var child = parent.children.splice(location, 1);
    //set current node's parent property to null
    this.parent = null;
    //return dereferenced node?
    return child[0];
  } else {
    return false;
  }
};

treeMethods.traverse = function(){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
