
var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  this.storage[node] = {};
};

Graph.prototype.contains = function(node){
  return node in this.storage;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
  // remove complementary edges
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.storage[fromNode][toNode] === true;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



