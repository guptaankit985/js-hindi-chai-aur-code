//scope means where you can access a specific variable or a function in our code.
 //1:-what is the scope of the variable
 //2:- is b inside a scope of a function
 // scope is directly depended in lexical environment.
 //when you invoked a function an execution context is created
 //whenever a execution context is created a lexical environment is also created
 //lexical environment is the local memory along with the lexical environment of its parent.
 
function a(){
console.log(b)
 function c(){
        console.log(a)
 }
}

var b= 10;
a();


