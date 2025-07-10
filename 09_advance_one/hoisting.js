shashank(); // This will work because function declarations are hoisted

console.log(shashank);
console.log(a);
var a = 10;
function shashank() {
  console.log("shashank");
}