const arr = [];

// Shallow copy means that both the things are sharing same references. Eg: Arrays
// Deep Copy means there is always a clone that'll be created while copying. Eg: String

arr.push(7);
arr.push(9);
arr.push(5);
console.log(arr);

console.log(arr.includes(0));

console.log(arr.join());

//join makes whole array into a string

// slice makes a copy of the original array but splice manipulates the original array