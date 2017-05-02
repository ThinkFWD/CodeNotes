// +++++++++++++++++++++++++++++++++++++++
// ++++ Implementation of Hash Table +++++
// +++++++++++++++++++++++++++++++++++++++
// Psuedoclassical - ES5 

const hashTable = function (){
  this.table = new Array(137);
  this.createChain();
}

hashTable.prototype.simpleHash = function (value){
  let total = 0;
  for (let x = 0; x < value.length; x++){
  	total += value.charCodeAt(x);
  }
  return total % this.table.length;
}

hashTable.prototype.insert = function (key, data){
  let position = this.simpleHash(key);
  this.table[position].push(data);
}

hashTable.prototype.retrieve = function (key){
  return this.table[this.simpleHash(key)];
}

hashTable.prototype.showDist = function () {
  for (let x = 0; x < this.table.length; x++){
  	if(this.table[x][0] != undefined){
  	  console.log(x + " - " + this.table[x]);
  	}
  }
}

hashTable.prototype.createChain = function () {
  for (let x = 0; x < this.table.length; x++){
    this.table[x] = new Array();
  }
}



// EXAMPLE TEST CASE

let profiles = new hashTable;
profiles.insert('hello', 'Michael');
profiles.insert('johnny', 'John');
profiles.insert('bingo', 'Fred');
profiles.insert('bingo', 'Fred2');
profiles.insert('test', 'Max');
console.log('___________ HASH TABLES _____________')
profiles.showDist();
console.log('Seach for hello', profiles.retrieve('hello'))
console.log(profiles)


