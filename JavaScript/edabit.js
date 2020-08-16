//1. returned input squared
function squared(b) {
    return b*b;
}
// console.log(squared(5));



//2. return area of a triangle
function triArea(base, height) {
    return (base * height) / 2;
}



//3. return seconds in #hours
function howManySeconds(hours) {
    return (hours * 60 * 60);
}



//4. return remainder of division of two numbers
function remainder(x, y) {
    return (x % y);
}



//5. return total minutes from #hours and minutes
function convert(hours, minutes) {
    return (hours * 60 * 60) + (minutes * 60);
}



//6. Create a function that finds the maximum range of a triangles third edge.
//hint: (side1 + side2) - 1 = maximum range of third edge.
function nextEdge(side1, side2) {
    return ((side1 + side2) - 1);
}


//7. Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}


//8. verify the equality of two different given parameters: a and b. Both the value and the type of parameters need to be tested for to have an equality matching.
function checkEquality(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}


//9. Create a function that returns true if an integer is divisible by 5, and false otherwise.
function divisibleByFive(n) {
    if (n % 5 === 0) {
        return true;
    } else {
        return false;
    }
}


//10. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function animals(chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4);
}


//11. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
    return (++num);
}



//12. Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
    if (str1.length == str2.length) {
        return true;
    } else {
        return false;
    }
}


//13. Write a function that returns the length of a string. Make your function recursive.
function length(str) {
    return str.length;
}


//14. Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
function profitableGamble(prob, prize, pay) {
    if ((prob * prize) > pay) {
        return true;
    } else {
        return false;
    }
}



//15. Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
function volumeOfBox(sizes) {
    return (sizes.height * sizes.width * sizes.length);
}


//16. Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
function divisible(num) {
    if (num % 100 === 0) {
        return true;
    } else {
        return false;
    }
}



//16. Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr) {
    return arr.pop();
}


//17. Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
    return (lastName + ", " + firstName);
}


//18. Create a function that finds the index of a given item in a sorted array. Input is (arr, item).
function search(arr, item) {
    return arr.indexOf(item);
}

//19. Create a function to concatenate two integer arrays.
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}


//20. Create a function that takes an array and returns the first element.
function getFirstValue(arr) {
    return arr.shift();
}

//21. Create a function that takes an array and a string as arguments and return the index of the string.
function find_index(arr, str) {
    return arr.indexOf(str);
}

//22. Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}


//23. Create a function that finds the index of a given item.
function search(arr, item) {
    return arr.indexOf(item);
}


//24. Create a function that returns true if a string contains any spaces.
function hasSpaces(str) {
    if (str.indexOf(" ") > -1) {
        return true;
    } else {
        return false;
    }
}

//25. Create a function that returns the total number of parameters passed in.
function numberArgs(arr) {
    return arguments.length;
}


//26.Create a function that takes a base number and an exponent number and returns the calculation.
function calculateExponent(num, exp) {
    return Math.pow(num, exp);
}

// STARTING AFTER CODEUP:

//1. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//example:
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]
function minMax(arr) {
    let bucket = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === Math.min(...arr) && !bucket.includes(arr[i])){
            console.log(Math.min(...arr));
            bucket.push(arr[i]);
        } else if (arr[i] === Math.max(...arr) && !bucket.includes(arr[i], 1)){
            console.log(Math.max(...arr));
            bucket.push(arr[i]);
        }
    }
    return bucket;
}
// console.log(minMax([1, 2, 3, 4, 5, 5]));
// console.log(minMax([0.2345, 0.984]));
// console.log(minMax([0.984, 0.2345]));
// console.log(Math.min(0.984, 0.2345));
//other solutions:
//function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }
//function minMax(arr) {
//   arr.sort(function(a, b){return a-b});
//   return [arr[0], arr[arr.length-1]];
//
// }




//-------------------------------------------------------------------------------------------------------------------
// 2. Broken Bridge: Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).
//isSafeBridge("####") ➞ true
// isSafeBridge("## ####") ➞ false
// isSafeBridge("#") ➞ true
function isSafeBridge(s){
    return s.split(' ').length === 1
}
// console.log(isSafeBridge("#"));
// console.log(isSafeBridge("## ####"));
// console.log(isSafeBridge("####"));




//-------------------------------------------------------------------------------------------------------------------
//3. Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// example:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
// Hint: If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
function largestSwap(num) {
    //long method---------------------
    // let numToString = num.toString();
    // console.log(numToString);
    // let stringToArr = numToString.split('');
    // // console.log(stringToArr);
    // let reversed = stringToArr.reverse();
    // // console.log(reversed);
    // let joined = reversed.join('');
    // // console.log(joined);
    // let newNum = parseInt(joined);
    // console.log(newNum);
    // return (num >= newNum);

    //refactored-----------------------
    let numToString = parseInt(num.toString().split('').reverse().join(''));
    // console.log(numToString);
    // console.log(typeof numToString);
    return (num >= numToString);
}
// console.log(largestSwap(15));
// console.log(largestSwap(45));



//-------------------------------------------------------------------------------------------------------------------
//4. Convert Number to Corresponding Month Name
//Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//SWITCH CASE ANSWER
//     function monthName(num) {
//         switch (num){
//             case 1:
//                 return 'January';
//                 break;
//             case 2:
//                 return 'February';
//                 break;
//             case 3:
//                 return 'March';
//                 break;
//             case 4:
//                 return 'April';
//                 break;
//             case 5:
//                 return 'May';
//                 break;
//             case 6:
//                 return 'June';
//                 break;
//             case 7:
//                 return 'July';
//                 break;
//             case 8:
//                 return 'August';
//                 break;
//             case 9:
//                 return 'September';
//                 break;
//             case 10:
//                 return 'October';
//                 break;
//             case 11:
//                 return 'November';
//                 break;
//             case 12:
//                 return 'December';
//                 break;
//         }
//     }
//REFACTORED ARRAY ANSWER
function monthName(num) {
    let numArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for(let i = 0; i < numArr.length; i++){
        if (num === (i + 1)){
            return numArr[i];
        }
    }
}



//-------------------------------------------------------------------------------------------------------------------
//5. Truthy or Falsy?
// A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:
// false
// null
// undefined
// 0
// NaN
// ""
// In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").
// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.
function isTruthy(input) {
    if (input){
        return 1;
    } else {
        return 0;
    }
}




//-------------------------------------------------------------------------------------------------------------------
//6. Remove Null from an Array
//Create a function to remove all null values from an array.
//examples:
//removeNull(["a", null, "b", null]) ➞ ["a", "b"]
// removeNull([null, null, null, null, null]) ➞ []
// removeNull([7, 8, null, 9]) ➞ [7, 8, 9]
function removeNull(arr) {
    let filtered = arr.filter(i => i !== null);
    return filtered;
}



//-------------------------------------------------------------------------------------------------------------------
//7. Shuffle the Name
//Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.
// Examples:
// nameShuffle("Donald Trump") ➞ "Trump Donald"
// nameShuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"
// nameShuffle("Seymour Butts") ➞ "Butts Seymour"
function nameShuffle(str) {
    return str.split(" ").reverse().join(" ");
}



//-------------------------------------------------------------------------------------------------------------------
//8. Get Word Count
// Create a function that takes a string and returns the word count. The string will be a sentence.
// Examples
// countWords("Just an example here move along") ➞ 6
// countWords("This is a test") ➞ 4
// countWords("What an easy task, right") ➞ 5
function countWords(str) {
    return str.split(" ").length;
}



//-------------------------------------------------------------------------------------------------------------------
//9. FIND THE BUG: CHECKING EVEN NUMBERS
//Create a function that takes in an array and returns true if all its values are even, and false otherwise.
// Not a big deal, your friend says. He writes the following code:
    // function checkAllEven(arr) {
    //   return arr.every(x % 2 === 0)
    // }
// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:
// Examples
// checkAllEven([1, 2, 3, 4]) ➞ false
// checkAllEven([2, 4, 6]) ➞ true
// checkAllEven([5, 6, 8, 10]) ➞ false
// checkAllEven([-2, 2, -2, 2]) ➞ true
function checkAllEven(arr) {
    return arr.every(x => x % 2 === 0)
}



//-------------------------------------------------------------------------------------------------------------------
//10. RegEx: Boundary Assertions II
//You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.
// Examples
// accepted(["Ducks", "Bears",  "Cats"]) ➞ ["Ducks", "Bears"]
// accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]
// accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]
// Notes
// Use a RegEx boundary assertion in your function.
function acceptedWords(arr) {
    // let hasC = /^C/;
    //let doesntHaveC = /^[^C]/;
    return arr.filter(i => /^[^C]/.test(i));
}



//-------------------------------------------------------------------------------------------------------------------
// JAVASCRIPT REVIEW EDABIT QUESTIONS 6/28/20
//-------------------------------------------------------------------------------------------------------------------

function reverse(str) {
    let strToArray = str.split('');
    // console.log(strToArray);
    let reversed = strToArray.reverse();
    // console.log(reversed);
    return reversed.join('');
}
// reverse("hello");
// reverse("world");

//REFACTORED
// function reverse(str) {
//     return str.split('').reverse().join('');
// }
//-------------------------------------------------------------------------------------------------------------------

function countCharacters(arr) {
    let bucket = 0;
    if (arr === []){
        return 0;
    } else {
        for (let i = 0; i < arr.length; i++){
            bucket += arr[i].length
        }
    }
    return bucket;
}

//REFACTORED
// function countCharacters(arr) {
//     return arr.join('').length;
// }
//-------------------------------------------------------------------------------------------------------------------


/**
 * @return {string}
 */
function Go(num) {
    let str = '';
    for(let i = 0; i < num; i++){
        str += '-';
    }
    return str;
}

//REFACTORED
// function Go(num) {
//    return '-'.repeat(num);
// }

//-------------------------------------------------------------------------------------------------------------------

// function numberSyllables(word) {
//     let syllablesBucket = 0;
//     let dash = '-';
//     for (let i = 0; i < word.length; i++){
//         console.log(word[i]);
//         if(word[i] === '-'){
//             syllablesBucket += 1;
//             console.log(syllablesBucket)
//         }
//     }
//     return syllablesBucket;
// }

//REFACTORED
function numberSyllables(word){
    let syllables = word.split('-');
    return syllables.length;
}
// console.log(numberSyllables("buf-fet")); // ➞ 2
// console.log(numberSyllables("beau-ti-ful")); //  ➞ 3
// console.log(numberSyllables("mon-u-men-tal"));  // ➞ 4
// console.log(numberSyllables("on-o-mat-o-poe-ia")); //  ➞ 6
//-------------------------------------------------------------------------------------------------------------------

// Destructuring objects
//with ES6 you can assign the variables in a much more succinct way. Use ES6 object destructuring to assign variables
// one and two to obj.one and obj.two respectively.

let str = `( {one, two} = { one : 1, two : 2}).toString()`;

//-------------------------------------------------------------------------------------------------------------------

// Create a function that takes an array of numbers. Return the largest number in the array.
function findLargestNum(arr) {
    return Math.max(...arr);
}

//-------------------------------------------------------------------------------------------------------------------

//Create a function that takes an array of strings and returns the words that are exactly four letters.
function isFourLetters(arr) {
    bucketArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length === 4){
            bucketArr.push(arr[i]);
        }
    }
    return bucketArr;
}

//REFACTORED
// function isFourLetters (arr) {
//     return arr.filter(x => x.length === 4);
// }
//-------------------------------------------------------------------------------------------------------------------

//return array of first and last in an array
function firstLast(arr) {
    let bucket = [];
    first = arr[0];
    last = arr[arr.length - 1];
    bucket.push(first, last);
    return bucket;
}

//REFACTORED
// function firstLast(arr) {
//     return [arr.shift(), arr.pop()]
// }

//REFACTORED
// function firstLast(arr) {
//     return [arr[0], arr[arr.length-1]]
// }

//-------------------------------------------------------------------------------------------------------------------

//In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
//Write three separate functions, one to retrieve each element in the semantic versioning specification.

function retrieveMajor(semver) {
    let arr = semver.split('.');
    return arr[0];
}

function retrieveMinor(semver) {
    let arr = semver.split('.');
    return arr[1];
}

function retrievePatch(semver) {
    let arr = semver.split('.');
    return arr[2];
}

// REFACTORED
// function retrieveMajor(semver) {
//     return semver.split(".")[0];
// }
//
// function retrieveMinor(semver) {
//     return semver.split(".")[1];
// }
//
// function retrievePatch(semver) {
//     return semver.split(".")[2];
// }

//-------------------------------------------------------------------------------------------------------------------

function findBob(names) {
    return names.indexOf('Bob')
}

//-------------------------------------------------------------------------------------------------------------------

function diffMaxMin(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

//-------------------------------------------------------------------------------------------------------------------

function both(n1, n2) {
    if (n1 === 0 && n2 === 0){
        return true;
    } else if (n1 < 0 && n2 < 0){
        return true;
    } else if (n1 > 0 && n2 > 0){
        return true;
    } else {
        return false;
    }
}

//-------------------------------------------------------------------------------------------------------------------

function even(num){
    return num % 2 === 0;
}
function noOdds(arr) {
    return arr.filter(even)
}

//REFACTOR
// function noOdds(arr) {
//     return arr.filter(function even(num){
//         return num % 2 === 0;
//     })
// }
//REFACTOR
// function noOdds(arr) {
//     return arr.filter(x => x % 2 === 0);
// }

//-------------------------------------------------------------------------------------------------------------------

function missingAngle(angle1, angle2) {
    if ((180 - (angle1 + angle2)) < 90){
        return 'acute';
    } else if ((180 - (angle1 + angle2)) === 90){
        return 'right';
    } else {
        return 'obtuse';
    }
}

//REFACTORED
// function missingAngle(angle1, angle2) {
//     let angle3 = 180 - angle1 - angle2;
//     if (angle3 < 90) return 'acute';
//     if (angle3 > 90) return 'obtuse';
//     return 'right';
// }

//-------------------------------------------------------------------------------------------------------------------

// Write a regular expression that matches a string if it contains at least one digit.

let x = /\d/;

//-------------------------------------------------------------------------------------------------------------------

function checkEnding(str1, str2) {
    return str1.endsWith(str2);
}

//-------------------------------------------------------------------------------------------------------------------

function additiveInverse(arr) {
    return arr.map(num => num * (-1));
}

//-------------------------------------------------------------------------------------------------------------------

function convertCartesian(arr1, arr2) {
    return arr1.map(function(x, i){ return [x, arr2[i]]; });
}

//-------------------------------------------------------------------------------------------------------------------

//Create a function that takes two arrays and insert the second array in the middle of the first array.

//this first solution works with arrays that have more than two elements in arr1
function tuckIn(arr1, arr2) {
    let halfIndex = arr1.length / 2;
    // console.log(halfIndex);
    let firstHalf = arr1.slice(0, halfIndex);
    // console.log(firstHalf);
    let secondHalf = arr1.slice(halfIndex);
    // console.log(secondHalf);
    firstHalf.push(...arr2);
    return firstHalf.concat(secondHalf);
}

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));         // ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(tuckIn([15,150], [45, 75, 35]));                   // ➞ [15, 45, 75, 35, 150]
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));              // ➞ [[1, 2], [3, 4], [5, 6]]

//REFACTORED
//only works if arr1.length = 2
// function tuckIn(arr1, arr2) {
//     return [arr1[0], ...arr2, arr1[1]]
// }

//-------------------------------------------------------------------------------------------------------------------

//REFACTORED FROM ABOVE
// function reverse(bool) {
//     if (typeof bool !== 'boolean') {
//         return "boolean expected";
//     } else {
//         return !bool;
//     }
// }

//-------------------------------------------------------------------------------------------------------------------

function increment(num){
    if (num % 2 === 0){
        return num - 1;
    } else {
        return num + 1;
    }
}
function transform(arr) {
    return arr.map(num => increment(num));
}

//-------------------------------------------------------------------------------------------------------------------

function multiplyByLength(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] *= arr.length;
    }
    return arr
}

//REFACTORED
// function multiplyByLength(arr) {
//     return arr.map(x => x * arr.length);
// }

//-------------------------------------------------------------------------------------------------------------------

function canCapture([yourRook, opponentsRook]) {
    let myRook = yourRook.split('');
    let otherRook = opponentsRook.split('');
    return myRook[0] === otherRook[0] || myRook[1] === otherRook[1];
}

//REFACTORED
// function canCapture([yourRook, opponentsRook]) {
//     return ((yourRook.split('')[0] === opponentsRook.split('')[0]) || yourRook.split('')[1] === opponentsRook.split('')[1]);
// }

//-------------------------------------------------------------------------------------------------------------------

function existsHigher(arr, n) {
    return Math.max(...arr) >= n;
}

//-------------------------------------------------------------------------------------------------------------------

function difference(nums) {
    nums.sort((a, b) => a - b);
    let myArray = [nums[0], nums[nums.length - 1]];
    return myArray[1] - myArray[0];
}

//REFACTORED
// function difference(nums) {
//     return Math.max(...nums) - Math.min(...nums)
// }

//-------------------------------------------------------------------------------------------------------------------

function AlphabetSoup(str) {
    return str.split('').sort().join('');
}

//-------------------------------------------------------------------------------------------------------------------

function removeVowels(str) {
    return str.replace(/[aeiou]/g, '')
}

//-------------------------------------------------------------------------------------------------------------------
