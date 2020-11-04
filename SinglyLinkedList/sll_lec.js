// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Sll {
//     constructor() {
//         this.head  = null;
//     }
// }

// // Instantiating

// myNode = new Node(10);
// my_ssl = new Sll()
// my_ssl.head = myNode;

// //Front
// //Write a method to return the value(not the node) at the head of the list. If the list is empty, return null.
// function Front() {
//     if(this.head == null){
//         return  null;
//     }
//     return this.head.value
// }
// function RemoveFront() {
//     if(this.head == null){
//         return  null;
//     }
//     this.head = this.head.next
// }

// //Add to Front
// function AddFront(value){
//     newNode = new Node(value); // create a node of teh given value
//     newNode.next = this.head; // set the new node's next to the current head
//     this.head = newNode; // 
//     return this.head;
// }
///////////////////////////////////////
// Framework

// var runner = this.head
// while (runner != null) {
//     // do some stuff
//     runner = runner.next  // way of incrementing
// }

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class Sll {
    constructor() {
        this.head = null;
    }

    contains(value) {
        var runner = this.head;
        while (runner != null) {
            if (runner.val == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    length() {
        var runner = this.head;
        var count = 0;
        while (runner != null) {
            count++;
            runner = runner.next;
        }
        return count;
    }
    average() {
        var runner = this.head;
        var tot = 0;
        while (runner != null) {
            tot += runner.val
            runner = runner.next;
            
        }
        return tot/this.length()
    }
}
var sll1 = new Sll();
var Node1 = new Node(9);

sll1.head = Node1;

var node2 =  new Node(4);
Node1.next = node2;

x = sll1.contains(4);
console.log(x)
y = sll1.contains(5);
console.log(y)
sll1.length();

a = sll1.average();
console.log(a)