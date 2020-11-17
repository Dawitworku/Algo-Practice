// !Recursive Fibonacci
// !Write rFib(num). Recursively compute and return numth Fibonacci value.
// !As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 
// !rFib(2) = 1 (0+1); 
// !rFib(3) = 2 (1+1); 
// !rFib(4) = 3 (1+2); 
// !rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.
//! Definition: Each number is the sum of the two preceding onces starting from 0 and 1.
function rFib(num) {
    if (num == 1) {
        return 1;
    }
    else if (num < 1) {
        return 0;
    }
    else {
        return rFib(num - 1) + rFib(num - 2);
    }
}
console.log(rFib(3));

// function rFib(3) {
//     if (num == 1){
//         return 1;
//     }
//     else if (num < 1) {
//         return 0;
//     }
//     else {
//     return 1 + 1   //!Using T diagram to go over the recursion process as we call upon the function until we find an answer
//     }
// }
// function rFib(2) {
//     if (num == 1){
//         return 1;
//     }
//     else if (num < 1) {
//         return 0;
//     }
//     else {
//     return 1 + 0;
//     }
// }
// function rFib(1) {
//     if (num == 1){
//         return 1;
//     }
// }

// !Recursive “Tribonacci”
// !Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two.
// !First three Tribonacci numbers are 0, 0, 1, so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1);
// !rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.
//! Definition: Tribonncai is similar to Fibonacci, but instead of starting with two predetermined terms, the sequence starts with 3 predetermined terms 
//! and each term afterwards is the sum of the preceding three terms.
function rTrib(num) {
    if (num == 0 || num == 1 || num == 2) {
        return 0;
    }
    if (num == 3) {
        return 1;
    }
    else {
        return rTrib(num - 1) + rTrib(num - 2) + rTrib(num - 3);
    }
}
console.log(rTrib(5));


// !Paging Dr. Ackermann
// !The Ackermann function is among the earliest examples of a computable but not primitive-recursive function.
// !It grows rapidly and hence can overflow the JavaScript stack frame even at very low values.
// !This function accepts two non-negative integer values, num1 and num2, and follows these rules:

// !ackermann(0,num2) == num2+1;
// !ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (otherwise see #1);
// !ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)).
// !Don’t be dismayed if a num1 value as low as 4 “blows your stack”. That’s the nature of this function!

function ackermann(num1, num2) {
    if (num1 == 0) {
        return num2 + 1;
    }
    else if (num2 == 0) {
        return ackermann(num1 - 1, 1)
    }
    else {
        return ackermann(num1 - 1, ackermann(num1, num2 - 1))
    }
}
// console.log(ackermann(5, 4))

// !Zibonacci
// !This function borrows ideas from the Fibonacci series, but the calculated results appear to zig and zag, hence the name.
// !A so-called ‘Zibonacci’ series would be defined by the following rules:

// !Zib(0) == 1;
// !Zib(1) == 1;
// !Zib(2) == 2;
// !Zib(2n+1) == Zib(n)+Zib(n-1)+1, if n > 0 (i.e. odd values 3 and higher);
// !Zib(2n) == Zib(n)+Zib(n+1)+1, if n > 1 (i.e. even values 4 and higher).
// !Create the Zibonacci(num) function. What is Zibonacci(10)? Zibonacci(100)?
// !Second: For a given number that might be a Zibonacci result, find the largest index that maps to that result. bestZibNum(3186) == 2467, bestZibNum(3183) == null.

function zib(num) {
    if (num < 2) {
        return 1;
    }
    else if (num == 2) {
        return 2;
    }
    else if (num % 2 != 0) {
        n = ((num - 1) * 0.5)
        return (zib(n) + zib(n - 1) + 1);
    }
    else {
        n = ((num) * 0.5)
        return (zib(n) + zib(n + 1) + 1);
    }
}
console.log(zib(0))
