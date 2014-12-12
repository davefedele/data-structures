var Queue = function() {
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.count++;
  this.storage[this.count] = value;
};
    
Queue.prototype.dequeue = function(){
  var temp = this.storage[1];
  delete this.storage[1];
  var buffer = {};
  for(var key in this.storage){
    buffer[key-1] = this.storage[key];
  }
  this.storage = buffer;

  if(this.count > 0){
    this.count--;
  }
  return temp;
};
    
Queue.prototype.size = function(){
  return this.count;
};

