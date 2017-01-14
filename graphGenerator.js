const Node = function(name, value) {
  this.name = name;
  this.value = value;
  this.neighbors = [];
};

Node.prototype.addNeighbors = function(node){
  return this.neighbors = this.neighbors.concat(node);
};


// let A = new Node("A", "cat");
// let B = new Node("B", "dog");
// let C = new Node("C", "bird");




module.exports = Node;
