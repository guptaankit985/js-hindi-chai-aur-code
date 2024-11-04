### Code Explanation and Interview Notes

1. **Using `for...of` Loop:**

   ```javascript
   const arr = [1, 2, 3, 4, 5];

   for (const num of arr) {
       // console.log(num); // Outputs each number in arr
   }

   const greetings = "Hello world!";
   for (const greet of greetings) {
       // console.log(`Each char is ${greet}`); // Outputs each character in greetings
   }
   ```
   - **Explanation:** The `for...of` loop is used to iterate over iterable objects like arrays and strings. In the example, it loops through the numbers in `arr` and each character in `greetings`.
   - **Interview Note:** Understanding when to use `for...of` versus `for...in` is crucial. `for...of` iterates over values, while `for...in` iterates over keys (or property names) of an object.

2. **Working with Maps:**

   ```javascript
   const map = new Map();
   map.set('IN', "India");
   map.set('USA', "United States of America");
   map.set('Fr', "France");
   map.set('IN', "India"); // This will overwrite the previous value for 'IN'

   // console.log(map); // Logs the map object

   for (const [key, value] of map) {
       // console.log(key, ':-', value); // Outputs each key-value pair
   }
   ```
   - **Explanation:** Maps hold key-value pairs and maintain the insertion order. When iterating with `for...of`, each entry is accessed as `[key, value]`.
   - **Interview Note:** Maps are often preferred over plain objects for key-value pairs due to their ability to use any type of key (not just strings and symbols) and their better performance for frequent additions and removals of key-value pairs.

3. **Iterating Over Objects:**

   ```javascript
   const myObject = {
       game1: 'NFS',
       game2: 'Spiderman'
   };

   // for (const [key, value] of myObject) {
   //     console.log(key, ':-', value); // This will cause an error
   // }
   ```
   - **Error Explanation:** Objects cannot be directly iterated with `for...of`. To iterate over objects, you need to use `Object.entries()`, `Object.keys()`, or `Object.values()`.
   - **Correct Usage Example:**
     ```javascript
     for (const [key, value] of Object.entries(myObject)) {
         console.log(key, ':-', value); // Outputs each key-value pair
     }
     ```
   - **Interview Note:** This is a common area of confusion, and interviewers may test your knowledge of object iteration methods. Knowing the correct methods to iterate over objects and the differences between them is important.

### Key Takeaways for Interviews:
- **Use `for...of`** to iterate over arrays and strings when you need to access values directly.
- **Maps** are useful for maintaining key-value pairs and are better than objects for certain use cases due to their flexibility and performance.
- **Objects** require specific methods (like `Object.entries()`) for iteration, and knowing how to handle these cases is vital for JavaScript proficiency.
