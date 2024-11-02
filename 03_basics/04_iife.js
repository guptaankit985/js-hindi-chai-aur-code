// Immediately Invoked Function Expressions (IIFE)

// The following is a named IIFE. It defines a function called 'chai' and invokes it immediately.
(function chai() {
    console.log(`DB CONNECTED`); // Output: "DB CONNECTED"
})();

// This is an anonymous arrow function IIFE that takes a parameter 'name' and invokes it with the argument 'hitesh'.
((name) => {
    console.log(`DB CONNECTED TWO ${name}`); // Output: "DB CONNECTED TWO hitesh"
})('hitesh');


// // Notes:
// IIFE Overview:

// IIFE is a function that is defined and executed immediately. This pattern is often used to create a private scope for variables and avoid polluting the global namespace.
// Named vs. Anonymous IIFE:

// The first IIFE is a named function expression. While the name (chai) is not accessible outside the function, it can be useful for debugging (e.g., stack traces).
// The second IIFE is an anonymous arrow function. It takes an argument (name) and is invoked right after its definition, which allows passing parameters directly to it.
// Output:

// The first IIFE outputs "DB CONNECTED", indicating that the function executed successfully.
// The second IIFE outputs "DB CONNECTED TWO hitesh" because it takes the string 'hitesh' as an argument and includes it in the logged message.
// Use Cases:

// IIFEs are commonly used for encapsulating code, avoiding variable name clashes, and executing initialization code without leaving a trace in the global scope. They are particularly useful in modular JavaScript development and in scenarios where you need to create private variables.










