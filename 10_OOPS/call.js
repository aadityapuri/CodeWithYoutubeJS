function SetUsername(username) {
  //DB calls
  this.username = username;
  console.log("Called!");
  this.user = username;
  console.log(this);
}

function createUser(username, email, pass) {
  SetUsername.call(this, username);

  this.email = email;
  this.pass = pass;
}

const aadi = new createUser("Aadi", "aadityapuriaaditya@gmail.com","1234");
console.log(aadi);