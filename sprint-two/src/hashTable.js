var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(i);
  value = value || {};
  value[k] = v;

  this._storage.set(i, value);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  return  temp === undefined ? null : temp[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  delete temp[k];
  if (Object.keys(temp).length === 0 ) {
    temp = undefined;
  }
  this._storage.set(i, temp);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
