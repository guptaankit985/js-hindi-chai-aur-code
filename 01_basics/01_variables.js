// // const accountId = 144553
// // let accountEmail = "hitesh@google.com"
// // var accountPassword = "12345"
// // accountCity = "Jaipur"
// // let accountState;

// // // accountId = 2 // not allowed

// // accountEmail = "hc@hc.com"
// // accountPassword = "21212121"
// // accountCity = "Bengaluru"

// // console.log(accountId);

// // /*
// // Prefer not to use var
// // because of issue in block scope and functional scope
// // */

// // console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// console.log(a)
// let a =5;

// // if (true) {
// //   let y = 20;
// //   console.log(y); // 20
// // }
// // console.log(y); // ReferenceError: y is not defined

// //  let z = 30;
// // z = 40; // Allowed
// // console.log(z); // 40

// // const obj = { name: "Shashank" };
// // obj.name = "Shakya"; // Allowed
// // console.log(obj); // { name: "Shakya" }

// // obj = {}; // TypeError: Assignment to constant variable

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }


// for (var i = 0; i<5; i++){
//         (function(j){
//                 setTimeout (() => console.log(j), 1000)
//         })(i)
// }


const arr =['banana', 'apple', 'orange', 'mango'];
 arr.forEach((item, index) => {
         setTimeout(()=> console.log(item, index), 4000)
 });