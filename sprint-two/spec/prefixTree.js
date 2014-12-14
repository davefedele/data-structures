describe('prefixTree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = PrefixTree();
  });

  it('should have properties named "letters"', function() {
    expect(tree.hasOwnProperty("letters")).to.equal(true);
  });

  it('should have methods named "addWord", "findWord", "returnPotentialWords", "selectWord", and "removeWord"', function() {
    expect(tree.addWord).to.be.a("function");
    expect(tree.findWord).to.be.a("function");
    expect(tree.returnPotentialWords).to.be.a("function");
    expect(tree.removeWord).to.be.a("function");
    expect(tree.selectWord).to.be.a("function");
  });

  it('should be able to add a word.', function() {
    prefixTree.addWord("cat");
    expect(prefixTree.letters["c"].letters["a"].letters["t"]).not.to.be.null;
    prefixTree.addWord("car");
    expect(prefixTree.letters["c"].letters["a"].letters["r"]).not.to.be.null;
    prefixTree.addWord("cash");
    expect(prefixTree.letters["c"].letters["a"].letters["s"]).letters["h"]).not.to.be.null;
  });

  it('should be able to find a word.', function() {
    prefixTree.addWord("cat");
    expect(prefixTree.findWord("cat")).to.equal("cat");
    prefixTree.addWord("car");
    expect(prefixTree.findWord("car")).to.equal("car");
    prefixTree.addWord("cash");
    expect(prefixTree.findWord("cash")).to.equal("cash");
  });

  it('should return all potential matches.', function() {
    prefixTree.addWord("cat");
    prefixTree.addWord("car");
    prefixTree.addWord("cash");
    var array = prefixTree.returnPotentialWords("ca");
    expect(array).to.equal(["cat", "car", "cash"]);
  })
})