// Stack memory is taken by primitive types and heap will always be taken by non-primitive types

let name = "aaditya";

let anotherName = name;
anotherName = "anyName";

console.log(name);
console.log(anotherName);

let user = {
  email: "user@gmail.com",
  upi:"user@upi"
}

let anotherUser = user;
anotherUser.email = "hitesh@google.com";
console.table([user, anotherUser]);

//Stack memory always makes multiple copies and heap memory always proceeds with references