// Dates

let myDate = new Date(); // Creates a new Date object with the current date and time
// console.log(myDate.toString()); // Logs: Current date and time in string format
// console.log(myDate.toDateString()); // Logs: Current date in a human-readable format (e.g., "Wed Sep 22 2024")
// console.log(myDate.toLocaleString()); // Logs: Current date and time in local format
// console.log(typeof myDate); // Logs: "object" (since myDate is an instance of the Date object)

// Creating specific dates
// let myCreatedDate = new Date(2023, 0, 23); // January 23, 2023 (months are 0-indexed)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // January 23, 2023, 05:03
// let myCreatedDate = new Date("2023-01-14"); // January 14, 2023
let myCreatedDate = new Date("01-14-2023"); // January 14, 2023 (format may depend on locale)
// console.log(myCreatedDate.toLocaleString()); // Logs: The date in local format (e.g., "1/14/2023, 12:00:00 AM")

let myTimeStamp = Date.now(); // Gets the current timestamp in milliseconds since January 1, 1970

// console.log(myTimeStamp); // Logs: Current timestamp in milliseconds
// console.log(myCreatedDate.getTime()); // Logs: Timestamp for myCreatedDate in milliseconds
// console.log(Math.floor(Date.now()/1000)); // Logs: Current timestamp in seconds (rounded down)

// Getting the current date
let newDate = new Date(); // Creates a new Date object
console.log(newDate); // Logs: Current date and time

console.log(newDate.getMonth() + 1); // Logs: Current month (0-indexed, so add 1 for human-readable month)
console.log(newDate.getDay()); // Logs: Day of the week (0 for Sunday, 1 for Monday, etc.)

// Using template literals to format the output
// `${newDate.getDay()} and the time `

// Formatting the date to get the weekday name
console.log(newDate.toLocaleString('default', {
    weekday: "long", // Gets the full name of the weekday
})); // Logs: Current day of the week (e.g., "Monday")
