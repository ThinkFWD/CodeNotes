// +++++++++++++++++++++++++++++++++++++++++++
// +++++++ Implementation of Stack ES6 +++++++
// +++++++++++++++++++++++++++++++++++++++++++

class stack extends Array {
  constructor (value){
  	super(value);
  }

  remove () {
    this.pop();
  }

  add (value) {
  	this.push(value)
  }

  show () {
  	return this;
  }
}

console.log('___________ Stack _____________')

let cards = new stack ('A');

cards.add ('Q');
cards.add ('K');
cards.add ('J');
console.log(cards.show());
cards.remove();
console.log(cards.show());


