function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
// Output: 
// H
// I
// T
// E
// S
// H
// Note: sayMyName() simply prints each letter in "HITESH" on a new line.

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);
// Output: "Result: 8"
// Note: This is a basic function that adds two numbers. Important for interviews as it demonstrates return statements and function parameters.

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// Output: "hitesh just logged in"

// console.log(loginUserMessage())
// Output: "sam just logged in"
// Note: This function showcases default parameters (username = "sam") and early returns if no username is provided. Important in interviews to show understanding of default values and return behavior.

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// Output: [500, 2000]
// Note: Using the rest operator (`...num1`), this function collects additional arguments into an array. Valuable for understanding how to handle variable numbers of arguments.

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// Output: "Username is hitesh and price is undefined"

// handleObject({
//     username: "sam",
//     price: 399
// })
// Output: "Username is sam and price is 399"
// Note: In the first call, there’s a typo in `prices`, which should be `price`. This highlights debugging skills when dealing with property names in objects.

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// Output: 400
// Note: This function retrieves the second element in an array. This is simple yet shows an understanding of array indexing.

