const Node = function(name, value) {
  this.name = name;
  this.value = value;
  this.neighbors = [];
  return this.name;
};

Node.prototype.addNeighbors = function(node){
  return this.neighbors = this.neighbors.concat(node);
};

module.exports = Node;
