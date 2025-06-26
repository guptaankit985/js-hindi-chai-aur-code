// const arr = [1,2,3,4,5,6,7,8,9,10];

// function findSecondLast (arr){
//     return arr[arr.length-2];
// }
// console.log(findSecondLast(arr));

// const arr = [ "animal" ];
// const secondLast = arr[arr.length - 2];
// console.log(secondLast);

// const numbers = 1;
// const string = "1";
// const boolean = true;
// const bigInt = 1234567890123456789012345678901234567890n;
// const undefinedValue = undefined;
// const nullValue = null;
// const symbol = Symbol("symbol");
// const functionValue = function () {};
// const object = { key: "value" };

// console.log(typeof numbers); // number
// console.log(typeof string); // string
// console.log(typeof boolean); // boolean
// console.log(typeof bigInt); // bigint
// console.log(typeof undefinedValue); // undefined
// console.log(typeof nullValue); // object
// console.log(typeof symbol); // symbol
// console.log(typeof functionValue); // function
// console.log(typeof object); // object
// console.log(typeof NaN); // number
// console.log(typeof Infinity); // number
// console.log(typeof -Infinity); // number
// console.log(typeof 1 / 0); // number
// console.log(typeof 0 / 0); // NaN
// console.log(typeof 1 / "a"); // NaN
// console.log(typeof "a" * 1); // NaN
// console.log(typeof "a" / 1); // NaN
// console.log(typeof "a" + 1); // string
// console.log(typeof "a" - 1); // number
// console.log(typeof "a" * 1); // number
// console.log(typeof "a" / 1); // number
// console.log(typeof "a" + "b"); // string
// console.log(typeof "a" - "b"); // NaN
// console.log(typeof "a" * "b"); // NaN
// console.log(typeof "a" / "b"); // NaN

// console.log('4' + 4); // 44
// console.log(1 + 4 + '4'); // 44
// console.log(4 + 4); // 8
// `console.log('4' - 4); `// 0
// console.log(4 - '4'); 
// console.log('4' - '4');
// console.log('4' * 4);
// console.log(4 * '4');
// console.log('4' * '4');
// console.log('4' / 4);
// console.log(4 / '4');
// console.log('4' + '4');

// console.log( typeof typeof 1); // string

// const number = [1,2,3,4,5,6]
// number[100] = 500
// console.log(number); 

// const arr = [...'shashank']
// console.log(arr); // [ 's', 'h', 'a', 's', 'h', 'a', 'n', 'k' ]

console.log(parseInt('10+2'));
console.log(parseInt('7FMT'));
console.log(parseInt('MT7F'));


// // console.log('1'+1-'1')
// // // console.log('tilak'+'100')

// // // const a={}
// // // const b={
// // //     name:'shashank'
// // // }
// // // const c={
// // //     name :'shakya'
// // // }
// // //  a[b]={
// // //     name: 'ankit'
// // // }
// // //  a[c]={
// // //     name:'sir'
// // // }

// // // console.log(a[b])

// // // const arr = [1,2,3,4,5]
// // // const result = arr.map((e)=> {
// // //     return e>2
// // // })
// // // console.log(result)


// function greet(name, callback){
//     callback(`hello ${name}`)
// }
// greet('shahsank', console.log)

// const promises = new Promise((resolve, reject)=>{
//     let success = true
//     if(success){
//         resolve ('resolve')
//     }else{
//         reject ('reject')
//     }
// })
// promises.then((result)=> console.log(result))
// .catch((err)=> console.log(err))
// .finally(()=> console.log('completed'))

// function add(a){
//     return function (b){
//         return a + b
//     }
// }
// console.log(add(1)(2))
// const add = (a)=> (b) =>  a+b
// console.log(add(1)(2))
// const arr = [1,2,3,4,5]
// const result = arr.reduce((item, acc)=> item + acc)
// console.log(result)




async function getData(){
        let baseUrl = 'https://fakestoreapi.com/products';
        console.log(baseUrl)
        const data = await fetch(baseUrl)
        console.log(data)
        return data.json();
    }
    getData().then((result)=> console.log(result))
    .catch((err)=> console.log(err))