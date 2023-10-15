class User{
  constructor(username){
    this.username = username;
  }
  logMe(){
    console.log('Username: '+this.username);
  }
  static createId(){
    return '1234'
  }
}
const aadi = new User('aadi');
aadi.logMe()

class Teacher extends User{
  constructor(username, email){
    super(username)
    this.email=email;
  }
}

const name = new Teacher("aadi", "aadi@google.com");
name.logMe();