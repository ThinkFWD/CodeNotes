// +++++++++++++++++++++++++++++++++++++++++++
// +++++++ Implementation of Queue ES6 +++++++
// +++++++++++++++++++++++++++++++++++++++++++

class queue extends linkedList {
  constructor (value){
  	super(value);
  }

  enqueue (value) {
    this.addNode(value);
  }

  dequeue () {
  	if(this.head === null){
  	  return null;
  	} else {
  	  this.removeHead();
    }
  }

  showQueue () {
  	return this.showList();
  }
}


console.log('___________ Queue _____________')

let lineup = new queue ('johnny');

lineup.enqueue ('mike');
lineup.enqueue ('frank');
lineup.enqueue ('bob');
console.log(lineup.showQueue());

lineup.dequeue();
console.log(lineup.showQueue());


