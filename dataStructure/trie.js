class Node {
	constructor (){
		this.keys = new Map();
		this.end = false;
	}

	setEnd (){
		this.end = true;
	}

	isEnd(){
		return this.end
	}
}

class Trie {
	constructor (){
		this.root = new Node();
	}

	add(word, node = this.root){
		if(word.length === 0){
			node.setEnd();
			return;
		} else if (!node.keys.has(word[0])){
      node.keys.set(word[0], new Node());
      return this.add(word.substr(1), node.keys.get(word[0]));
		} else {
			return this.add(word.substr(1), node.keys.get(word[0]));
		}
	}

	isWord(word){
		let currentNode = this.root;
		while(word.length > 1){
			if(!currentNode.keys.get(word[0])){
				return false;
			} else {
				currentNode = currentNode.keys.get(word[0]);
				word = word.substr(1);
			}
		}
		return (currentNode.keys.has(word) && currentNode.keys.get(word).isEnd()) ? true : false;
	}


	print(){
		let words = [];
    let search = function (word, node){
    	if(node.keys.size !== 0){
    		for (let letter of node.keys.keys()){
    			search(word.concat(letter),node.keys.get(letter))
        }
        if (node.isEnd()){
         	words.push(word)
        } 
    	} else {
         	word.length > 0 ? words.push(word) : undefined
         	return;
        }
    }
    search(new String(), this.root)
    return words
	}
}




// TEST CASE

let contactList = new Trie();
contactList.add('Michael');
contactList.add('John');
contactList.add('Jo');




console.log(contactList.print())

