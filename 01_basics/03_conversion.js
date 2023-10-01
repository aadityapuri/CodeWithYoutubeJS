let score = "33abc"

console.log(typeof(score))

let number=Number(score)

console.log(typeof(number))

console.log(number)

//for null 

score = null

console.log(typeof(score))

number=Number(score)

console.log(typeof(number))

console.log(number)


/*
FOR NUMBER TO SOME CONVERSION

"33"=>33
"sdgfsdf2323"=>NaN
true=>1 false=>0
undefined=>NaN
*/ 

/*
FOR BOOLEAN TO SOME CONVERSION
1=>true
0=>false
""=>false
"dsgfsdgf"=>true

*/
// Whichever comes first will be the default type in printing


// Comparison and checking equality are two different things

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);  // false

//function

const myfunction = function(){
  console.log("Hello World");
}