const arr = ['one','two','three'];
const str= 'hello'
const res = arr.includes('on');
const anotherVar = arr.includes('onetwo');
const newVar = str.includes('ll');
console.log(res); // false
console.log(anotherVar); // false
console.log(newVar); // true
console.log(NaN === NaN)// false