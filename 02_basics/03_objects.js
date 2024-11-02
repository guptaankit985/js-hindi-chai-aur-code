// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",   // Property name with space, accessed using quotes
    [mySym]: "mykey1",                 // Symbol property, accessed using Symbol variable
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Accessing properties using dot and bracket notation
// console.log(JsUser.email);          // Output: "hitesh@google.com"
// console.log(JsUser["email"]);       // Output: "hitesh@google.com" (bracket notation for dynamic keys)
// console.log(JsUser["full name"]);   // Output: "Hitesh Choudhary"
// console.log(JsUser[mySym]);         // Output: "mykey1" (access Symbol key)

// Modifying properties
JsUser.email = "hitesh@chatgpt.com";  // Update email property
// Object.freeze(JsUser);               // Freezes the object, making it immutable
JsUser.email = "hitesh@microsoft.com"; // Attempted modification after freeze (won't change if frozen)
// console.log(JsUser);                 // Shows that email remains "hitesh@chatgpt.com" if frozen

// Adding methods to the object
JsUser.greeting = function() {
    console.log("Hello JS user");
};
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

// Calling methods
console.log(JsUser.greeting());        // Output: "Hello JS user" (greeting method)
console.log(JsUser.greetingTwo());     // Output: "Hello JS user, Hitesh" (greetingTwo method)
