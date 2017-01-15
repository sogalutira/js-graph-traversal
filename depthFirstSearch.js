'use strict';

const Node = require('./graphGenerator');

const DFS = (start, searchFor) => {
  console.log('start: ', start);
  console.log('search for: ', searchFor);
  console.log('start length: ', start.neighbors.length);

  let root = start;
  let appendingLevels = [];

  for (var i = 0; i < root.neighbors.length; i ++){
    console.log('level 1: ', root.neighbors[i]);
    appendingLevels = root.neighbors[i];
    console.log('checking appending levels: ', appendingLevels);
    console.log('\nappending levels: ', appendingLevels.neighbors.length);
    if (appendingLevels.neighbors.length > 0){
      checkChildren();
    }else{
      console.log('no more children');
    }
    // console.log('\n level 2: ', root.neighbors[i].neighbors.length);

    // let rootNeighbors = root.neighbors[i].neighbors;

    // console.log('level 2 nodes: ', rootNeighbors);

    // for (var k = 0; k < rootNeighbors.length; k++){
    //   console.log('level 3 nodes: ', rootNeighbors[k].neighbors);
    //   console.log('level 3 nodes children:', rootNeighbors[k].neighbors.length);
    // }
  }

  function checkChildren(){
    for (var i = 0; i < appendingLevels.neighbors.length; i++){
      console.log('appending length: ', appendingLevels.neighbors.length);
      console.log('checked children: ', appendingLevels.neighbors[i]);
    }
  }


  // let tree = [];
  // let checkedBranch = [];
  // let nodeNeighbors = [];
  // let current;

  // tree.push(start);
  // console.log('tree', tree);




  // for(var i = 0; i < Node.length; i++){
  //   for(var k = 0; k < start.neighbors.length; k++){
  //     // nodeNeighbors = start.neighbors[i].neighbors[k];
  //     if (tree[tree.length-1].value === searchFor){
  //       tree.push(tree[tree.length-1].value);
  //       return tree;
  //     }
  //   }
  // }

};

module.exports = DFS;
