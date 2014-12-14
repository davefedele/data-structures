var PrefixTree = function() {
  var newTree = Object.create(prefixTreeMethods);
  newTree.letters = {};
  return newTree;
};

var prefixTreeMethods = {};

prefixTreeMethods.addWord = function(word){
  var letter = word[0];
  if ( !this.letters[letter] ) {
    this.letters[letter] = PrefixTree();
  }
  if ( word.length > 1) {
    return this.letters[letter].addWord(word.slice(1));
  } else {
    return true;
  }
};

prefixTreeMethods.findWord = function(){};
prefixTreeMethods.returnPotentialWords = function(){};
prefixTreeMethods.selectWord = function(){};
prefixTreeMethods.removeWord = function(){};