// class User {
//   constructor(username, email, pass){
//     this.username = username;
//     this.email = email;
//     this.pass = pass;
//   }
//   encryptPass(){
//     return this.pass+"abc";
//   }
//   changeUsername(){
//     return this.username.toUpperCase();
//   }
// }
// const user = new User("aadi", "aadityapuriaaditya@gmail.com","1234");
// console.log(user.encryptPass());
// console.log(user.changeUsername());

// BTS
// This class is equivalent to a function who has those user defined functions in its prototype as follows:
function User(username, email, pass){
  this.username = username;
  this.email = email;
  this.pass = pass;
}
User.prototype.encryptPass = function(){
  return this.pass+"abc";
}
User.prototype.changeUsername = function(){
  return this.username.toUpperCase();
}
const user = new User("aadi", "aadityapuriaaditya@gmail.com","1234");
console.log(user.encryptPass());
console.log(user.changeUsername());