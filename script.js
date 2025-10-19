console.log("hisashiburi dana")

// Question 1: Check all values in an array
// Write a function called all which accepts an array and
// a callback and returns true if every value in the array 
// returns true when passed as parameter to the callback 
// function

let lessThanSeven = all([1, 2, 8 ], function(num) {
    return num < 7;
})

function all(arr, callback) {
    if(arr.length === 0) return true;
    const copy = arr.slice();

    if(callback(copy[0])){
        copy.shift();
        return all(copy, callback);
    }
    return false;
}

console.log(lessThanSeven);

// Question 2: Product of an array
// Write a function called productOfArray which takes in 
// an array of numbers and returns the product of them all
// let six = productOfArray([1,2,3]) // 6
// let sixty = productOfArray([1,2,3,10]) // 60

let six = productOfArray([1,2,3]) // 6
let sixty = productOfArray([1,2,3,10]) // 60
console.log(six, sixty);

function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr.shift() * productOfArray(arr);
}

// Question 3: Search JS object
// Write a function called contains that searches for a 
// value in a nested object. It returns true if the object 
// contains that value.

let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false
let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt, doesntHaveIt);

function contains(object, searchValue) {
    if(typeof object !== "object" || object === null) {
        return object === searchValue;
    }
    
    for(const value of Object.values(object)) {
        if(contains(value, searchValue)) {
            return true;
        }
    }
    return false;
}




// Question 4: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the 
// total number of integers stored inside this array
// let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);

function totalIntegers(arr) {
    if(arr.length === 0) return 0
        let total = 0;
        let first = arr.shift();

        if(Array.isArray(first)) {
            total += totalIntegers(first);
        } else if (Number.isInteger(first)) {
            total += 1;
        }
        return total + totalIntegers(arr);
}

 // Question 5:
// Write a function that sums squares of numbers in list 
// that may contain more lists
// console.log(SumSquares([1,2,3])); // 14 
// console.log(SumSquares([[1,2],3])); // 14
// console.log(SumSquares([[[[[[[[[1]]]]]]]]])); // 1
// console.log(SumSquares([10,[[10],10],[10]])); // 400
console.log(SumSquares([1,2,3])); // 14 
console.log(SumSquares([[1,2],3])); // 14
console.log(SumSquares([[[[[[[[[1]]]]]]]]])); // 1
console.log(SumSquares([10,[[10],10],[10]])); // 400

function SumSquares(arr) {
    if(arr.length === 0) return 0;
    let total = 0;

    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            total += SumSquares(arr[i]);
        } else {
            total += arr[i] * arr[i];
        }
    }
    return total;
}

// Question 6:
// The function should return an array containing 
// repetitions of the number argument. For instance, 
// replicate(3, 5) should return [5,5,5]. If the times 
// argument is negative, return an empty array.
// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

function replicate(times, number) {
    if(times <= 0) return [];

    return [number].concat(replicate(times - 1, number));
}
