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

//Front
//Write a method to return the value(not the node) at the head of the list. If the list is empty, return null.
function Front() {
    if (this.head == null) {
        return null;
    }
    return this.head.value
}
function RemoveFront() {
    if (this.head == null) {
        return null;
    }
    this.head = this.head.next
}

//Add to Front
function AddFront(value) {
    newNode = new Node(value); // create a node of teh given value
    newNode.next = this.head; // set the new node's next to the current head
    this.head = newNode; // 
    return this.head;
}
///////////////////////////////////////
// Framework for how runner works
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
    // Add a method contains(value) to your SLL class, which is given a value as a parameter.  
    // Return a boolean (true/false); true, if the list possesses a node that contains the provided value.
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
    // Create a new SLL method length() that returns number of nodes in that list.
    length() {
        var runner = this.head;
        var count = 0;
        while (runner != null) {
            count++;
            runner = runner.next;
        }
        return count;
    }
    // Create display() that returns a string containing all list values. 
    display() {
        var runner = this.head;
        var myList = [];
        while (runner != null) {
            myList.push(runner.val)
            runner = runner.next; // incrementing or changing the value of the runner to the next node
        }
        return myList;
    }
    average() {
        var runner = this.head;
        var tot = 0;
        while (runner != null) {
            tot += runner.val
            runner = runner.next;

        }
        return `Average is : ${tot / this.length()}`
    }
    max() {
        var runner = this.head;
        var max = this.head.val;  // setting max to be the current/first node which is the head
        while (runner != null) {
            if (runner.val > max) {
                max = runner.val;
            }
            runner = runner.next;
        }
        return `Max Num: ${max}`
    }
    min() {
        var runner = this.head;
        var min = this.head.val;
        while (runner != null) {
            if (runner.val < min) {
                min = runner.val;
            }
            runner = runner.next;
        }
        return `Minimum Num: ${min}`
    }

}
var sll1 = new Sll();
var Node1 = new Node(9);

sll1.head = Node1;

var node2 = new Node(4);
Node1.next = node2;

console.log(sll1.contains(4))
console.log(sll1.contains(5))
console.log(sll1.length());
console.log(sll1.display())
console.log(sll1.average())
console.log(sll1.max())
console.log(sll1.min())