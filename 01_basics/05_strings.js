const name = "hitesh";
const repoCount = 50;

// Concatenation using template literals
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// Logs: "Hello my name is hitesh and my repo count is 50"

// Creating a new String object
const gameName = new String('hitesh-hc-com');

// console.log(gameName[0]);           // Logs: "h" (the first character of the string)
// console.log(gameName.__proto__);     // Logs: The String prototype, showing available methods and properties

// console.log(gameName.length);        // Logs: 13 (total characters in "hitesh-hc-com")
// console.log(gameName.toUpperCase()); // Logs: "HITESH-HC-COM" (all uppercase)

console.log(gameName.charAt(2));      // Logs: "t" (character at index 2)
console.log(gameName.indexOf('t'));   // Logs: 2 (first occurrence of 't' in the string)

// Extracting a portion of the string using `substring`
const newString = gameName.substring(0, 4);
console.log(newString);               // Logs: "hite" (substring from index 0 to 4, excluding 4)

// Extracting using `slice` with negative index
const anotherString = gameName.slice(-8, 4); // Since slice with a positive end index only works if start < end
console.log(anotherString);           // Logs: "" (empty string because -8 to 4 is invalid here)

// Removing whitespace from a string
const newStringOne = "   hitesh    ";
console.log(newStringOne);            // Logs: "   hitesh    "
console.log(newStringOne.trim());     // Logs: "hitesh" (whitespace trimmed from both ends)

// Replacing a substring
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')); // Logs: "https://hitesh.com/hitesh-choudhary" (replaces %20 with -)

// Checking if a substring is present
console.log(url.includes('sundar'));  // Logs: false (the substring "sundar" is not in the URL)

// Splitting the string based on a delimiter
console.log(gameName.split('-'));     // Logs: [ "hitesh", "hc", "com" ] (array created by splitting on '-')
