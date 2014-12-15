var PrefixTree = function() {
  var newTree = Object.create(prefixTreeMethods);
  newTree.letters = {};
  return newTree;
};

var prefixTreeMethods = {};

prefixTreeMethods.addWord = function(word){
  var key = word[0];
  this.letters[key] || (this.letters[key] = PrefixTree());
  return word.length > 1 ?
    this.letters[key].addWord(word.slice(1)) :
    true;
};

prefixTreeMethods.findWord = function(word){
  var key = word[0];
  return this.letters[key] ?
    (word.length > 1 ? this.letters[key].findWord(word.slice(1)) : true) :
    false;
};

prefixTreeMethods.returnPotentialWords = function(string){
  

};
prefixTreeMethods.selectWord = function(){};
prefixTreeMethods.removeWord = function(){};