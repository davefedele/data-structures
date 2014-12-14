describe('prefixTree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = PrefixTree();
  });

  it('should have properties named "letters"', function() {
    expect(prefixTree.hasOwnProperty("letters")).to.equal(true);
  });

  it('should have methods named "addWord", "findWord", "returnPotentialWords", "selectWord", and "removeWord"', function() {
    expect(prefixTree.addWord).to.be.a("function");
    expect(prefixTree.findWord).to.be.a("function");
    expect(prefixTree.returnPotentialWords).to.be.a("function");
    expect(prefixTree.removeWord).to.be.a("function");
    expect(prefixTree.selectWord).to.be.a("function");
  });

  it('should be able to add a word.', function() {
    expect(prefixTree.addWord("cat")).to.be.true;
    // expect(prefixTree.letters["c"].letters["a"].letters["t"]).not.to.be.null;
    expect(prefixTree.addWord("car")).to.be.true;
    // expect(prefixTree.letters["c"].letters["a"].letters["r"]).not.to.be.null;
    expect(prefixTree.addWord("cash")).to.be.true;
    // expect(prefixTree.letters["c"].letters["a"].letters["s"]).letters["h"]).not.to.be.null;
  debugger;
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