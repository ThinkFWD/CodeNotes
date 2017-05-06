// // ++++++++++++++++++++++++++++++++++++++++++++++++++
// // ++++ Implementation of Double Linked List ES6 ++++
// // ++++++++++++++++++++++++++++++++++++++++++++++++++

// class Node {
//   constructor (data) {
//     this.data = data;
//     this.isWord = false;
//     this.prefix = 0;
//     this.children = {};
//   }
// }

// class Trie {
//   constructor (value) {
//     this.root = new Node('');
//   }

//   add(word){
//   	if(!this.root){
//   	  null;
//   	} 
//   	this.addNode(this.root,word);
//   }

//   addNode(node, word){
//     if(!node || !word) {
//       return null;
//     }
  
//     node.prefixes++;
  
//     var letter = word.charAt(0);
//     var child = node.children[letter];
  
//   if(!child) {
//     child = new Node(letter);
//     node.children[letter] = child;
//   }
  
//   var remainder = word.substring(1);
//     if(!remainder) {
//       child.isWord = true;
//     }
//   this.addNode(child, remainder);
//   }

//   remove(word){
//     if(!this.root) {
//       return;
//     }
//     if(this.contains(word)) {
//       this.removeNode(this.root, word);
//     }
//   }

//   removeNode(node,word) {
//   	if(!node || !word) {
//       return;
//     }
//     node.prefixes--;
//     var letter = word.charAt(0);
//     var child = node.children[letter];
  
//     if(child) {
//       var remainder = word.substring(1);
//       if(remainder) {
//         if(child.prefixes === 1) {
//           delete node.children[letter];
//         } else {
//           this.removeNode(child, remainder);
//         }
//       } else {
//       if(child.prefixes === 0) {
//         delete node.children[letter];
//       } else {
//         child.isWord = false;
//         }
//       }
//     }
//   }

//   contains (word){
//   	if(!this.root) {
//       return false;
//     }
//     return this.containsNode(this.root, word);
//   }

//   containsNode (node,word){
//     if(!node || !word) {
//       return false;
//     }
//   var letter = word.charAt(0);
//   var child = node.children[letter];
//     if(child) {
//       var remainder = word.substring(1);
//       if(!remainder && child.isWord) {
//         return true;
//       } else {
//         return this.containsNode(child, remainder);
//       }
//     } else {
//       return false;
//     }
//   }

//   countWords (){
//   	if(!this.root) {
//       return console.log('No root node found');
//     }
//   var queue = [this.root];
//   var counter = 0;
//     while(queue.length) {
//       var node = queue.shift();
//       if(node.isWord) {
//         counter++;
//       }
//       for(var child in node.children) {
//         if(node.children.hasOwnProperty(child)) {
//           queue.push(node.children[child]);
//         }
//       }
//     }
//       return counter;
//   }

//   getWord(){
//   	var words = [];
//     var word = '';
//      this.getWords(this.root, words, word);
//     return words;
//   }
  
//   getWords(node, words, word){
//   	for(var child in node.children) {
//       if(node.children.hasOwnProperty(child)) {
//         word += child;
//         if (node.children[child].isWord) {
//           words.push(word);
//         }
//         this.getWords(node.children[child], words, word);
//         word = word.substring(0, word.length - 1);
//       }
//     }
//   }

//   print(){
//   	if(!this.root) {
//     return console.log('No root node found');
//   }
//   var newline = new Node('|');
//   var queue = [this.root, newline];
//   var string = '';
//   while(queue.length) {
//     var node = queue.shift();
//     string += node.data.toString() + ' ';
//     if(node === newline && queue.length) {
//       queue.push(newline);
//     }
//     for(var child in node.children) {
//       if(node.children.hasOwnProperty(child)) {
//         queue.push(node.children[child]);
//       }
//     }
//   }
//   console.log(string.slice(0, -2).trim());
//   }

//   printByLevel(){
//   	if(!this.root) {
//     return console.log('No root node found');
//   }
//   var newline = new Node('\n');
//   var queue = [this.root, newline];
//   var string = '';
//   while(queue.length) {
//     var node = queue.shift();
//     string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
//     if(node === newline && queue.length) {
//       queue.push(newline);
//     }
//     for(var child in node.children) {
//       if(node.children.hasOwnProperty(child)) {
//         queue.push(node.children[child]);
//       }
//     }
//   }
//   console.log(string.trim());
//   }
// }



// console.log('----------------- TRIE -------------------')
// var trie = new Trie();
// trie.add('one');
// trie.add('two');
// trie.add('fifth');
// trie.add('fifty');
// trie.print(); // => | o t f | n w i | e o f | t | h y
// trie.printByLevel(); // => o t f \n n w i \n e o f \n t \n h y
// console.log('words are: one, two, fifth, fifty:', trie.getWord()); // => [ 'one', 'two', 'fifth', 'fifty' ]
// console.log('trie count words is 4:', trie.countWords()); // => 4
// console.log('trie contains one is true:', trie.contains('one')); // => true
// console.log('trie contains on is false:', trie.contains('on')); // => false
// trie.remove('one');
// console.log('trie contains one is false:', trie.contains('one')); // => false
// console.log('trie count words is 3:', trie.countWords()); // => 3
// console.log('words are two, fifth, fifty:', trie.getWord()); // => [ 'two', 'fifth', 'fifty' ]

var node = {
    key : null
  , value : null
  , children : []
}

function Trie() {
	this.head = {
			key : ''
		, children: {}
	}
}

Trie.prototype.add = function(key) {

	var curNode = this.head
		, newNode = null
		, curChar = key.slice(0,1);

	key = key.slice(1);
	
	while(typeof curNode.children[curChar] !== "undefined" 
		&& curChar.length > 0){
		curNode = curNode.children[curChar];
		curChar = key.slice(0,1);
		key = key.slice(1);
	}

	while(curChar.length > 0) {
		newNode = {
				key : curChar
			, value : key.length === 0 ? null : undefined
			, children : {}
		};

		curNode.children[curChar] = newNode;

		curNode = newNode;

		curChar = key.slice(0,1);
		key = key.slice(1);
	}

};

Trie.prototype.search = function(key) {
	var curNode = this.head
		, curChar = key.slice(0,1)
		, d = 0;

	key = key.slice(1);

	while(typeof curNode.children[curChar] !== "undefined" && curChar.length > 0){
		curNode = curNode.children[curChar];
		curChar = key.slice(0,1);
		key = key.slice(1);
		d += 1;
	}

	if (curNode.value === null && key.length === 0) {
		return d;
	} else {
		return -1;
	}

}

Trie.prototype.remove = function(key) {
	var d = this.search(key);
	if (d > -1){
		removeH(this.head, key, d);
	}
}

function removeH(node, key, depth) {
	if (depth === 0 && Object.keys(node.children).length === 0){
		return true;
	} 

	var curChar = key.slice(0,1);

	if (removeH(node.children[curChar], key.slice(1), depth-1)) {
		delete node.children[curChar];
		if (Object.keys(node.children).length === 0) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}



var trie = new Trie();
trie.add('one');
trie.add('two');
trie.add('fifth');
trie.add('fifty');
console.log(trie.search('two'))

console.log(trie)