// Hoisting in JavaScript
// Variables and function declarations are hoisted to the top of their scope
// Variables declared with var are hoisted, but not initialized
// Function declarations are hoisted and can be called before they are defined
// Example of hoisting with variables and functions
shashank(); // This will work because function declarations are hoisted

console.log(shashank);
console.log(a);
var a = 10;
function shashank() {
  console.log("shashank");
}
