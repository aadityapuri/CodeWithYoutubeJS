// falsy values: 0, false, null, undefined, -0, 0n, "", Nan
// truthy values: "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null or undefined

let val1 = 5??10;
console.log(val1);
val1 = null??15;
console.log(val1);
val1 = null??undefined;
console.log(val1);
val1 = undefined??null;
console.log(val1);
val1 = null??undefined??10;
console.log(val1);

// dont confuse it with ternary operator