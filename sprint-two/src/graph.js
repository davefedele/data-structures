
var Graph = function(){
  this.storage = {};
  // edges
  // how to store edges
  // object with key of node name and value of array of edge names
};

Graph.prototype.addNode = function(node){
  this.storage[node] = [];
  // Put node in graph
  // add edges
  // add complementary edge
};

Graph.prototype.contains = function(node){
  return node in this.storage;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
  // remove node from graph
  // remove edges
  // remove complementary edges
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



