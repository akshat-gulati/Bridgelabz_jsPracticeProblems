// 21. Rotate an array to the right 1 position

arr = [1,2,3,4,5,6,7,8]
function rotateRightBy1(arr) {
    n = arr.length
    arr.unshift(arr[n-1])
    arr.pop()
    console.log(arr);
}

// 22. Reverse an array

arr = [1,2,3,4,5,6,7,8]
function reverseArr(arr) {
    arr = arr.reverse()
    console.log(arr);
}

// 23. Reverse a string

str = "Nitin"
function reverseStr(str) {
    newStr = ""
    for(let i = str.length -1; i>=0 ; i--){
        newStr += str.charAt(i)
    }
    console.log(newStr);
    
}

// reverseStr(str)


// 24. Create a function that will merge two arrays and return the result as a new array

function mergeArr(arr1, arr2) {
    return arr1.concat(arr2)
}

// console.log(mergeArr([1,2,3,4,5], [6,7,8,9,10]));


// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function symmetricDifference(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let result = [];

    for (let num of set1) {
        if (!set2.has(num)) {
            result.push(num);
        }
    }

    for (let num of set2) {
        if (!set1.has(num)) {
            result.push(num);
        }
    }

    return result;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [4, 5, 6, 7, 8, 9, 0, 11, 22, 33];

// console.log(symmetricDifference(arr1, arr2));


// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.

arr1 = [1, 2, 3, 4, 5, 6, 7];
arr2 = [4, 5, 6, 7, 8, 9, 0, 11, 22, 33];

function notInSecond(arr1, arr2) {
    result = []
    set = new Set(arr2)

    for(let i =0; i<arr1.length; i++){
        if (!set.has(arr1[i])) {
            result.push(arr1[i])
        }
    }

    return result
}

// console.log(notInSecond(arr1, arr2));

// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

arr = [1, 2, 3, 4, 5, 6, 7,4, 5, 6, 7, 8, 9, 0, 11, 22, 33 ]

function distinct(arr) {
    set = new Set()
    result = []
    for(let i =0; i<arr.length; i++){
        if (!set.has(arr[i])) {
            set.add(arr[i])
            result.push(arr[i])

        }
    }
    console.log(result);
}

// distinct(arr)

// 28. Calculate the sum of first 100 prime numbers and return them in an array

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function sumFirstNPrimes(n) {
    let count = 0;
    let num = 2;
    let sum = 0
    while (count < n) {
        if (isPrime(num)) {
            sum += num
            count++;
        }
        num++;
    }
    console.log(sum);
    
}

sumFirstNPrimes(100)

// 29. Print the distance between the first 100 prime numbers

// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.


let num1 = "123456789012345678901234567890";
let num2 = "987654321098765432109876543210";

a = parseInt(num1)
b = parseInt(num2)
c = a+b
console.log(c.toString());
