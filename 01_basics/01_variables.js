// Declaring variables
const accountId = 144553; // `const` means accountId is immutable and cannot be reassigned
let accountEmail = "hitesh@google.com";
var accountPassword = "12345"; 
accountCity = "Jaipur";        // `var` or `let`/`const` keyword not used, making this a global variable
let accountState;

// Attempting to reassign `const` will throw an error
// accountId = 2 // Not allowed, as accountId is declared with const and is immutable

// Updating values for `let` and `var` declared variables
accountEmail = "hc@hc.com";         // `let` allows reassignment
accountPassword = "21212121";       // `var` also allows reassignment
accountCity = "Bengaluru";          // Reassigning global variable

console.log(accountId); // Logs: 144553 (constant value cannot be changed)

// Note on `var`:
// Prefer not to use `var` due to scope issues; `var` has function scope, not block scope, which can cause bugs in larger codebases.

/* Displaying values in a table format */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// Logs table format:
// ┌─────────┬───────────────┐
// │ (index) │   Values      │
// ├─────────┼───────────────┤
// │    0    │   144553      │
// │    1    │ "hc@hc.com"   │
// │    2    │ "21212121"    │
// │    3    │ "Bengaluru"   │
// │    4    │    undefined  │
// └─────────┴───────────────┘
