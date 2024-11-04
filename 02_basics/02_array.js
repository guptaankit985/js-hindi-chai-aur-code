const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros) // Adds dc_heros as a single array element at the end of marvel_heros
// console.log(marvel_heros); // Logs: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); // Logs: "flash" (accessing the 2nd element in the nested dc_heros array)

// Concatenating both hero arrays
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // Logs: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Using spread operator to merge both arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros); // Logs: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Flattening a nested array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // Flattens all nested arrays completely
console.log(real_another_array); // Logs: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a value is an array
console.log(Array.isArray("Hitesh")); // Logs: false (string is not an array)
console.log(Array.from("Hitesh"));    // Logs: ["H", "i", "t", "e", "s", "h"] (creates an array from a string’s characters)
console.log(Array.from({name: "hitesh"})); // Logs: [] (empty array, because `Array.from` expects an array-like object)

// Creating an array from individual variables
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Logs: [100, 200, 300] (creates an array from given values)
