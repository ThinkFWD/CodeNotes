# CodeNotes

- These are Study Notes for interviews, the language of choice will be Javascript. 
- Data structures, Algorithms, Concepts

## DATA STRUCTURES 

### Array
| Access | Search | Insertion | Deletion | Space Complexity |
| ------ | ------ | --------- | -------- | ---------------- |
|  O(1)  |  O(N)  |    O(N)   |   O(N)   |       O(N)       |


### Binary Heap (Min-Heaps and Max Heaps)
| Access | Search | Insertion | Deletion | Space Complexity |
| ------ | ------ | --------- | -------- | ---------------- |
|  N/A   |  O(N)  |    O(1)   |  log(N)  |       O(N)       |


![alt text](https://github.com/ThinkFWD/CodeNotes/blob/master/assets/maxHeap.png)

- Binary Heap (Max/Min) is a complete binary tree that maintains (Max/Min)
- (Largest / Smallest ) variable will be located at the root of the tree. 
- Binary Heap can be implemented as an array, where index indicate location.

#### Insert

- Insert node at the bottom of the tree.
- Compare value to parent node. If values is (Less/Greater) than parent node, swap (Max/Min Heap).
- Keep swapping until conditions are met (essentially bubble up). 
- Min tree: lowest at root, level 1: less at right, great on right.
- Max tree: greatest at root, level 1: greater on right, less at left. 

#### Remove
 - Swap the last element on the last level with root value
 - Compare root with children (less/greater), and swap if needed based on (Max/Min) heap. 
 
 



### Hash Tables
| Access | Search | Insertion | Deletion | Space Complexity |
| ------ | ------ | --------- | -------- | ---------------- |
|  N/A   |  O(1)  |    O(1)   |   O(N)   |       O(N)       |



![alt text](https://github.com/ThinkFWD/CodeNotes/blob/master/assets/hashtable.gif)


### Link Lists
| Access | Search | Insertion | Deletion | Space Complexity |
| ------ | ------ | --------- | -------- | ---------------- |
|  O(N)  |  O(N)  |    O(1)   |   O(1)   |       O(N)       |


![alt text](https://github.com/ThinkFWD/CodeNotes/blob/master/assets/linkList.gif)





### Trees, Tries, Graphs
| Access | Search | Insertion | Deletion | Space Complexity |
| ------ | ------ | --------- | -------- | ---------------- |
| log(N) | log(N) |   log(N)  |  log(N)  |       O(N)       |


### Stack and Queues
| Access | Search | Insertion | Deletion | Space Complexity |
| ------ | ------ | --------- | -------- | ---------------- |
|  O(N)  |  O(N)  |    O(1)   |   O(1)   |       O(N)       |


### Vectors and ArrayLists
TBD


## Alogrithms

### Breadth-First Search
### Depth-First Search
### Binary Search
### Merge Sort
### Quick Sort

## Concepts

### Bit Manipulation
### Memory (Stack vs. Heap)
### Recursion
### Dynamic Programming
### Big O: Time and Space Complexity

