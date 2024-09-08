//  here 2 is truthy value so  ajay print hoga
console.log(2 && "ajay")

// here 0 is a falsy value so 0  print hoga
console.log(0 && "ajay")

// 0  print hoga
console.log(45 && 0 && "third")

// agar falsy value na mile to last condition print hogi  third print hoga
console.log(45 && " " && "third")


console.log(45 && " " && "third" && "fourth")