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

  mergeSort (arr) {
    let length = arr.length;
    let mid = Math.floor(length * 0.5);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid,length)

    if(length === 1) {
      return arr;
    }

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge (leftAr, rightAr){
    let sorted = [];
    let i = 0;
    let j = 0;

    while (i < leftAr.length || j < rightAr.length) {
      if (i < leftAr.length && j < rightAr.length){
        if (leftAr[i] < rightAr[j]){
          sorted.push(leftAr[i]);
          i++;
        }else{
          sorted.push(rightAr[j]);
          j++
        }
      }else if (i < leftAr.length){
        sorted.push(leftAr[i]);
        i++;
      }else{
        sorted.push(rightAr[j]);
        j++;
    }
  }
  return sorted;

  }
}

// Bubble sort < Insertion Sort [10000 sample]
let randomNumArr = new testArray(10);
console.log ("-------------- BUBBLE SORT --------------")
randomNumArr.genData();
console.log('Random Array', randomNumArr);
let Start = new Date().getTime();
randomNumArr.bubbleSort();
let End = new Date().getTime();
console.log('Bubble Sorted in ' + (End - Start) + ' milliseconds ');
console.log(randomNumArr);
console.log ("------------- INSERTION SORT ------------")
randomNumArr.genData();
console.log('Random Array', randomNumArr);
Start = new Date().getTime();
randomNumArr.insertionSort();
End = new Date().getTime();
console.log('Insertion Sorted in ' + (End - Start) + ' milliseconds '); 
console.log(randomNumArr);
console.log ("------------- MERGE SORT ------------")
randomNumArr.genData();
console.log('Random Array', randomNumArr);
Start = new Date().getTime();
randomNumArr = randomNumArr.mergeSort(randomNumArr);
End = new Date().getTime();
console.log('Merge Sorted in ' + (End - Start) + ' milliseconds '); 
console.log(randomNumArr);

