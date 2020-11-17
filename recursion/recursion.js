function countdown() {
    for (var i = 1; i < 6; i++) {
        console.log(i)
    }
}

function countdownRec(i) {
    if (i == 6) { // !exit case/ base case
        return "Function is done!"
    }
    console.log(i)
    return countdownRec(i + 1) // !Incrementing upon calling itself
}
console.log(countdownRec(1))

function rSigma(num) {
    if (num == 0) {
        return 0
    }
    return num + rSigma(num - 1)
}
console.log(rSigma(4))


