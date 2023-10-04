function one(){
  const username = "hitesh";
  function two(){
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

one();

if(true){
  const username = "hitesh"
  if(username === "hitesh"){
    const website = "youtube"
    console.log(username+website);
  }
  // console.log(website);
}

// console.log(username);

// Hoisting
addOne(5); // This will get executed and will make no errors as we can say that there is proper function declaration
function addOne(num){
  return num+1;
}

// addTwo(6); // This will not be executed as the function is holded in a variable and is executed even before the variable is declared
const addTwo = function(num){ 
  return num+2;
}

const user = {
  username: "hitesh",
  price: 999,
  welcome: function(){
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  }
}

user.welcome();
user.username = "sam"
user.welcome();
// console.log(this);

// function chai(){
//   let username="any";
//   console.log(this.username);
// }

// const chai = function chai(){
//   let username="any";
//   console.log(this.username);
// }

// chai();

// const chai = () => {
//   let username="any";
//   console.log(this.username);
// }

// chai();

// const chai = (num1,num2) => num1+num2;
// const chai = (num1,num2) => (num1+num2);

const myArr = [2, 5, 3, 8, 9];

// myArr.forEach()