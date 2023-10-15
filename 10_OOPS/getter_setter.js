// class User{
//   constructor(email, pass){
//     this.email = email
//     this.pass = pass
//   }
//   get pass(){
//     return this._pass.toUpperCase();
//   }
//   set pass(value){
//     this._pass = value;
//   }
// }
// const aadi = new User("aadityapuri@google.com","1234");
// console.log(aadi.pass);



// function User(email, pass){
//   this._email = email;
//   this._pass = pass;

//   Object.defineProperty(this, 'email',{
//     get: function(){
//       return this._email;
//     },
//     set: function(){
//       this._email = value;
//     }
//   });
//   Object.defineProperty(this, 'pass',{
//     get: function(){
//       return this._pass;
//     },
//     set: function(){
//       this._pass = value;
//     }
//   })
// }
// const aadi = new User("aadi@user.com","1234");
// console.log(aadi.email);



const User = {
  _email: 'aadi@google.com',
  _pass: '1234',

  get email(){
    return this._email;
  },
  set email(value){
    this._email = value;
  },
  get pass(){
    return this._pass;
  },
  set pass(value){
    this._pass = value;
  }
}
const aadi = Object.create(User)
console.log(aadi.email);