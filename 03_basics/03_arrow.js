const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // Logs the username
        console.log(this); // Logs the entire user object
    }
}

// user.welcomeMessage(); // Output: "hitesh , welcome to website" and logs the user object
// user.username = "sam"; // Changes the username property to "sam"
// user.welcomeMessage(); // Output: "sam , welcome to website" and logs the updated user object

// console.log(this); // In a non-strict mode, 'this' would refer to the global object (or `window` in a browser). In strict mode, it would be undefined.

// function chai() {
//     let username = "hitesh";
//     console.log(this.username); // Output: undefined (this refers to the global object, and there is no 'username' defined globally)
// }

// chai(); // Calls the function, but outputs undefined

// const chai = function() {
//     let username = "hitesh";
//     console.log(this.username); // Output: undefined (similar reasoning as above)
// }

const chai = () => {
    let username = "hitesh";
    console.log(this); // Output: the surrounding context's 'this' (likely the global object or module in a non-strict environment)
}

// chai(); // Call the arrow function, outputs the surrounding 'this'

// Arrow functions do not have their own 'this'; they inherit it from the enclosing lexical context.

// const addTwo = (num1, num2) => {
//     return num1 + num2; // Simple function that returns the sum of num1 and num2
// }

// const addTwo = (num1, num2) => num1 + num2; // Implicit return syntax, same as above

// const addTwo = (num1, num2) => (num1 + num2); // Returns the sum within parentheses, also valid

const addTwo = (num1, num2) => ({ username: "hitesh" }); // This returns an object with a single property 'username'

console.log(addTwo(3, 4)); // Output: { username: "hitesh" }

// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach(); // Note: this line is commented out, but if called, it would result in an error since forEach requires a callback function as an argument.


// Notes:
// this Context:

// In the context of methods (like welcomeMessage), this refers to the object the method is called on (the user object). When calling user.welcomeMessage(), this.username correctly accesses the username property of user.
// In standalone functions like chai, this refers to the global object in non-strict mode, hence this.username outputs undefined since there's no global username.
// Arrow functions do not have their own this context; they inherit it from the parent scope. Thus, calling chai would log the context in which it was defined.
// Arrow Functions:

// The examples of addTwo show how to use arrow functions for concise syntax. The last version returns an object literal, which requires parentheses to distinguish it from a block statement.
// Array Methods:

// The commented-out myArray.forEach() line is not functional as it requires a callback function. If called without a callback, it would throw an error. You could use it like so: myArray.forEach(item => console.log(item)); to log each item in the array.
// Output of Functions:

// When calling addTwo(3, 4), it outputs { username: "hitesh" } because that's what is defined in the function's return statement. The numbers passed as parameters are not used in this case.





