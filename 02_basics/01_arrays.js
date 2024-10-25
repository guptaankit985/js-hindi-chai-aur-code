// Initializing arrays
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]); // Logs: 1 (the element at index 1 in myArr)

// Array methods

// myArr.push(6) // Adds 6 at the end of myArr, resulting in [0, 1, 2, 3, 4, 5, 6]
// myArr.push(7) // Adds 7 at the end, resulting in [0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop()   // Removes the last element (7), resulting in [0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(9) // Adds 9 at the beginning, resulting in [9, 0, 1, 2, 3, 4, 5, 6]
// myArr.shift()    // Removes the first element (9), resulting in [0, 1, 2, 3, 4, 5, 6]

// console.log(myArr.includes(9)); // Logs: false (9 was removed by shift, so it’s not in myArr)
// console.log(myArr.indexOf(3));  // Logs: 3 (3 is at index 3 in myArr)

// const newArr = myArr.join() // Joins elements into a string, separated by commas

// console.log(myArr);  // Logs: [0, 1, 2, 3, 4, 5] (the current myArr state)
// console.log(newArr); // Logs: "0,1,2,3,4,5" (string of array elements joined by commas)

// slice, splice

console.log("A ", myArr); // Logs: "A ", [0, 1, 2, 3, 4, 5] (initial state of myArr)

const myn1 = myArr.slice(1, 3); // slice extracts elements from index 1 to 3 (not including 3)
console.log(myn1);               // Logs: [1, 2] (elements from index 1 to 2)
console.log("B ", myArr);        // Logs: "B ", [0, 1, 2, 3, 4, 5] (slice does not modify myArr)

// Using splice to remove elements

const myn2 = myArr.splice(1, 3); // splice removes 3 elements starting from index 1
console.log("C ", myArr);        // Logs: "C ", [0, 4, 5] (myArr is modified by splice)
console.log(myn2);               // Logs: [1, 2, 3] (elements removed from myArr by splice)
