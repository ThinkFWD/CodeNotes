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
    }
    for(var z = 0; z < this.verticies; z++){
      this.flag[z] = false;
    }
  }

  addEdge (v,w){
  	this.adj[v].push(w);
  	this.adj[w].push(v);
  	this.edges ++;
  }

  showGraph (){
  	return this.adj
  }

  DFS (targetVert){
    this.flag[targetVert] = true;
    if(this.adj[targetVert] != undefined){
      console.log('Visited Vertex', targetVert);
      this.adj[targetVert].forEach((item)=>{
        if(!this.flag[item]){
          this.DFS(item);
        }
      })
    }
  }

  BFS (targetVert){

  }
}


// EXAMPLE GRAPH
console.log('___________ Graph _____________')

let countries = new Graph (5);

countries.addEdge(0,1);
countries.addEdge(0,2);
countries.addEdge(1,3);
countries.addEdge(2,4);

console.log(countries.showGraph());

countries.DFS(0);
