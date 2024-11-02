// var c = 300 // This line is commented out, so 'c' will not be defined.
let a = 300; // 'a' is initialized with the value of 300
if (true) {
    let a = 10; // This 'a' is block-scoped, separate from the outer 'a'
    const b = 20; // 'b' is a constant, block-scoped variable
    // console.log("INNER: ", a); // Output: INNER: 10
}

// console.log(a); // Output: 300 (the outer 'a')
// console.log(b); // Error: 'b' is not defined (it's block-scoped)
// console.log(c); // Error: 'c' is not defined (it's commented out)

function one() {
    const username = "hitesh"; // 'username' is block-scoped within 'one'

    function two() {
        const website = "youtube"; // 'website' is block-scoped within 'two'
        console.log(username); // Output: "hitesh" (accessible due to closure)
    }
    // console.log(website); // Error: 'website' is not defined (it's not accessible here)

    two(); // Call to 'two', which logs "hitesh"
}

// one(); // Uncommenting this will call 'one' and execute the inner functions.

if (true) {
    const username = "hitesh"; // 'username' is block-scoped
    if (username === "hitesh") {
        const website = " youtube"; // 'website' is block-scoped
        // console.log(username + website); // Output: "hitesh youtube"
    }
    // console.log(website); // Error: 'website' is not defined (it's block-scoped)
}

// console.log(username); // Error: 'username' is not defined (it's block-scoped)

console.log(addone(5)); // Output: 6 (calls 'addone' function)

function addone(num) {
    return num + 1; // Returns the input number plus one
}

// addTwo(5); // Uncommenting this will cause an error because 'addTwo' is not defined yet

const addTwo = function (num) {
    return num + 2; // This is a function expression; 'addTwo' is not hoisted
};

// The call to addTwo() must be after its definition to work



// Notes:
// Block Scope: Variables declared with let and const are block-scoped, meaning they are only accessible within the block they are declared in. This is why the inner a and b are not accessible outside their respective blocks.

// Function Hoisting: Function declarations (like addone) are hoisted, meaning they can be called before their definition. However, function expressions (like addTwo) are not hoisted in the same way. This is why calling addTwo(5) before its declaration would result in an error.

// Closure: The inner function two has access to variables declared in its outer function one, demonstrating how closures work in JavaScript. This is why username can be logged in two.

// Undefined Variables: The commented-out lines for logging variables outside their scope (like b and c) would throw errors, highlighting the importance of variable scope.
