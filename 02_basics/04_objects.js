// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// tinderUser now contains:
// { id: "123abc", name: "Sammy", isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// Output: "hitesh"
// Accesses a deeply nested property using dot notation.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Merging obj1 and obj2 into obj3 using the spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// Note: Each object’s properties are added; if there were duplicate keys, the last object’s value would overwrite earlier ones.

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// Accessing email of the second user
users[1].email
// Output: "h@gmail.com"

console.log(Object.keys(tinderUser));
// Output: ['id', 'name', 'isLoggedIn']
// Object.keys() returns an array of property names in tinderUser.

console.log(Object.values(tinderUser));
// Output: ['123abc', 'Sammy', false]
// Object.values() returns an array of property values in tinderUser.

console.log(Object.entries(tinderUser));
// Output: [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]
// Object.entries() returns an array of key-value pairs, each in an array format.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Output: true
// hasOwnProperty() checks if 'isLoggedIn' exists directly on tinderUser, returning true.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructuring courseInstructor and renaming it to 'instructor'
const {courseInstructor: instructor} = course

// console.log(courseInstructor); 
// Uncaught ReferenceError: courseInstructor is not defined
// Explanation: Since we used destructuring with renaming, 'courseInstructor' doesn’t exist in the current scope; we only have 'instructor'.

console.log(instructor);
// Output: "hitesh"
// instructor holds the value of course.courseInstructor due to destructuring with renaming.

// Sample JSON structure
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

// This is an array of empty objects, often used as placeholders:
[
    {},
    {},
    {}
]
