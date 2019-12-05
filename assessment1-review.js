"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

//#####################################################################################################################

// 1. Define a function named `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
//
// isBoolean(true)             // true
// isBoolean(false)            // true
// isBoolean(0)                // false
// isBoolean(null)             // false
// isBoolean("")               // false
// isBoolean("kwiw")           // false
// isBoolean([1, 2])           // false
//

//mine
// function isBoolean(inputValue) {
//     return typeof inputValue === "boolean";
// }

function isBoolean(input) {
    return (typeof input === "boolean");
}

function isBoolean(input) {
    return (input === true || input === false);
}

//#####################################################################################################################
// 1. Define a function named `isString` that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
//
// isString("Hello")           // true
// isString("Codeup")          // true
// isString("123")             // true
// isString(4)                 // false
// isString(true)              // false
// isString([1, 2, 3])         // false
// isString()                  // false
// isString(null)              // false
//

//mine
// function isString(inputValue) {
//     return typeof inputValue === "string";
// }

function isString(input) {
    return (typeof input === "string")
}

//#####################################################################################################################
// 1. Define a function named `isNotString` that accepts an input and returns `true` or `false` based on whether an input is not a string. Numeric strings will count as strings and should return `false`.
//
// isNotString(4)                 // true
// isNotString(true)              // true
// isNotString([1, 2, 3])         // true
// isNotString()                  // true
// isNotString(null)              // true
// isNotString("Hello")           // false
// isNotString("Codeup")          // false
// isNotString("123")             // false
//

//mine
// function isNotString(inputValue) {
//     return typeof inputValue !== "string";
// }

function isNotString(input) {
    return !isString(input);
}

function isNotString(input) {
    return typeof input !== "string";
}

//#####################################################################################################################
// 1. Define a function named `isEmptyString` that will return `true` when passed an argument with the value of "", i.e. an empty string. All other arguments should return false.
//
// isEmptyString("")                // true
// isEmptyString(" ")               // false
// isEmptyString("Hello")           // false
// isEmptyString("Codeup")          // false
// isEmptyString("123")             // false
// isEmptyString(true)              // false
// isEmptyString([1, 2, 3])         // false
// isEmptyString(null)              // false
// isEmptyString()                  // false
//

//mine
// function isEmptyString(inputValue) {
//     return inputValue === "";
// }

function isEmptyString(input) {
    return input === "";
}

//#####################################################################################################################
// 1. Define a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is less than zero.
//
// isNegative(-1)              // true
// isNegative(-5)              // true
// isNegative("-3")            // true
// isNegative(0)               // false
// isNegative(6)               // false
// isNegative("10")            // false
// isNegative(true)            // false
// isNegative(false)           // false
// isNegative("Bob")           // false
// isNegative([-1, 2, 3])      // false
// isNegative(null)            // false
//

//mine (technically wrong except this wasn't conveyed in Jasmine)
// function isNegative(inputNumber) {
//     return inputNumber < 0;
// }

function isNegative(num) {
    return parseFloat(num) < 0;
}

//#####################################################################################################################
// 1. Define a function named `isPositive` that accepts an input and returns `true` or `false` based on whether the input is above zero. Any non-numeric input should return false.
//
// isPositive(1)               // true
// isPositive("6")             // true
// isPositive(3.141)           // true
// isPositive(-1)              // false
// isPositive(-5)              // false
// isPositive("-4")            // false
// isPositive(0)               // false
// isPositive("Bob")           // false
// isPositive(true)            // false
//

//mine (omg I got it here, I should have figured this out but I hope it isn't held against me)
// function isPositive(inputValue) {
//     return parseInt(inputValue) > 0;
// }

function isPositive(inputValue) {
    return parseInt(inputValue) > 0;
}

//#####################################################################################################################
// 1. Define a function named `isZero` that will return `true` when passed an argument of the numeric value `0`, and return `false` for all other arguments.
//
// isZero(0)                 // true
// isZero("0")               // true
// isZero("Hello")           // false
// isZero("Codeup")          // false
// isZero("123")             // false
// isZero(true)              // false
// isZero([1, 2, 3])         // false
// isZero(null)              // false
// isZero()                  // false
//

//mine
// function isZero(numericValue) {
//     return parseFloat(numericValue) === 0;
// }

function isZero(numericValue) {
    return parseFloat(numericValue) === 0;
}

function isZero(numericValue) {
    return numericValue === 0 && typeof numericValue === "number";
}

//#####################################################################################################################
// 1. Define a function named `isArray` that takes in an input and returns a boolean whether or not that input is an array or not.
//
// isArray([])                 // true
// isArray([1, 2, 3])          // true
// isArray(['a', 'b'])         // true
// isArray(false)              // false
// isArray(12)                 // false
// isArray("Bob")              // false
// isArray({'some': 'object'}) // false
// isArray(true)               // false
// isArray()                   // false
//

//mine
// function isArray(inputValue) {
//     return inputValue instanceof Array;
// }

function isArray(inputValue) {
    return Array.isArray(inputValue);
}

//#####################################################################################################################
// 1. Define a function named `upperCase` that takes in a single input.
// If the input is not a string, return `false`.
// If the input is a non-numeric string, then return it with all the letters capitalized.
//
// upperCase("Codeup")         // "CODEUP"
// upperCase("javascript")     // "JAVASCRIPT"
// uppercase("45")             // false
// upperCase(23)               // false
// upperCase(null)             // false
// upperCase([1, 2, 3])        // false
// upperCase(true)             // false
// upperCase()                 // false
//

//mine
// function upperCase(singleInput) {
//     if (typeof Number(singleInput) === "number") {
//         return false;
//     } else if (typeof singleInput !== "string") {
//         return false;
//     } else {
//         return singleInput.toUpperCase;
//     }
// }

// function upperCase(singleInput) {
//     if (Number(singleInput) === isNaN(singleInput)) {
//         if (typeof singleInput !== "string") {
//             return false;
//         } else {
//             return (singleInput).toUpperCase();
//         }
//     } else {
//         return false;
//     }
// }

// function upperCase(singleInput) {
//     if (Number(singleInput) === isNaN(singleInput)) {
//         if ((typeof singleInput === "string") && (typeof (isNaN(singleInput)) !== "number")) {
//             return (singleInput).toUpperCase();
//         } else {
//             return false;
//         }}
//     else
//     {
//         return false;
//     }
// }


// function upperCase(singleInput) {
//     if (typeof singleInput === "string") {
//         if(typeof (isNaN(singleInput)) !== "number"){
//             return false;
//         } else {
//             return (singleInput).toUpperCase();
//         }
//     } else {
//         return false;
//     }
// }

var upperCase = function (input) {
    if ((parseFloat(input) == input) || (input == null)) {
        return false;
    } else if (typeof input === "string") {
        return input.toUpperCase();
    } else {
        return false;
    }
}
}
 if (parseFloat(input) == input) return false;
 else if (typeof input !== "string") return false
else return input.toUpperCase()

input.replace(/\D/g,"")

//#####################################################################################################################
// 1. Write a function named `containsVowel` that takes in a single input as its argument. If the argument is not a string, then return `false`. If the argument is a string, then return true if the string contains any of the vowels 'a', 'e', 'i', 'o', or 'u' either uppercased or lowercased. Ignore 'y'. If the string does not contain any of these vowels, then return `false`.
//
// containsVowel("Index")      // true
// containsVowel("Codeup")     // true
// containsVowel("Jane")       // true
// containsVowel("bb8")        // false
// containsVowel("")           // false
// containsVowel(34)           // false
// containsVowel([1, 2, 3])    // false


// function containsVowel(inputValue) {
//     if(typeof inputValue !== "string"){
//         return false;
//     } else if((inputValue.toLowerCase()).includes('a', 'e', 'i', 'o', 'u')) {
//         return true;
//     } else {
//         return false;
//     }
// }


// mine
// function isVowel(value) {
//     switch (value.toLowerCase()) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             return true;
//         default:
//             return false;
//     }
// }
//
// function containsVowel(inputValue) {
//     if (typeof inputValue !== "string") {
//         return false;
//     } else {
//         for (var i = 0; i < inputValue.length; i++) {
//             if (isVowel(inputValue[i])) {
//                 return true;
//             }
//         }
//         return false;
//     }
// }

var containsVowel = function (inputValue) {
    if(typeof input !== "string") {
        return false;
    } else {
        return input.toLowerCase().contains;
    }
}

input.match(/[aeiouAEIOU]/) return true
else return false