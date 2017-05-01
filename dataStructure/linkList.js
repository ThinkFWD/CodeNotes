
// ES6 Method of writing constructors

class Node {
  constructor (data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class linkList {
  constructor (value) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  addNode(value){
    let info = new Node(value)
    let current = this.head;

    while(current !== null){

      if(current.next === null) {
      	current.next = info;
      	current.next.previous = current;
      	this.tail = current.next;
      	break
      }
      current = current.next;
      this.tail = current;
    }
  }

  showList(){
  	return this.head;
  }

  removeTail() {
  	this.tail.previous.next = null;
  }

  removeHead () {
  	this.head = this.head.next;
  	this.head.previous = null;
  }

  access (target, current = this.head) {
    if (current.data === target){
      return current;
    } else if (current.next === null) {
      return false
    } else {
      return this.access(target, current.next);
    }
  }

  contains (target) {
    return this.access(target) ? true : false
  }


}


console.log('___________ Linked List _____________')

let names = new linkList ('Michael')

names.addNode ('John')
names.addNode ('bob')
names.addNode ('frank')
console.log(names.showList ());
names.addNode ('Johnny');
names.removeTail();
console.log(names.showList());
names.removeHead();
console.log(names.showList());
names.addNode('hurb');
console.log(names.access('jjj'));
console.log(names.access('frank'));
console.log(names.contains('frank'));
console.log(names.contains('job'));