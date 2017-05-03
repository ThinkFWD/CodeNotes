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

  insertionSort (){
    let tempStorage;
    let innerIndex;
    for (let outer = 1; outer < this.length-1; outer++){
      tempStorage = this[outer];
      innerIndex = outer;
      
      while(innerIndex > 0 && this[innerIndex-1] >= tempStorage){
      	this[innerIndex] = this[innerIndex-1];
      	innerIndex--;
      }
      this[innerIndex] = tempStorage;
    }
  }
}

let randomNumArr = new testArray(100);
console.log ("-------------- BUBBLE SORT --------------")
randomNumArr.genData();
console.log('Random Array', randomNumArr);
let timerBubbleStart = new Date().getTime();
randomNumArr.bubbleSort();
let timerBubbleEnd = new Date().getTime();
console.log('Bubble Sorted in ' + (timerBubbleEnd - timerBubbleStart) + ' milliseconds ', randomNumArr);
console.log ("------------- INSERTION SORT ------------")
randomNumArr.genData();
console.log('Random Array', randomNumArr);
let timerInsertStart = new Date().getTime();
randomNumArr.insertionSort();
let timerInsertEnd = new Date().getTime();
console.log('Insertion Sorted in ' + (timerInsertEnd - timerInsertStart) + ' milliseconds ', randomNumArr);

