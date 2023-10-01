// String Interpolation
const myName = "aaditya";

console.log(`Hello my name is ${myName} and I am an Associate Software Developer`);

//through these backticks we can also run functions in the provided brackets and run it in only one go. 
// P.s: functions like .toUpperCase()

console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('i'));

const newName = myName.substring(0,4);
console.log(newName);

console.log(Math.floor(Math.random()*10)+10); // this is giving us a random values between 10 and 20