### Code Explanation and Interview Notes

1. **Using `while` Loop:**

   ```javascript
   let index = 0;
   // while (index <= 10) {
   //     console.log(`Value of index is ${index}`);
   //     index = index + 2; // Increments index by 2
   // }
   ```
   - **Explanation:** The `while` loop will continue to execute as long as the condition (`index <= 10`) is true. In this case, it prints the value of `index` and increments it by 2 each time, leading to the output of even numbers from 0 to 10.
   - **Output Example (if uncommented):**
     ```
     Value of index is 0
     Value of index is 2
     Value of index is 4
     Value of index is 6
     Value of index is 8
     Value of index is 10
     ```

2. **Iterating Over an Array with `while`:**

   ```javascript
   let myArray = ['flash', "batman", "superman"];
   let arr = 0;
   while (arr < myArray.length) {
       // console.log(`Value is ${myArray[arr]}`); // Outputs each value in myArray
       arr = arr + 1; // Increments arr to access the next element
   }
   ```
   - **Explanation:** This `while` loop iterates through `myArray`, logging each superhero's name. The loop continues until `arr` is no longer less than the length of `myArray`.
   - **Output Example (if uncommented):**
     ```
     Value is flash
     Value is batman
     Value is superman
     ```

3. **Using `do...while` Loop:**

   ```javascript
   let score = 11;

   do {
       console.log(`Score is ${score}`); // Executes at least once
       score++;
   } while (score <= 10);
   ```
   - **Explanation:** The `do...while` loop executes the code block once before checking the condition. In this case, since `score` starts at 11, the loop will execute only once, logging `Score is 11`, then stop because `score` is no longer less than or equal to 10.
   - **Output Example:**
     ```
     Score is 11
     ```

### Key Takeaways for Interviews:
- **`while` Loop**: This loop is used when the number of iterations is not known beforehand, and it checks the condition before each iteration.
- **Array Iteration**: Be careful to ensure your condition correctly prevents accessing out-of-bounds elements in an array.
- **`do...while` Loop**: This loop is useful when you want to ensure that the block of code executes at least once, even if the condition is false from the start.
- **Common Mistakes**: Watch for infinite loops caused by failing to update loop control variables. Ensure your loop conditions will eventually evaluate to false to avoid endless iterations.

These concepts are fundamental in programming, and understanding how to implement and differentiate these loops is often tested in coding interviews.
