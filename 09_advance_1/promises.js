const promise1 = new Promise(function(resolve, reject){
  // Do an Asyn task
  // DB calls, cryptography
  setTimeout(()=>{
    console.log('Async task is completed');
    resolve();
  },1000);
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
})