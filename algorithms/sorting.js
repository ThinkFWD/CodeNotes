// +++++++++++++++++++++++++++++++++++++
// ++++ Implementation of Graph ES6 ++++
// +++++++++++++++++++++++++++++++++++++

class testArray extends Array {
  constructor(number){
  	super(number);
  	}

  genData (){
  	for(let x = 0; x < this.length; x++){
  	  this[x] = this.randomNum()
  	}
  }

  randomNum(max=100,min=0){
    return Math.floor((Math.random()*(max-min)) + min)
  }

  swap (index1, index2){
  	let storage = this[index1];
  	this[index1] = this[index2];
  	this[index2] = storage;
  }

  bubbleSort (){
  	//Makes sure largest is moved to the right || O(N^2)
    for (var outer = this.length; outer >= 2; outer--){
      for(var inner = 0; inner <= outer -1; inner ++){
        if(this[inner] > this[inner+1]){
          this.swap(inner,inner+1);
        }
      }
    }
  }

  

}

console.log ("---------------- SORTING ----------------")
let randomNumArr = new testArray(10);
randomNumArr.genData();
console.log('Random Array', randomNumArr);
console.log ("-------------- BUBBLE SORT --------------")
randomNumArr.bubbleSort();
console.log('Bubble Sorted', randomNumArr);

