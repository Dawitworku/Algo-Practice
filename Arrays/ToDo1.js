
// Push Front -Given an array and an additional value, insert this value at the beginning of the array. 
//Do this without using any built-in array methods.
function pushFront(array, num) {
    var next = array[0]
    array[0] = num

    for (var i = 1; i < array.length; i++) {

        var temp = array[i]
        array[i] = next
        next = temp
    }
    array[i] = next
    return array;
}
x = pushFront([1, 2, 3, 4, 5], 10);
console.log(x)

function pushFront(array, num) {

    for (var i = array.length; i >= 0; i--) {
        array[i] = array[i - 1]
    }
    array[0] = num
    return array;
}
x = pushFront([1, 2, 3, 4, 5], 10);
console.log(x)


// Pop Front
// Given an array, remove and return the value at the beginning of the array.
// Do this without using any built-in array methods except pop().
function popFront(arr) {

    for (var i = 0; i < arr.length - 1; i++) {

        arr[i] = arr[i + 1]; // Basically setting index pos 0 to be the next index
    }
    arr.pop()
    //or
    //arr.length = arr.length-1
    return arr
}

y = popFront([1, 2, 3, 4, 5, 6])
console.log(y);

//Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. 
//You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, n, idx) {

    for (var i = arr.length; i > idx; i--) { // extend the array and move them to the right starting at the arr.length to the idx
        arr[i] = arr[i - 1]
    }
    arr[idx] = n

    return arr
}
x = insertAt([5, 10, 15, 25, 30], 20, 3);
console.log(x);
loop = 3
[5, 10, 15, 25, 25, 30]

// Remove At
// Given an array and an index into array, remove and return the array value at that index. 
//Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, idx) {
    for (var i = idx; i < arr.length - 1; i++) { // Start from the idx position and move left so we can remove that idx in the end
        arr[i] = arr[i + 1]
    }
    arr.pop()
    return arr
}
x = removeAt([5, 10, 10, 15, 20, 25, 30], 2)
console.log(x)

//Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
//As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) { // By incrementing by 2, we can get the idx position of successive pairs

        var temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
    }
    return arr
}
x = swapPairs([1, 2, 3])
console.log(x)


// Remove duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. 
// Her assistant alphabetized them but noticed some duplicates. 
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.
//  As with all these array challenges, do this without using any built-in array methods.

function removeDuplicates(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {  //Checking if the next value is duplicate. If not push to new array.
            newarr.push(arr[i])
        }
    }
    return newarr
}
x = removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10, 10, 10, 10])
console.log(x)


