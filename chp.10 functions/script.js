// CHP#10 FUNCTIONS



// QS.1 --> Sum of Two Numbers:
// Write a function that takes two numbers as arguments and returns their sum.
function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(5, 10);
console.log("Sum:", result);


// QS.2 --> Convert Celsius to Fahrenheit:
// Create a function that converts a temperature from Celsius to Fahrenheit using the formula F = C * 9/5 + 32.
function celsToFahr(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let tempCelsius = 25;  // Celsius temp.
let tempFahrenheit = celsToFahr(tempCelsius);
console.log(tempCelsius + "°C is equal to " + tempFahrenheit + "°F");




// QS.3 --> Check for Prime Number:
// Write a function that takes a number as
// input and returns true if the number is prime, and false otherwise.
function isPrime(number) {
    if (number <= 1) {
        return false; 
    }

    for (let i=2; i <= number/2; i++) {  // Loop jb tk chle ga jb tk,  number / 2
        if (number%i === 0) {
            return false; 
        }
    }
    return true; 
}


let num = 22; // checking
if (isPrime(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}




// QS.4 --> Reverse a String:
// Create a function that takes a string as input and returns the string reversed
function reverseString(str) {
    return str.split('').reverse().join(''); //split converts string into array, reverse hmare array ko revers krdeta hai. or .join, join krta hai without any spaces 
}


let myString = "Aiman Maroof";
let reversedString = reverseString(myString);
console.log("My String: " + myString);
console.log("Reversed String: " + reversedString);



// QS.5 --> Factorial of a Number:
// Write a function that calculates the factorial of a given number (e.g., factorial(5) should return 120).
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers"; // Negative numbers ka factorial defined nahi hota
    }
    if (n === 0 || n === 1) {
        return 1; // 0 or 1 ka factorial 1 hee hota hai
    }

    let result1 = 1; // iss variable mei value=1  store krwaya hai

    for (let i=2; i<=n; i++) {
        result1 *= i; // Multiply result by each number from 2 to n
    }
    return result1; // Return final factorial value
}


let number = 5;  
let result1 = factorial(number);
console.log("Factorial of " + number + " is: " + result1); // answer=120





// QS.6 --> Greet User (No Parameters):
// Write a function that prints a generic greeting message like "Hello, welcome!" without taking any parameters.

function greetUser() {
    console.log("Hello, welcome!");
}
greetUser();




// QS.7 --> Greet by Name (With Parameter):
// Create a function that takes a name as a parameter and prints a personalized greeting, e.g., "Hello, [name]!".
function greetWithName(name) {
    console.log(`Hello, ${name}!`);
}
greetWithName("Aiman");  



// QS.8 --> Sum of Two Numbers (With Parameters):
// Write a function that accepts two numbers as parameters and returns their sum.
function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result2 = sumOfTwoNumbers(5, 10);
console.log(`The sum is: ${result}`);  //15



// QS.9 --> Random Number Generator (No Parameters):
// Create a function that generates and returns a random number between 0 and 100. This function does not require any parameters.
function generateRandomNumber() {
    return Math.floor(Math.random() * 101); // Generates a number between 0 and 100. math.random decimal form mei 0 se 100 k beech number generate krega, lkn hume decimal form mei nhe chahye.phr hmne math.random ko 101 se multiply kiya taa ke hume koi bhi decimal form mei number mil jaye phr. uske baad math.floor ye decimal form se number ko round off krdega 1 whole number bnadega,
}

// Call the function 
const randomNumber = generateRandomNumber();
console.log(`Random number: ${randomNumber}`);




// QS.10 --> Check Age for Voting (With Parameter):
// Write a function that takes age as a parameter and checks if the person is eligible to vote (18 years or older). It should return true or false.
function checkVotingAge(age) {
    return age >= 18; 
}

// calling function 
const isEligible = checkVotingAge(9); // Example call
console.log(`Is the person eligible to vote? ${isEligible}`); // answer= false














