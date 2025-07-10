//filter
const arr = [1, 2, 2, 3, 4, 4, 5];
const newArr = arr.filter((val, index) => arr.indexOf(val) === index);
console.log(newArr);

//map 
const users = [
        { id: 1, name: "Shashank" },
        { id: 2, name: "Rahul" },
      ];
const arr2 = users.map((user)=> user.name )
console.log(arr2)

//reduce

const cart = [
        { item: "Book", price: 200 },
        { item: "Pen", price: 50 },
        { item: "Bag", price: 300 },
      ];
const arr3 = cart.reduce((sum,item) => sum + item.price, 0)
console.log(arr3)

const people = [
        { name: "A", age: 22 },
        { name: "B", age: 27 },
        { name: "C", age: 30 },
      ];
const age = people.filter((item)=> item.age>25)
console.log(age)

const names = ['Shashank', 'Amit', 'Rahul'];

const name2 = names.reduce((sum, item)=> sum + item.length , 0)
console.log(name2)
const items = ['a', 'b', 'a', 'a', 'c', 'b'];
let count ={}
for(i=0; i<items.length; i++){
        const item = items[i]
        if(count [item]){
           count[item] ++
        }else{
                count[item] = 1
        }
}
console.log(count)
