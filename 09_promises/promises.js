const promise1 = new Promise(function(resolve, reject){
  // Do an Asyn task
  // DB calls, cryptography
  setTimeout(()=>{
    console.log('Async task is completed');
    resolve();
  },800);
});
promise1.then(function(){
  console.log("Promise consumed!");
});

new Promise((resolve, reject)=>{
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function(){
  console.log("Async 2 resolved!");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({username: "Aadi", email: "aadityapuriaaditya@gmail.com"})
  }, 1000);
}).then((user)=>{
  console.log(user);
});

const promise4 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    let error = true;
    if(!error){
      resolve({username: "Aadi", pass: "1234"});
    }
    else{
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});
promise4.then((user)=>{
  console.log(user);
  return user.username;
}).then((username)=>{
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(()=>{
  console.log("Promise is resolved or rejected");
})


const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if(!error){
      resolve({username: "Js", pass: "789"});
    }
    else{
      reject("ERROR: JS went wrong!");
    }
  }, 1000);
});
async function consumePromise5(){
  try {
    const response = await promise5;
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
}
consumePromise5();

// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

const promise6 = fetch('https://api.github.com/users/aadityapuri');

promise6
.then((response)=>{
  return response.json();
})
.then((data)=>console.log(data))
.catch((error)=> console.log(error));