// Reverse
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements moved to other indices so 
// that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move 
// values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(arr) {
    for (var i = 0; i < arr.length/2; i++){
        [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
    }
    return arr
}
x = reverse([1,2,3,4,5])
console.log(x)

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s 
// end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the 
// array to [3,1,2]. Don’t use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

function rotate(arr, shiftBy){  // grabbing the last element for the array and saving it in a temp. 
                              //shift everything else to the right using another loop. assign idx 0 with the temp.
    for(var i = 1; i <= shiftBy; i++){
        temp = arr[arr.length-1];
        for (var j = arr.length-1 ; j >= 0; j--){
            arr[j] = arr[j-1]
        }
        arr[0] = temp
    }
    return arr
}
x = rotate([1,3,5,7,9], 2)// basically save 9 in temp, shift elements to the right and assign temp to arr[0].
console.log(x) // [7,9,1,3,5]
// [undef,1,3,5,7]

// Filter Range
// Alan is good at breaking secret codes. 
// One method is to eliminate values that lie within a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
    var count = 0;

    for(var i = 0; i < arr.length; i++){
        if (arr[i] > min && arr[i] < max){
            var temp
            count++;
            for(var j = i; j > count-1; j--){
                temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
            }
            arr.length = arr.length-1
        }
    }
    arr.length = count
    return arr
}
x = filterRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7)
console.log(x) // [4, 5, 6]

function filterRange(arr, min, max){
    var temp
    for (var i = 0; i < arr.length; i++){
        if (arr[i] <= min || arr[i] >= max){
            for (var j = i; j < arr.length-1; j++){
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
            arr.length = arr.length-1
            i--
        }
    }
    return arr
}
y = filterRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7)
console.log(y)
// Iterating through the array, any number/value that is outside of the range will be moved to teh right so we can get rid of it.
//The second for loop will get that index position for the element that is less that the min number and iterates and moves
//It to teh right of the array. (Arr.length = arr.length-1) will remove the value as our array shrinks.


// Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array’s elements, followed by the second array’s elements.
//  Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concat(arr1, arr2){
    for (var i = arr1.length-1; i >= 0; i--) {
        console.log(arr1[i])
        arr2.unshift(arr1[i])
    }
    
    return arr2
}
concat = concat(['a', 'b'], [1, 2]);
console.log(concat);
