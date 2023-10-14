function multiplyby5(num){
  return num*5;
}
multiplyby5.power = 2
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username, score){
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function(){
  this.score++;
}

createUser.prototype.printMe = function(){
  console.log(this.score);
}

const aadi = new createUser("Aadi",15);
const puri = new createUser("Puri",50);

aadi.printMe();

