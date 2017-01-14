const Node = function(name, value) {
  this.name = name;
  this.value = value;
  this.neighbors = [];
};

// let A = new Node("A", "cat");
// let B = new Node("B", "dog");
// let C = new Node("C", "bird");
// console.log(A);



module.exports = Node;
