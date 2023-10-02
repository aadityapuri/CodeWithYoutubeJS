const tinderUser = new Object();

tinderUser.id = "iudfh";
tinderUser.name = "sdshaf";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Sam",
      lastName: "my",
    }
  }
}

console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}

// const obj3 = Object.assign({},obj1, obj2);
const obj3 = {...obj1, ...obj2};

console.log(obj3);
// Object.entries return us the entries in an array of arrays design

course = {
  courseName: "JS",
  courseInstructor: "hitesh"
}
const {courseInstructor} = course;
console.log(courseInstructor);

// const navar = ({company})=>{
// }
// navbar(company="hitesh")

