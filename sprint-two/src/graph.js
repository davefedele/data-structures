
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
  _.each(this.storage[node], function(val, key) {
    delete this.storage[val][key];
  })
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.storage[fromNode][toNode] === true;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



