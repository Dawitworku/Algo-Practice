// !Recursive Sigma
// !Write a recursive function that given a number returns the sum of integers from 1 to that number.
// !Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(num) {
    if (num == 0) {
        return 0
    }
    return num + rSigma(num - 1)
}

console.log(rSigma(4))

// !Recursive Factorial
// !Given num, return the product of int's from 1 up to num. If less than zero, 
// !treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). 
// !Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function rFactorial(num) {
    if(Math.trunc(num) == 0) {
        return 1
    }
    return Math.trunc(num) * rFactorial(Math.trunc(num) - 1)
}
console.log(rFactorial(6.5))

// !OR
function rFact(num) {
    if (Math.trunc(num) > 1) {
        return Math.trunc(num) * rFact(Math.trunc(num) - 1);  //!Math.trunc is used to truncate or drop the decimals if num not an int.
    }
    else {
        return 1;
    }
}
console.log(rFact(3))
