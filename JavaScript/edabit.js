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
console.log(largestSwap(15));
console.log(largestSwap(45));

