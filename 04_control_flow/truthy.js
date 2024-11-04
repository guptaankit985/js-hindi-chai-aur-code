### Code Explanation and Interview Notes:

1. **Falsy and Truthy Values:**

   ```javascript
   const userEmail = [];
   if (userEmail) {
       console.log("Got user email");
   } else {
       console.log("Don't have user email");
   }
   ```
   - **Output:** `"Got user email"`
   - **Explanation:** Although `userEmail` is an empty array, it's considered a "truthy" value in JavaScript, so the `if` condition passes.
   - **Interview Note:** This is an example of truthy and falsy values. An empty array (`[]`) and an empty object (`{}`) are truthy, which can be surprising for beginners.

2. **Checking for an Empty Array:**

   ```javascript
   if (userEmail.length === 0) {
       console.log("Array is empty");
   }
   ```
   - **Explanation:** This condition explicitly checks if `userEmail` is empty by looking at its `length`.
   - **Interview Note:** Understanding `.length` to verify empty arrays is crucial. Many developers mistakenly think `if (array)` will verify non-emptiness, but it only checks if `array` is defined.

3. **Checking for an Empty Object:**

   ```javascript
   const emptyObj = {};
   if (Object.keys(emptyObj).length === 0) {
       console.log("Object is empty");
   }
   ```
   - **Output:** `"Object is empty"`
   - **Explanation:** `Object.keys(emptyObj).length` returns `0` if there are no properties in the object, confirming it’s empty.
   - **Interview Note:** Using `Object.keys().length` is a practical way to verify an empty object, as `if (obj)` only checks if `obj` exists.

4. **Nullish Coalescing Operator (`??`):**

   ```javascript
   let val1;
   val1 = null ?? 10 ?? 20;
   console.log(val1);
   ```
   - **Output:** `10`
   - **Explanation:** The `??` operator returns the first defined value (non-`null` and non-`undefined`) from the left. Since `null` is encountered first, it moves to `10`, which is defined.
   - **Interview Note:** An interviewer might assess your understanding of `??` vs. `||`. The `??` operator only skips `null` and `undefined`, while `||` skips all falsy values (like `0` and `""`).

5. **Ternary Operator:**

   ```javascript
   const iceTeaPrice = 100;
   iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
   ```
   - **Output:** `"more than 80"`
   - **Explanation:** The ternary operator is a shorthand for `if-else`. Since `iceTeaPrice` is greater than 80, it prints `"more than 80"`.
   - **Interview Note:** Ternary operators are useful for concise conditions but can be hard to read if nested or overused. Be ready to discuss scenarios where ternaries make code more readable.
