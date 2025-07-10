//closure is a function together like bundle it is lexical environment or --
//function along with lexical scope forms a closure

function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  a=100
  return y;
}
var a= x();

console.log(a)