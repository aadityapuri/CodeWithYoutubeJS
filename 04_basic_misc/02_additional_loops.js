// for of loop
const arr = [1, 2, 3, 4, 5];

// for (const i of arr) {
//   console.log(i);
// }

// Objects are not iterable and for of loop will not be applicableto them

const map = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");

// console.log(map);
// for (const [key, val] of map) {
//   console.log(key+"",val);
// }

const myObj = {
  js: 'javaScript',
  cpp: 'C++',
  rb: 'ruby'
}
for (const key in myObj) {
  console.log(key, myObj[key]);
}


// for (const key in arr) {
//   console.log(key);
// } // this will print only indexes of arr

// for (const key in map) {
//   console.log(key);
// } // this is not iterable and the this will not print anything

// arr.forEach((item)=>{
//   console.log(item);
// });

function printMe(item){
  console.log(item);
}
arr.forEach(printMe); // don't execute the function, justpass on the reference of it
// this forEach can pass multiple parameters and those are: item, indices, originalarray

