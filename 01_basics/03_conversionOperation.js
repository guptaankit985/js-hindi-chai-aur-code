let score = "hitesh";

// console.log(typeof score); // Logs: "string" (score is a string)
// console.log(typeof(score)); // Alternative syntax, also logs: "string"

let valueInNumber = Number(score); // Attempts to convert "hitesh" to a number, which fails
// console.log(typeof valueInNumber); // Logs: "number" (Number conversion returns a number type)
// console.log(valueInNumber); // Logs: NaN (Not a Number, because "hitesh" can't be converted to a numeric value)

// Examples of Number conversions:
// "33" => 33
// "33abc" => NaN (invalid number format)
// true => 1; false => 0

let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn); // Non-empty strings are truthy
// console.log(booleanIsLoggedIn); // Logs: true

// Boolean conversion examples:
// 1 => true; 0 => false
// "" => false (empty string is falsy)
// "hitesh" => true (non-empty string is truthy)

let someNumber = 33;
let stringNumber = String(someNumber); // Converts number to string
// console.log(stringNumber); // Logs: "33" (as a string)
// console.log(typeof stringNumber); // Logs: "string"

// *********************** Operations ***********************

let value = 3;
let negValue = -value; // Negates the value
// console.log(negValue); // Logs: -3

// Arithmetic Operations
// console.log(2 + 2); // Logs: 4 (addition)
// console.log(2 - 2); // Logs: 0 (subtraction)
// console.log(2 * 2); // Logs: 4 (multiplication)
// console.log(2 ** 3); // Logs: 8 (exponentiation)
// console.log(2 / 3); // Logs: 0.666... (division)
// console.log(2 % 3); // Logs: 2 (remainder)

let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2; // Concatenates two strings
// console.log(str3); // Logs: "hello hitesh"

// String + Number operations:
// console.log("1" + 2); // Logs: "12" (string concatenation)
// console.log(1 + "2"); // Logs: "12" (string concatenation)
// console.log("1" + 2 + 2); // Logs: "122" (string concatenation from left to right)
// console.log(1 + 2 + "2"); // Logs: "32" (1+2 evaluated first, then concatenated with "2")

// Complex expressions
// console.log((3 + 4) * 5 % 3); // Logs: 2 (calculates (3+4) -> 7, 7*5 -> 35, 35 % 3 -> 2)

// Unary plus (converts to number)
// console.log(+true); // Logs: 1 (boolean true converts to 1)
// console.log(+"");   // Logs: 0 (empty string converts to 0)

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // Assigns 4 to num1, num2, and num3

let gameCounter = 100;
++gameCounter; // Increments gameCounter by 1
console.log(gameCounter); // Logs: 101
