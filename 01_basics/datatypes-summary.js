// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;            // Number type
const scoreValue = 100.3;    // Number type

const isLoggedIn = false;     // Boolean type
const outsideTemp = null;     // null type
let userEmail;                // undefined type (since it is declared but not assigned)

// Symbol is a unique and immutable data type used as identifiers for object properties
const id = Symbol('123');               // Symbol type
const anotherId = Symbol('123');        // Symbol type (different from 'id' despite having the same description)

console.log(id === anotherId);          // false; Symbols are unique even if they have the same description
// Note: Symbols are used to create unique property keys that won't collide with other keys.


// const bigNumber = 3456543576654356754n; // BigInt type (commented out, but would be a BigInt)

// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array type
let myObj = {
    name: "hitesh",   // Object with properties
    age: 22,
};

const myFunction = function() {
    console.log("Hello world"); // Function type
};

console.log(typeof anotherId); // "symbol"; returns the type of 'anotherId' variable

// Note: 'typeof' is a unary operator that returns a string indicating the type of the unevaluated operand.
// In this case, it will return "symbol" because 'anotherId' is a Symbol.
