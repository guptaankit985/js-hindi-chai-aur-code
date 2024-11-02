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
