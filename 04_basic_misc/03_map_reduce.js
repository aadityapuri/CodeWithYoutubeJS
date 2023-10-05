// foreach array never returns any value. that's why basically we use filter.
const arr = [1, 2, 3, 4, 5];
// arr.forEach((item)=> console.log(item));

// filter basically is used to filter the data and returns values based on true or false.

const newArr = arr.filter((num)=>num>2);
// console.log(newArr);

// MAP automatically return value after filtering or applying some function
const newNum = arr.map((num)=>{ return num+10}).map((num)=>num*10);
// console.log(newNum);
// map and chaining is presented above

/// REDUCE
const total = arr.reduce((acc, currval)=>{
  return acc+currval;
},0);

console.log(total);