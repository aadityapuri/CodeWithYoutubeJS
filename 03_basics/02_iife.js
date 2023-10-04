// Immediately Invoked Function Expression (IIFE)
(function chai(){
  console.log("this is running");
})(); // this semicolon is very Important!!!!!!!!
(()=>{
  console.log("this is running");
})();

( (name)=>{
  console.log(name);
})("hitesh");