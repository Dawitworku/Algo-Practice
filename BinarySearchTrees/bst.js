class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    Add(value) {  // !Adding value to the BST
        var new_node = new Node(value);
        if (this.root == null) {
            this.root = new_node;
            return this;
        }
        var runner = this.root;
        while (runner != null) {
            if (runner.val > value) {   //! go left here
                if (runner.left == null) {  // ! If runner or that nodes left is null, add the new value(node).
                    runner.left = new_node;
                    return this;
                }
                else {
                    runner = runner.left;   // ! If runner.left is not null, move to that runners left.
                }
            }
            else {
                if (runner.right == null) {
                    runner.right = new_node;
                    return this;
                }
                else {
                    runner = runner.right;
                }
            }
        }
    }
    Contains(value) {
        var runner = this.root;
        while (runner) {  // ! Navigating left or right depending on the value until the runner.val equals to the value.
            if (runner.val == value) {
                return ` Found "${value}" In This BST`
            }
            if (value < runner.val) {
                runner = runner.left;
            }
            if (value > runner.val) {
                runner = runner.right;
            }
        }
        return ` Value Of "${value}" Could Not Be Found In This BST`;
    }

    Min() {  // ! The min value in a BST is always going to be the far left side since it always puts the min number to the far left.
        let runner = this.root;   // ! We just need to just navigate using runner.left until runner.left is null. At that point there is no left node so we can simply return that runners value and that will be the min value.
        while (runner.left != null) {
            runner = runner.left;
        }
        // !if runner.left is null
        return ` Minimum number is "${runner.val}"`;
    }
    // ! OR
    // min() {
    //     var runner = this.root;
    //     var min = this.root.value;
    //     while (runner.left) {
    //         if (runner.left.value < min) {
    //             min = runner.left.value;
    //         }
    //         runner = runner.left;
    //     }
    //     return min
    // }

    Max() {
        let runner = this.root;
        while (runner.right != null) { // ! In BST, the max value is always to the far right of the root node. Navigate to the far right of the tree until its null to get the max.
            runner = runner.right;
        }
        // !if runner.left is null
        return ` Maximum number is "${runner.val}"`;
    }

    size(current_node) {
        if (current_node == null) {
            console.log("null found")
            return 0;
        }
        console.log("This current val is " + current_node.val)
        var leftSide = this.size(current_node.left);
        var rightSide = this.size(current_node.right);
        return 1 + leftSide + rightSide;
    }

    sum(current_node) {
        if (current_node == null) {
            console.log("null found")
            return 0;
        }
        console.log("This current val is " + current_node.val)
        var leftSide = this.sum(current_node.left);
        var rightSide = this.sum(current_node.right);
        return current_node.val + leftSide + rightSide;
    }

    height(current_node) {
        if (current_node == null) {
            console.log("null found")
            return 0;
        }
        console.log("This current val is " + current_node.val)
        var leftSide = this.height(current_node.left);
        var rightSide = this.height(current_node.right);
        if (leftSide > rightSide) {
            return 1 + leftSide;
        }
        else {
            return 1 + rightSide
        }
    }

    isEmpty() {
        let runner = this.root;
        if (runner == null) {
            return true; //"Empty";
        }
        return false; //"BST not empty";
    }
}
var bst1 = new BST(); // ! new instanceof BST
bst1.Add(19).Add(4).Add(15).Add(56).Add(40).Add(88).Add(100).Add(-10);
console.log(bst1);
console.log(bst1.size(bst1.root))    // ! Display Size
console.log(bst1.sum(bst1.root))     // ! Display sum
console.log(bst1.height(bst1.root))  // ! Display height
console.log(bst1.Contains(88));      // ! Checking if a value exists
console.log(bst1.Min());             // ! Display min
console.log(bst1.Max());             // ! Display max
console.log(bst1.isEmpty())          // ! checking if BST is empty or not
