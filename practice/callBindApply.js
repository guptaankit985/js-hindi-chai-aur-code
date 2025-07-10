// Use Cases:

// ✅ call(): When you need to execute a function with arguments individually.
// ✅ apply(): When you need to execute a function but pass arguments as an array.
// ✅ bind(): When you need to create a function with a fixed this value and call it later.

// Feature	call()	apply()	bind()
// Purpose	Invokes a function with a specified this value and arguments passed individually.	Invokes a function with a specified this value and arguments passed as an array.	Returns a new function with a bound this value, but does not execute it immediately.
// Execution	Executes the function immediately.	Executes the function immediately.	Returns a new function that can be invoked later.
// Arguments Passing	Arguments are passed individually (comma-separated).	Arguments are passed as an array.	Arguments are passed individually when the returned function is called.
// Use Case	When you need to invoke a function immediately with a custom this value and specific arguments.	When you need to invoke a function immediately with a custom this value and an array of arguments.	When you need to store a function with a specific this value for later use.

const person = {
  name: "Shashank",
};

function greet(age, city) {
  console.log(`Hello, my name is ${this.name}, I am ${age} years old from ${city}.`);
}

// Using call
greet.call(person, 25, "Delhi"); 
// Output: Hello, my name is Shashank, I am 25 years old from Delhi.
