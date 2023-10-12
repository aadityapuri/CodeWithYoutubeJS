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