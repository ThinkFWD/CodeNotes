class Node {
  constructor (data, action) {
    this.data = data;
    this.parent = null;
    this.previous = null;
    this.action = action;  
  }
}

class linkedList {
  constructor (value, action) {
    this.head = new Node(value, action);
    this.tail = this.head;
  }

  addNode(value, action){
    let info = new Node(value, action)
    let current = this.head;

    while(current !== null){
      if(current.parent === null) {
      	current.parent = info;
        current.parent.previous = current;
      	this.tail = current.parent;
       	break
      }      
      current = current.parent;
      this.tail = current;
    }
  }

  showList(){
  	return this.head;
  }

  removeTail() {
  	this.tail.previous.parent = null;
  }

  removeHead () {
  	this.head = this.head.parent;
  	this.head.previous = null;
  }

  access (target, current = this.head) {
    if (current.data === target){
      return current;
    } else if (current.parent === null) {
      return false
    } else {
      return this.access(target, current.parent);
    }
  }

  contains (target) {
    return this.access(target) ? true : false
  }
}


let storage = new Array (4);

//Parse Config File
let parseData = (path, action, store) => {

  let components = (path === '/') ? ['']: path.split('/')
  let numComponents = components.length-1;
  let reqPath = new linkedList(components[numComponents], action);

  if(numComponents > store.length){
    for (var j = store.length-1; j < numComponents; j++){
       store.push(undefined);
    }
  }

   for (let i = numComponents-1; i >= 0; i --){
      reqPath.addNode(components[i], action);
    }
   if(store[numComponents] === undefined){
    store[numComponents] = [reqPath];
  } else {
    store[numComponents].push(reqPath) 
  } 
}  

let search = (path, store) => {
  var sampleSearch = (path === '/') ? [''] : path.split('/');
  var searchLength = sampleSearch.length-1;
  var isoList = storage[searchLength];
  var response = '404';
  var analysis = [];
  var PathData = [];

if (searchLength > store.length || store[searchLength] === undefined){
  return '404';
}

//isolate analysis only on paths ending with target.
for (var q = 0; q < store[searchLength].length; q++){
  if (store[searchLength][q].head.data === sampleSearch[searchLength]){
    analysis.push(store[searchLength][q]);
  } else if (store[searchLength][q].head.data === 'X'){
    analysis.push(store[searchLength][q]);
  }
}



analysis.forEach((path)=>{
  let current = path.head;
  let counter = sampleSearch.length -1;
 
  if(current.parent == null){
    response = current.action; 
  }

  while(current.parent !== null){
    if(sampleSearch[counter] !== current.data){
      if(current.data !== 'X'){
        response = '404'
        break;
      }
      counter --
    } else {
      response = current.action;
      counter --
    }
    PathData.push(current.data);
    current = current.parent;
  }
 
})

return response;
}



var exampleData = [ 
['/', 'rootEndpoint' ],
  [ '/user', 'userRootEndpoint' ],
  [ '/user/friends', 'userFriendsEndpoint' ],
  [ '/user/lists', 'userListsEnpoint' ],
  [ '/user/X', 'userEndpoint' ],
  [ '/user/X/friends', 'userFriendsEndpoint' ],
  [ '/user/X/lists', 'userListsEndpoint' ],
  [ '/user/X/lists/X', 'userListIdEndpoint' ],
  [ '/X/friends', 'userFriendsEndpoint' ],
  [ '/X/lists', 'userListsEnpoint' ],
  [ '/settings', 'settingsEndpoint' ],
  [ '/user/X/lists/X/X/X/X/X/X', 'userListIdEndpoint' ] ];


 var searchData = [ [ '/' ],
  [ '/user' ],
  [ '/user/friends' ],
  [ '/user/123' ],
  [ '/user/123/friends' ],
  [ '/user/123/friends/zzz' ],
  [ '/user/friends/friends' ],
  [ '/abc/lists' ],
  [ '/settings' ],
  [ '/aaa/bb' ],
  [ '/user/44/lists/3/2/1/8/9' ] ];



//Created configFile
exampleData.forEach((info)=>{
  parseData(info[0],info[1],storage);
})

console.log(storage)

 
searchData.forEach((path) =>{
  console.log('RESULTS', path[0],  search(path[0], storage))
})






