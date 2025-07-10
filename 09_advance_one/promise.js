// const userData = async () => {
//         let baseUrl = 'https://jsonplaceholder.typicode.com/users';
//         console.log(baseUrl);
//         const response = await fetch(baseUrl);
//         const data = await response.json();
//         console.log(data);
//         return data;
// }
// userData()
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('completed'));

// const arr = [1,2,3,4,5,6,7,8,9,1,1,10];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//                 count++;
//         }
// }
// console.log(count);

// function abc(){
//         console.log(abc.xyz);
// }
// abc();
// abc.xyz = 10;
// abc.xyz = 20;
// abc.xyz = 30;
// abc();

// console.log(typeof typeof 100); // string
// console.log(...'shashank'); // s h a s h a n k
// console.log(parseInt('10+2')); // 10
// console.log(parseInt('7FMT')); // 7
// console.log(parseInt('MT7F')); // NaN
// console.log(parseInt('10.5')); // 10
// console.log(isNaN('shashank')); // true
// console.log(isNaN('10')); // false

// console.log(
//   [1, 2].map((num) => {
//     if (num > 0) return num;
//     return num * 2;
//   })
// );

// function abc() {
//         return
// }
// console.log(abc()); // undefined

// {
//         function abc() {
//                 console.log('shashank')
//         }
// }
// abc();

// const arr = [1,2,3,4,5]
// function findSum(arr){
//     let sum = 0
//     for (i=0; i<arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum
    
// }
// console.log(findSum(arr))


// const data = [
//         {firstName:'shashank', lastName: 'shakya', age:10},
//          {firstName:'megha', lastName: 'yadav', age:13},
//           {firstName:'arshivi', lastName: 'thakur', age:14}
//     ]
    
//     const output = data.map((x)=> x.firstName + x.lastName)
    
//     console.log(output)

function printOddNumbers(n) {
        for (let i = 1; i <= n; i++) {
          if (i % 2 ) {
            console.log(i);
          }
        }
      }
      
      printOddNumbers(20);