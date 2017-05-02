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
    this.edgeTo = []; // shortest Path questions
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
    let queue = []; //you can also init the queue datastructure implmented earlier
    this.flag[targetVert] = true;
    queue.push(targetVert)

    while(queue.length > 0){
      let vert = queue.shift(); // removes first variable
      console.log('Visited', vert);
      if(vert == undefined){
        console.log('Visited', vert);
      } 
      this.adj[vert].forEach((item)=>{
      	if(!this.flag[item]){
      	  this.edgeTo[item] = vert;
       	  this.flag[item] = true;
      	  queue.push(item); 
      	}
      })
    }
   console.log('EdgeTo -->', this.edgeTo)
  }

  shortestPathTo(targetVert){
  	var source = 0;
  	if(!this.hasPathTo(targetVert)){
  	  return undefined
  	}
  	var path = [];
    
    for (let i = targetVert; i != source; i = this.edgeTo[i]){
      // follow the bread crumbs to the origin
      path.push(i);
    }
    path.push(source)
    return path;
  }

  hasPathTo(targetVert){
  	return this.flag[targetVert];
  }
}

// EXAMPLE GRAPH
console.log('___________ Graph _____________')

let countries = new Graph (8);

countries.addEdge(0,1);
countries.addEdge(0,2);
countries.addEdge(1,3);
countries.addEdge(2,4);
countries.addEdge(2,5);
countries.addEdge(3,5);
countries.addEdge(5,6);
countries.addEdge(6,7);

console.log(countries.showGraph());


//countries.DFS(0); // Traverses through the whole graph 
countries.BFS(0);

var vertex = 4;
var paths = countries.shortestPathTo(vertex);
console.log(paths)

//NOTE: Key aspect = edgeTo = connection from previous node. 

