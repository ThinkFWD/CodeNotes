// +++++++++++++++++++++++++++++++++++++
// ++++ Implementation of Graph ES6 ++++
// +++++++++++++++++++++++++++++++++++++

class Graph {
  constructor (vert){
    this.verticies = vert;
    this.edges = 0;
    this.adj = [];
    this.flag = [];
    for(var x = 0; x < this.verticies; x++){
      this.adj[x] = [];
      this.flag[x] = false;
    }
  }

  addEdge (v,w){
  	this.adj[v].push(w);
  	this.adj[w].push(v);
  	this.edges ++;
  }

  showGraph (){
   for (var i = 0; i < this.verticies; i++){
     console.log(i + "-->");
     for (var j = 0; j < this.verticies; j++){
       if(this.adj[i][j] != undefined){
       	 console.log(this.adj[i][j]+" ")
       }
     }
   }
  }

  DFS (target){

  }

  BFS (target){

  }
}


// EXAMPLE GRAPH
console.log('___________ Graph _____________')

let countries = new Graph (5);

countries.addEdge(0,1);
countries.addEdge(0,2);
countries.addEdge(1,3);
countries.addEdge(2,4);

countries.showGraph();
