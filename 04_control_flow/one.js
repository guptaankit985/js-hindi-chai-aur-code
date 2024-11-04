const temperature = 41;

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
// Explanation: Here, the code checks if temperature is exactly equal to 40, and since it's not, it logs "temperature is greater than 50". This may need a fix in the message to be more accurate.
// Interview Note: Understanding strict equality (===) is crucial, as it prevents type coercion. An interviewer might test your understanding of == versus === here.



    const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);

// Explanation: This code will throw a ReferenceError for power because it's defined with let inside the if block, limiting its scope.
// Interview Note: Interviewers often ask about block scope, especially with let vs var. let restricts power to the if block, making it inaccessible outside.


    const balance = 1000;

if (balance > 500) console.log("test"), console.log("test2");



// Explanation: This will execute both console.log statements if balance > 500. The comma operator here is unusual and not commonly used in production code.
// Interview Note: Interviewers might test if you understand concise conditionals and single-line expressions. Here, separating the logs without {} braces shows that both are executed as a single-line statement.


if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}

// Explanation: Given balance = 1000, the output will be "less than 1200". Note the second conditional for 750 appears twice, possibly by mistake.
// Interview Note: An interviewer might highlight the importance of eliminating redundant conditions for optimized code.


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// Explanation: The first condition 2 == 3 is false, so "Allow to buy course" won’t execute. However, loggedInFromGoogle || loggedInFromEmail is true, so it logs "User logged in".
// Interview Note: This is a good test of understanding && and || operators. && requires all conditions to be true, whereas || executes if any condition is true.





