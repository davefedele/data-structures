var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail.next.previous = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;
  };

  list.removeTail = function(){
    //if there is an empty list
    if (list.tail === null){
    } 
    //list 3
    else if (list.tail.previous !== undefined ) {
      //set list.tail = tail.previous
      // list.tail = list.tail.previous;
    }
    //all other lists
  

  };

  list.addToHead = function(value){
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head
    } else {
      var oldHead = list.head;
      list.head = Node(value);
      list.head.next = oldHead;
      oldHead.previous = list.head;
    }

  };

  list.contains = function(target){
    var searchNode = list.head;
    while (searchNode !== null) {
      if (searchNode.value === target) {
        return true;
      } else {
        searchNode = searchNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */