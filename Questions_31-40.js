// 31. Create a function that will return the number of words in a text

let str = "Best program of the decade goes to this one";
function numberWords(str) {
    let count = 1;
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) == " " && str.charAt(i - 1) != " ") {
            count++;
        }
    }
    return count;
}

console.log(numberWords(str));

// 32. Create a function that will capitalize the first letter of each word in a text

function frstCapital(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str.charAt(i - 1) === " ") {
            newStr += str.charAt(i).toUpperCase();
        } else {
            newStr += str.charAt(i);
        }
    }
    return newStr;
}

str = "sam is a good boy";
console.log(frstCapital(str));


// 33. Calculate the sum of numbers received in a comma delimited string

str = "1.5,2.3,4.7,3.1";

function sumOfNumbers(str) {
    let numArray = str.split(",");
    
    let sum = numArray.reduce((acc, num) => acc + parseFloat(num), 0);
    
    return sum;
}

str = "1.5,2.3,4.7,3.1";
// console.log(sumOfNumbers(str));

// 34. Create a function that returns an array with words inside a text.

str = "This is a best program"
function strToArr(str) {
    arr = str.split(" ")
    console.log(arr);
}

// 35. Create a function to convert a CSV text to a “bi-dimensional” array

function csvToArr(csvText) {
    
    const rows = csvText.split('\n');
    return rows.map(row => row.split(','));
}

const csvText = `name,age,city
Akshat,22,New York
Sam,85, surat
Kritika,99,Bihar`;

const array = csvToArr(csvText);
// console.log(array);

// 36. Create a function that converts a string to an array of characters


function strToArrChr(str) {
    n = str.length
    let ans = []
    for(let i =0; i<n; i++){
        if (str.charAt(i) != " ") {
            ans.push(str.charAt(i))
        }
    }
    return ans
}
str = "Hi Hello "
console.log(strToArrChr(str));

// 37. Create a function that will convert a string in an array containing the ASCII codes of each character

function stringToAsciiArray(str) {
    return str.split('').map(char => char.charCodeAt(0));
}
text = "Hello, world!";
asciiArray = stringToAsciiArray(text);
// console.log(asciiArray); 


// 38. Create a function that will convert an array containing ASCII codes in a string

function asciiArrayToString(asciiArray) {
    return asciiArray.map(code => String.fromCharCode(code)).join('');
}

asciiArray = [72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33];
text = asciiArrayToString(asciiArray);
console.log(text); 


// 39. Implement the Caesar cypher



// 40. Implement the bubble sort algorithm for an array of numbers

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }

    return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);
// console.log(sortedNumbers); 