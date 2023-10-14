let username = "Nope"
// Object Literal *********
const user = {
  username: "Aadi",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function() {
    console.log("Got details");
    console.log("Username: "+this.username);
    console.log(this);
  }
}
console.log(user.username);
user.getUserDetails();


// new keyword will make new instances and works as a constructor function
// it helps in making different contexts.

function User(username, loginCount, isLoggedIn){
  this.username=username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // return this;
}
const userOne = new User("Aaditya", 10, true);
const userTwo = new User("Puri", 25, true);
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);

//new always create a new object
//then it will call a constructor function
//this keyword willinject all it functionality
//it returns all the mechanism