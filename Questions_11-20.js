// 11. Calculate the average of the numbers in an array of numbers

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let avg = arr.reduce((prev, next) => prev+next/2)
// console.log(avg);


// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

arr = [88, 88, 56, -91, -1, -99, -18, -8, -71, 88, -66, -61, -77, 5, 22, 68, -35, 44, 69, 72]

const newarr = arr.filter((value) => value >= 0);
// console.log(newarr);

// 13. Find the maximum number in an array of numbers

// console.log(Math.max(...arr));

// 14. Print the first 10 Fibonacci numbers without recursion

function printFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
// console.log(printFibonacci(10));

// 15. Create a function that will find the nth Fibonacci number using recursion

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

n = 10;
// console.log(`The ${n}th Fibonacci number is ${fibonacci(n)}`);


// 16. Create a function that will return a Boolean specifying if a number is prime

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(23));

// 17. Calculate the sum of digits of a positive integer number

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
// console.log(sumOfDigits(12));

// 18. Print the first 100 prime numbers

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function printFirstNPrimes(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
        if (isPrime(num)) {
            console.log(num);
            count++;
        }
        num++;
    }
}

// printFirstNPrimes(100);

// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function firstPrimesGreaterThanN(n, p) {
    primes = [];
    let num = n + 1;
    while (primes.length < p) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

n = 10, p = 5
primes = firstPrimesGreaterThanN(n, p);
console.log(primes); 

// 20. Rotate an array to the left 1 position
arr = [1,2,3,4,5,6]
k = arr.length

function rotate(arr) {
    
    let first = arr[0]
    for(let i =1; i<arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr[k-1] = first

    return arr
}
// console.log(rotate(arr));

