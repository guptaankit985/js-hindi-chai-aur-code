// // // const arr = [1,2,3,4,5,6,7,8,9,10];

// // // function findSecondLast (arr){
// // //     return arr[arr.length-2];
// // // }
// // // console.log(findSecondLast(arr));

// // // const arr = [ "animal" ];
// // // const secondLast = arr[arr.length - 2];
// // // console.log(secondLast);

// // // const numbers = 1;
// // // const string = "1";
// // // const boolean = true;
// // // const bigInt = 1234567890123456789012345678901234567890n;
// // // const undefinedValue = undefined;
// // // const nullValue = null;
// // // const symbol = Symbol("symbol");
// // // const functionValue = function () {};
// // // const object = { key: "value" };

// // // console.log(typeof numbers); // number
// // // console.log(typeof string); // string
// // // console.log(typeof boolean); // boolean
// // // console.log(typeof bigInt); // bigint
// // // console.log(typeof undefinedValue); // undefined
// // // console.log(typeof nullValue); // object
// // // console.log(typeof symbol); // symbol
// // // console.log(typeof functionValue); // function
// // // console.log(typeof object); // object
// // // console.log(typeof NaN); // number
// // // console.log(typeof Infinity); // number
// // // console.log(typeof -Infinity); // number
// // // console.log(typeof 1 / 0); // number
// // // console.log(typeof 0 / 0); // NaN
// // // console.log(typeof 1 / "a"); // NaN
// // // console.log(typeof "a" * 1); // NaN
// // // console.log(typeof "a" / 1); // NaN
// // // console.log(typeof "a" + 1); // string
// // // console.log(typeof "a" - 1); // number
// // // console.log(typeof "a" * 1); // number
// // // console.log(typeof "a" / 1); // number
// // // console.log(typeof "a" + "b"); // string
// // // console.log(typeof "a" - "b"); // NaN
// // // console.log(typeof "a" * "b"); // NaN
// // // console.log(typeof "a" / "b"); // NaN

// // // console.log('4' + 4); // 44
// // // console.log(1 + 4 + '4'); // 44
// // // console.log(4 + 4); // 8
// // // `console.log('4' - 4); `// 0
// // // console.log(4 - '4');
// // // console.log('4' - '4');
// // // console.log('4' * 4);
// // // console.log(4 * '4');
// // // console.log('4' * '4');
// // // console.log('4' / 4);
// // // console.log(4 / '4');
// // // console.log('4' + '4');

// // // console.log( typeof typeof 1); // string

// // // const number = [1,2,3,4,5,6]
// // // number[100] = 500
// // // console.log(number);

// // // const arr = [...'shashank']
// // // console.log(arr); // [ 's', 'h', 'a', 's', 'h', 'a', 'n', 'k' ]

// // console.log(parseInt('10+2'));
// // console.log(parseInt('7FMT'));
// // console.log(parseInt('MT7F'));

// // // // console.log('1'+1-'1')
// // // // // console.log('tilak'+'100')

// // // // // const a={}
// // // // // const b={
// // // // //     name:'shashank'
// // // // // }
// // // // // const c={
// // // // //     name :'shakya'
// // // // // }
// // // // //  a[b]={
// // // // //     name: 'ankit'
// // // // // }
// // // // //  a[c]={
// // // // //     name:'sir'
// // // // // }

// // // // // console.log(a[b])

// // // // // const arr = [1,2,3,4,5]
// // // // // const result = arr.map((e)=> {
// // // // //     return e>2
// // // // // })
// // // // // console.log(result)

// // // function greet(name, callback){
// // //     callback(`hello ${name}`)
// // // }
// // // greet('shahsank', console.log)

// // // const promises = new Promise((resolve, reject)=>{
// // //     let success = true
// // //     if(success){
// // //         resolve ('resolve')
// // //     }else{
// // //         reject ('reject')
// // //     }
// // // })
// // // promises.then((result)=> console.log(result))
// // // .catch((err)=> console.log(err))
// // // .finally(()=> console.log('completed'))

// // // function add(a){
// // //     return function (b){
// // //         return a + b
// // //     }
// // // }
// // // console.log(add(1)(2))
// // // const add = (a)=> (b) =>  a+b
// // // console.log(add(1)(2))
// // // const arr = [1,2,3,4,5]
// // // const result = arr.reduce((item, acc)=> item + acc)
// // // console.log(result)

// // async function getData(){
// //         let baseUrl = 'https://fakestoreapi.com/products';
// //         console.log(baseUrl)
// //         const data = await fetch(baseUrl)
// //         console.log(data)
// //         return data.json();
// //     }
// //     getData().then((result)=> console.log(result))
// //     .catch((err)=> console.log(err))

// // const items = ["apple", "banana", "apple" , "banana", "graphes"]
// // let count ={}
// // for(let item of items){
// //     if(count[item]){
// //         count[item] += 1;
// //     }else{
// //         count[item] = 1;
// //     }
// // }
// // console.log(count)

// const items = ['a','a','b','b','c']
// let count = {}
// for (i=0; i<items.length; i++){
//     const item = items[i]
//     if(count[item]){
//         count[item] ++
//     }else{
//         count[item] =1
//     }
// }
// console.log(count)

// // const items = [1,2,3,4,1,12,]
// // let count =[]
// // for(i=0; i<items.length; i++){
// //   if(items[i]===1){
// //     // count ++
// //     console.log(i)
// //   }

// // }
// // // console.log(count)

// const arr = [1,2,3]
// let reversed =[]
// let j=0

// for(i=arr.length; i>=0; i--){
//   if(reversed[j]= arr[i]){
// j++
//   }
// }
// console.log(reversed)

// // //scope means where you can access a specific variable or a function in our code.

// // function a() {
// //   // console.log(b)
// //   c();
// //   function c() {
// //     console.log(b);
// //   }
// // }

// // var b = 10;
// // a();

// function calculateHike(oldSalary, newSalary) {
//     const hike = ((newSalary - oldSalary) / oldSalary) * 100;
//     return hike.toFixed(2) + '%';
//   }

//   console.log(calculateHike(420000, 600000)); // Output: "20.00%"

// function package(month, salary){
//     const find = (salary/month)
//     return find;
// }
// console.log(package(12,420000))

// const arr ='shashank'
// let reversed = ''
// let index = 0
// for (let i=arr.length -1; i>=0; i--){
//     reversed[index]= arr[i]
//         index ++

// }
// console.log(reversed)

// const str = "shashank";
// let result = "";
// for (let i = 0; i <str.length; i++) {
//   let count = 0;
//   for (let j = 0; j < str.length; j++) {
//     if (str[i] === str[j]) {
//         count++;
//     }
//   }
//   if(count === 1){
//     result = result +str[i]
//   }
// }
// console.log(result)

// console.log(5 && 6)
// console.log(5 || 1)

// const arr = [1, 3, 4, 5, 5, 4];
// let count = [];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === 5) {
//     count++;
//   }
// }
// console.log(count);

// const str = [1,2,3,4]
// let newStr = []
// for(i=str.length-1; i>=0; i--){
//         newStr = newStr + str[i]
// }
// console.log(newStr)
 
// const str = "shashank";
// let result = "";
// for (let i = 0; i <str.length; i++) {
//   let count = 0;
//   for (let j = 0; j < str.length; j++) {
//     if (str[i] === str[j]) {
//         count++;
//     }
//   }
//   if(count === 1){
//     result = result +str[i]
//   }
// }
// console.log(result)

const obj = [1,5,7,9,6,3,5]
let max = obj[0]
for(i=0; i<obj.length; i++){
  if (obj[i]>max){
    max= obj[i]
  }
}
console.log(max)