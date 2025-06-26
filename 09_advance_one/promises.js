// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//   try {
//     let baseUrl ="https://jsonplaceholder.typicode.com/users";
//     console.log(baseUrl)
//     const response = await fetch(baseUrl);

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.

const myPromises = new Promise ((resolve , reject)=>{
    let success = true;
    if(success){
        resolve ('Promises resolved successfully')
    }else{
        reject('promises reject successfully');
    }
});

// myPromises
// .then((result)=> console.log(result))
// .catch((error)=> console.log(error))
// .finally(()=>console.log('promises completed'))

// async function userDetails() {
//   try {
//     let baseUrl = "https://api.github.com/users/shashank3103-dev";
//     console.log(baseUrl);
//     const response = await fetch(baseUrl);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// userDetails();

// const userDetails = async () => {
//   let baseUrl = "https://api.github.com/users/shashank3103-dev";
//   console.log(baseUrl);

//   const response = await fetch(baseUrl);
//   return response.json();
// };
// userDetails()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("completed"));

// async function userDetails(userId) {
//   let baseUrl = "https://jsonplaceholder.typicode.com/todos/" + userId;
//   console.log(baseUrl);
//   await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second dela
//   const res = await fetch(baseUrl);
//   return res.json();
// }
// userDetails(1)
//   .then((data) => console.log(data))
//   .catch((er) => console.log(er))
//   .finally(() => console.log("completed"));

// // async await

// async function userDetails() {
//   const res = await fetch("https://api.github.com/users/shashank3103-dev");
//   return res.json();

// }

// userDetails().then((data)=>console.log(data));

// async function userDetails(){

//     let baseUrl = "https://api.github.com/users/shashank3103-dev";
//     console.log(baseUrl);

//     const response = await fetch(baseUrl);
//     return response.json();

// }
// userDetails().then((data)=>console.log(data))
// .catch((error)=>console.log(error))
// .finally(()=>console.log("completed"));

// const myPromises =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// let success = true;
// if(success){
//     resolve('completed')
// }else{
//     reject('failed')
// }
//     },2000)
// })
// myPromises.then((result)=>console.log(result))
// .catch((error)=>console.log(error))
// .finally(()=>console.log('completed'))

// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched");
//     callback(); // Calling the callback function
//   }, 1000);
// }

// function processData() {
//   console.log("Processing data...");
// }

// fetchData(processData);

// async function fetchData() {
//   let baseUrl = "https://fakestoreapi.com/products";
//   // baseUrl = baseUrl + "/1";
//   console.log(baseUrl);
//   const response = await fetch(baseUrl);
//   const product = await response.json();
//   const data = product.filter((item) => item.id === 20);
//   return data;
// }

// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("completed"));


const userData = async () => {
   let baseUrl  = 'https://jsonplaceholder.typicode.com/users';
   console.log(baseUrl)
   const response = await fetch (baseUrl);
   const data = await response.json();  
   console.log(data)
   return data; 
  }
userData().then((data)=>{
  return data
})
.catch((err)=>{
 return err
})
.finally(()=>{
 return
})

// const fetch =()=>{
//   return new Promise((resolve, reject) => {
//     let success = true;

//     setTimeout(()=>{
//       if(success){
//         resolve('completed');
//       }else{
//         reject('failed');
//       }
//     },2000)
//   })
// }
// fetch().then(()=>{
//   return 'success'
// })
// .catch(()=>{
//   return 'failed'
// })
// .finally(()=>{ 
//   console.log('completed')
// })

// function outerFunction() {
//   let counter = 0;

//   function innerFunction() {
//     counter++;
//     console.log("Counter:", counter);
//   }

//   return innerFunction;
// }

// const count = outerFunction();

// count(); // Counter: 1
// count(); // Counter: 2
// count(); // Count 3

