const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
// console.log(Math.PI);

const user = {
  name: 'aaditya',
  score: 250,
  isAvailable: false
}

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// Object.defineProperty(user, 'name', {
//   writable: false,
//   enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

for (const [key, value] of Object.entries(user)) {
  if(typeof value !== 'function'){
    console.log(key +" "+value);
  }
}
