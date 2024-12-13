// 41. Create a function to calculate the distance between two points defined by their x, y coordinates

function calculateDistance(x1, y1, x2, y2) {
    const dX = x2 - x1;
    const dY = y2 - y1;
    return Math.sqrt(dX * dX + dY * dY);
}


x1 = 3, y1 = 4;
x2 = 7, y2 = 1;
distance = calculateDistance(x1, y1, x2, y2);
// console.log(distance); 

// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance <= (r1 + r2);
}

x1 = 0, y1 = 0, r1 = 5;
x2 = 7, y2 = 0, r2 = 3;
intersecting = areCirclesIntersecting(x1, y1, r1, x2, y2, r2);
// console.log(intersecting); 


// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number

function extractColumn(matrix, columnIndex) {
    return matrix.map(row => row[columnIndex]);
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const columnIndex = 1;
const column = extractColumn(matrix, columnIndex);
// console.log(column); 

// 44. Create a function that will convert a string containing a binary number into a number

function binaryToDecimal(binaryString) {
    return parseInt(binaryString, 2);
}

const binaryString = "1101";
const decimalNumber = binaryToDecimal(binaryString);
// console.log(decimalNumber); 

// 45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)

function sumJaggedArray(arr) {
    let sum = 0;

    function recursiveSum(subArray) {
        for (let element of subArray) {
            if (Array.isArray(element)) {
                recursiveSum(element);
            } else if (typeof element === 'number') {
                sum += element;
            }
        }
    }

    recursiveSum(arr);
    return sum;
}

jaggedArray = [1, [2, 3], [4, [5, 6]], 7, [[8], 9]];
totalSum = sumJaggedArray(jaggedArray);
// console.log(totalSum); 

// 46. Find the maximum number in a jagged array of numbers or array of numbers



// 47. Deep copy a jagged array with numbers or other arrays in a new array


// 48. Create a function to return the longest word in a string

function longestWord(str) {
    arrOfStr = str.split(" ");
    return arrOfStr.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
}

const str = "Best program of the decade";
console.log(longestWord(str)); 

// 49. Shuffle an array of strings

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const strings = ["apple", "banana", "cherry", "date", "elderberry"];
const shuffledStrings = shuffleArray(strings);
console.log(shuffledStrings); 

// 50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.

function generateUniqueRandomNumbers(n) {
    numbers = Array.from({ length: n }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}


n = 10;
randomNumbers = generateUniqueRandomNumbers(n);
console.log(randomNumbers); 

// 51. Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.


// 52. Calculate Fibonacci(500) with high precision (all digits)

function fibonacci(n) {
    let a = BigInt(0), b = BigInt(1);
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}


fib500 = fibonacci(500);
console.log(fib500.toString()); 


// 53. Calculate 70! with high precision (all digits)

function factorial(n) {
    let result = BigInt(1);
    for (let i = BigInt(2); i <= n; i++) {
        result *= i;
    }
    return result;
}

fact70 = factorial(70);
console.log(fact70.toString()); 