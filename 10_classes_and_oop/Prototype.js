const user = {
  userName: "Sunny",
  loginCount: 9,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.userName);

function User(userName, loginCount, signedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.signedIn = signedIn;

  return this; // not important //
}

this.greeting = function () {
  console.log(`Welcome ${this.username}`);
};

const userOne = new User("Sunny", 9, true);
const userTwo = new User("Sam", 33, true);
console.log(userOne);


