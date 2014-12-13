describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(99);
  });

  it('should have methods named "addChild", "contains", "removeFromParent", and "traverse".', function () {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.removeFromParent).to.be.a("function");
    expect(tree.traverse).to.be.a("function");
  });

  it('should have properties named "value" and "parent".', function () {
    expect(tree.hasOwnProperty("value")).to.equal(true);
    expect(tree.hasOwnProperty("parent")).to.equal(true);
    expect(tree.parent).to.be.null;
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  describe('Parent', function () {
    it('should be referenced for all child nodes.', function () {
      tree.addChild(1);
      expect(tree.value).to.equal(tree.children[0].parent.value);
      tree.addChild(2);
      expect(tree.value).to.equal(tree.children[1].parent.value);
      tree.addChild(3);
      expect(tree.value).to.equal(tree.children[2].parent.value);
      tree.children[0].addChild(4);
      expect(tree.children[0].value).to.equal(tree.children[0].children[0].parent.value);
      tree.children[1].addChild(5);
      expect(tree.children[1].value).to.equal(tree.children[1].children[0].parent.value);
      tree.children[2].addChild(6);
      expect(tree.children[2].value).to.equal(tree.children[2].children[0].parent.value);
    });

    it('should bilaterally detach and return a sub-tree from its parent.', function () {
      tree.addChild(1);
      tree.addChild(2);
      tree.children[0].addChild(3);
      tree.children[0].addChild(4);
      var node = tree.children[0].removeFromParent();
      expect(node.parent).to.be.null;
      expect(node.value).to.equal(1);
      // xexpect(node.children[0]value).to.equal(3);
      // xexpect(node.children[0]value).to.equal(4);
    });

    xit('should execute a callback on each node of the tree.', function() {
      var array = [];
      var func = function(value) {array.push(value);};
      tree.addChild(1);
      tree.addChild(2);
      tree.children[0].addChild(3);
      tree.children[0].addChild(4);
      tree.children[1].addChild(13);
      tree.children[1].addChild(14);
      tree.traverse(func);
      expect(array).to.eql([1, 3, 4, 2, 13, 14]);
    });
  });
});
