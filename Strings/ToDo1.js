// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(str) {
    newStr = str.split(" ");
    newStr = newStr.join("");
    // console.log(newStr)
    return newStr
}
string1 = "Pl ayTha tF u nkyM usi c";
x1 = removeBlanks(string1);
console.log(x1);

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) {
    newArr = str.split("")
    // console.log(newArr)
    var intStr = ""

    for (var i = 0; i < newArr.length; i++) {
        if (Number(newArr[i]) == Number(newArr[i])) {  // NUmber()- Used to convert a string to a type int.
            intStr += newArr[i]
        }
    }
    return intStr
}
string2 = "Os1a3y5w7h9a2t4?6!8?0";
x2 = getDigits(string2);
console.log(x2);


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function Acronyms(str) {
    newstr = str.split(" ")
    acronyms = ""
    for (var i = 0; i < newstr.length; i++) {
        acronyms += newstr[i][0].toUpperCase() // Or use CharAt(0) to target the first letter of each word
    }
    return acronyms
}
string3 = "there's no free lunch - gotta pay yer way."
string4 = "Live from New York, it's Saturday Night!"
x3 = Acronyms(string3)
x4 = Acronyms(string4)
console.log(x3)
console.log(x4)

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNonSpace(str) {
    newStr = str.split(" ")
    var count = 0;
    for (var i = 0; i < newStr.length; i++) {
        for (var j = 0; j < newStr[i].length; j++) {  // Iterating through each array elements and incrementing count
            count++;
        }
    }
    return count
}
string5 = "Honey pie, you are driving me crazy   yyy"
x5 = countNonSpace(string5)
console.log(x5)
//OR
function countNonSpace(str) {
    newStr = str.split(" ")
    var count = 0;
    for (var i = 0; i < newStr.length; i++) {  //increment count by the length of each array after splitting the string
        count += newStr[i].length
    }
    return count
}
string6 = "Honey pie, you are driving me crazy   yyy"
x7 = countNonSpace(string6)
console.log(x7)
//OR
function countNonSpace(str) {
    newStr = str.split(" ")
    joined_str = newStr.join("")  // Join and count the length

    return joined_str.length
}
string7 = "Honey pie, you are driving me crazy   yyy"
x8 = countNonSpace(string7)
console.log(x8)


// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

function removeShorterString(arr, size) {
    newStr = arr.split(" ")
    for (var i = newStr.length-1; i >= 0; i--) {
        if (newStr[i].length < size) {
            for (var  j = i; j < newStr.length-1; j++) {
                [newStr[j], newStr[j+1]] = [newStr[j+1], newStr[j]]
            }
            newStr.pop()
        }

    }
    return newStr
}
string8 = "Live from New York, it's Saturday Night!"
x9 = removeShorterString(string8, 5);
console.log(x9)
