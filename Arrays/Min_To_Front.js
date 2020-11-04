// // Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it.
// //  Do not otherwise change the array’s order.
// //  Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.


function MinToFront(arr) {

    var min = arr[0]
    var idx;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Getting the min after iteration and then grabbing the idx position
            idx = i;
        }
    }
    for (var j = idx; j > 0; j--) { // Iterating backwards and setting the moving the min number to the front.

        var temp = arr[j];
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
    }
    return arr
}
x = MinToFront([4, 2, 1, 3, 5])
console.log(x)