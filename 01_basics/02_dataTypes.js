"use strict"; // Enforces strict mode, making JavaScript adhere to newer standards. Helps catch errors, such as undeclared variables.

// alert(3 + 3) // This would display an alert in the browser, but it's not supported in Node.js environments

console.log(3 
    +
    3); // Logs: 6 (Adds 3 + 3; broken over lines for readability)

console.log("Hitesh"); // Logs: "Hitesh" (string)


// Declaring variables of different data types
let name = "hitesh";         // string
let age = 18;                // number
let isLoggedIn = false;      // boolean
let state;                   // undefined (variable declared but not initialized)

// JavaScript Data Types Overview:
// number     => Can hold values up to 2^53 - 1 (Safe integers range in JS)
// bigint     => For integers larger than the safe range of number
// string     => Text, declared with "" or ''
// boolean    => Holds true or false
// null       => Intentionally empty value (treated as an object for historical reasons)
// undefined  => Value not yet assigned
// symbol     => Unique identifiers, used for object properties to prevent name conflicts

// object     => Used for collections of data in key-value pairs

console.log(typeof undefined); // Logs: "undefined" (typeof undefined is undefined)
console.log(typeof null);      // Logs: "object" (typeof null returns "object" due to legacy behavior in JavaScript)
