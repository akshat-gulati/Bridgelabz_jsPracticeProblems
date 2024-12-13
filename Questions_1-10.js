// 1. Print numbers from 1 to 10

for(let i = 1; i<=10; i++){
    // console.log(i);
}

// 2. Print the odd numbers less than 100

for(let i = 1; i<100; i++){
    if (i%2 != 0) {
        // console.log(i);
    }
}

// 3. Print the multiplication table with 7

for(let i =1; i<=10; i++){
    // console.log("7 x " + i + " = " + 7*i);
}


// 4. Print all the multiplication tables with numbers from 1 to 10

function table() {
    for(let i = 1; i<=10; i++){
    
        console.log("Printing table for: " + i);
    
        for(let j = 1; j<=10; j++){
            console.log(i + " x " + j + " = " + i*j);
        }
    }
}

// table()

// 5. Calculate the sum of numbers from 1 to 10
let sum = 0
for(let i = 1; i<=10; i++){
    sum += i
}
// console.log(sum);


// 6. Calculate 10!

let multiplication = 1

for (let i =1; i<=10; i++){
    multiplication *= i
}
// console.log(multiplication);



// 7. Calculate the sum of even numbers greater than 10 and less than 30

let even = 0

for(let i = 10; i<30; i++){
    if (i%2==0) {
        even += i
    }
}
// console.log(even);


// 8. Create a function that will convert from Celsius to Fahrenheit


function cToF(temp) {
    return temp * (9/5) + 32
}

// console.log(cToF(38));


// 9. Create a function that will convert from Fahrenheit to Celsius

function fToC(temp) {
    return  (temp - 32) * 5/9
}
// console.log(fToC(100.4));


// 10. Calculate the sum of numbers in an array of numbers
sum = 0
arr = []
for(let i = 1; i<=10; i++){
    arr.push(i)
}
// console.log(arr);

sum = arr.reduce((accumulator, value) => accumulator + value, 0);
// console.log(sum);



