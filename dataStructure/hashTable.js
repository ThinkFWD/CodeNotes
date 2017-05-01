// +++++++++++++++++++++++++++++++++++++++
// ++++ Implementation of Hash Table +++++
// +++++++++++++++++++++++++++++++++++++++

const hashTable = function (){
  this.table = new Array(137);
}

hashTable.prototype.simpleHash = function (value){
  let total = 0;
  for (let x = 0; x < value.length; x++){
  	total += value.charCodeAt(x);
  }
  return total % this.table.length;
}

hashTable.prototype.insert = function (data){
  let position = this.simpleHash(data);
  this.table[position] = data;
}

hashTable.prototype.showDist = function () {
  for (let x = 0; x < this.table.length; x++){
  	if(this.table[x] != undefined){
  	  console.log(x + " - " + this.table[x]);
  	}
  }
}


// EXAMPLE TEST CASE


let profiles = new hashTable;

profiles.insert('Michael');
profiles.insert('John');
profiles.insert('Fred');
profiles.insert('Max');
console.log('___________ HASH TABLES _____________')
profiles.showDist();




