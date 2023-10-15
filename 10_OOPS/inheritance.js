class User{
  constructor(username){
    this.username = username;
  }
  logMeIn(){
    console.log('Username is: '+this.username);
  }
}
class Teacher extends User{
  constructor(username, email, pass){
    super(username);
    this.email = email;
    this.pass = pass;
  }
  addCourse(){
    console.log("New course added by: "+this.username);
  }
}

const aadi = new Teacher("aadi", "aadityapuriaaditya@gmail.com", "1234");
aadi.logMeIn();
aadi.addCourse();