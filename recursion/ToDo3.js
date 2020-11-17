// !Recursive Binary Search
// !Given a sorted array and a value, recursively determine whether value is found within array. 
// !rBinarySearch([1,3,5,6],4) = false; 
// !rBinarySearch([4,5,6,8,12],5) = true.
// !Binary Search is searching technique which works on Divide and Conquer approach in a sorted array.

function rBinarySearch(arr, val) {
    var len = arr.length;
    var midPoint = Math.floor(len / 2);
    let newArr = arr

    if (arr[midPoint] == val) {
        return true;
    }
    if (arr[midPoint] > val) { //! Means the value is to the left of the midpoint.
        newArr = arr.slice(0, midPoint) //! Cutting the array since at this point we know val is less that the midpoint.
        return rBinarySearch(newArr, val)
    }
    else if (arr[midPoint] < val) { //! Means the value is to the right of the midpoint
        newArr = arr.slice(midPoint, len - 1)
        return rBinarySearch(newArr, val)
    }
    else {
        return false;
    }
}
console.log(rBinarySearch([1, 3, 5, 6], 4));

// !Greatest Common Factor
// !Given two integers, create rGCF(num1,num2) to recursively 
// !determine Greatest Common Factor (the largest integer dividing evenly into both). 
// !Greek mathematician Euclid demonstrated these facts:
// !gcf(a,b) == a, if a == b;
// !gcf(a,b) == gcf(a-b,b), if a>b;
// !gcf(a,b) == gcf(a,b-a), if b>a.
// !Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. 
// !You should  be able to compute rGCF(123456,987654).
// ! Great common divisor is the largest number that will divide into both numbers without any reminder. GCD of (6,3) is 3.
function rGCF(num1, num2) {  // THIS METHOD WILL REDUCE THE LARGER OF THE TWO NUMBERS UNTIL THE NUMBERS BECOME EQUAL, 
    if (num1 == num2) {     //WHICH GIVES US THE GCD OF THE ORIGINAL TWO NUMBERS
        return num1;
    }
    if (num1 > num2) {
        if ((num1 / num2) % 1 == 0) { // if num2 equally divides num1, return num 2/
            return num2;
        }
        return rGCF(num1 - num2, num2);
    }
    if (num2 > num1) {
        if ((num1 / num2) % 1 == 0) {
            return num2;
        }
        return rGCF(num2, num2 - num1);
    }
}
console.log(rGCF(1263262, 553443));

// ! OR in SIMPLE TERM, WE CAN DO:

function rGCF2(num1, num2) {
    if (num2 == 0) {
        return num1;
    }
    return rGCF2(num2, num1 % num2);  // ! IF NOT ZERO, THE FUNCTION CALLS ITSELF UNTIL TI FINDS THE GCF.
}
console.log(rGCF2(123456, 987654));
console.log(rGCF2(1263262, 553443));
console.log(rGCF2(6,3));

//  T-DIAGRAM TO ILLUSTRATE THE RECURSIVE CALLS
// function rGCF2(6, 3) {
//     if (num2 == 0) {
//         return num1;
//     }
//     return rGCF2(num2, num1 % num2);  // ! IF NOT ZERO, THE FUNCTION CALLS ITSELF UNTIL IT FINDS THE GCF.
// }
// function rGCF2(6, 3) {
//     if (num2 == 0) {
//         return num1;
//     }
//     return rGCF2(3, 6 % 3);  6 % 3 = 0
// }

// function rGCF2(6, 3) {
//     if (num2 == 0) {
//         return num1;
//     }
//     return rGCF2(3, 0); 
// }

// function rGCF2(3, 0) {
//     if (num2 == 0) {
//         return num1; // !This will return 3 since num2 here is 0. This shows that 3 is the GCF for 6 and 3.
//     }
//     return rGCF2(num2, num1 % num2);
// }