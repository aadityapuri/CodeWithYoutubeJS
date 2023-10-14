let myName = "Aaditya  ";

let myHeros = ['thor', 'spiderman'];

let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',
  
  getSpiderPower: function(){
    console.log('Spidy Power is: '+ this.spiderman);
  }
}
Object.prototype.sling = function(){
  console.log("Spiderpower is sling");
}

// heroPower.sling();
// myHeros.sling();
// myName.sling();

String.prototype.trueLength = function(){
  console.log(`String's length is: ${this.trim().length}`);
}
myName.trueLength()