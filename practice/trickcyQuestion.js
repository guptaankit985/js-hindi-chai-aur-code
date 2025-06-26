// //Convert an array of numbers into their squares using .map().
// const arr = [1, 2, 3, 4, 5];
// const squares = arr.map((n) => n * n);
// console.log(squares); // [ 1, 4, 9, 16, 25 ]

// //Extract only the names from an array of user objects.
// const users = [
//   {
//     name: "shashank",
//   },
//   {
//     name: "shakya",
//   },
// ];
// const extractName = users.map(user=>(user.name))
// console.log(extractName)

// // Add a new property isActive: true to each object in an array.

// const newProperty=users.map(p=>({ ...users, isActive:true}))
// console.log(newProperty)

// //removed duplicate string

// const str = 'shashank'
// let reversed = ''
// for (i =0;i<str.length; i++){
//    if(str[i]!=='s'){
//         reversed = reversed+ str[i]
//    }
// }
// console.log(reversed)

// const str= [2,3, 4,3,3 ,5]
// let newStr=[];
// for(let i = 0 ; i < str.length ; i++){
//         if(str[i] === 2){
//                 newStr++;

//         }

// }
// console.log(newStr)

const arr = [{ name: "shashank" }, { name: "Lucky" }];
const newArr = arr.map((item) => {
  return item.name;
});
console.log(newArr);


