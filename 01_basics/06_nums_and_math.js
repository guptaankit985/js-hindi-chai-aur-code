const score = 400;
// console.log(score); // Logs: 400 (the value of the score variable)

const balance = new Number(100); // Creates a Number object
// console.log(balance); // Logs: [Number: 100] (object representation of the number)

// Getting the length of the string representation of the number
// console.log(balance.toString().length); // Logs: 3 (the string "100" has 3 characters)

// Formatting the number to one decimal place
// console.log(balance.toFixed(1)); // Logs: "100.0" (string representation with one decimal)

// Example of using a different number
const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // Logs: "123.9" (represents the number in 4 significant digits)

// Formatting a large number using locale settings
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // Logs: "10,00,000" (formatted for Indian locale)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Logging the Math object itself
// console.log(Math); // Logs: [Math object] (displays the Math object)

// Absolute value
// console.log(Math.abs(-4)); // Logs: 4 (absolute value of -4)

// Rounding functions
// console.log(Math.round(4.6)); // Logs: 5 (rounds to the nearest integer)
// console.log(Math.ceil(4.2));  // Logs: 5 (rounds up to the nearest integer)
// console.log(Math.floor(4.9)); // Logs: 4 (rounds down to the nearest integer)

// Minimum and maximum functions
// console.log(Math.min(4, 3, 6, 8)); // Logs: 3 (the smallest number)
// console.log(Math.max(4, 3, 6, 8)); // Logs: 8 (the largest number)

// Generating random numbers
console.log(Math.random()); // Logs: A random number between 0 (inclusive) and 1 (exclusive)

// Random number between 1 and 10
console.log((Math.random() * 10) + 1); // Logs: A random number between 1 and 11 (not inclusive of 11)

// Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Logs: A random integer between 1 and 10

const min = 10;
const max = 20;

// Random integer between 10 and 20 (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Logs: A random integer between 10 and 20
