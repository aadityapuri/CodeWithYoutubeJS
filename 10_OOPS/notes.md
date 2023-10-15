# javascript and classes
Basically there were no classes in JS but to deal with the complaints of the programmers coming from other languages who deal with the classes and their objects, the classes concepts were introduced in ES6 and under the hood it always function as a "Prototype-based language". It was never an object-oriented language and is just adopted the idea of OOPS from other languages but behind the scenes it just converts all into the prototypes.

## OOPS

## Object
- collection of properties and methods

## why use OOP
compactness in code. Removes messiness

## parts of OOP
Object literal

- Constructor function
- Prototypes
- Classes
- Instances(new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism

## this keyword refers to the current context.
Note: 'this' will print null object when run in an external environment but will print the window function when in the browser because there are other things that are happening on the global context

## Prototypal Behaviour
It traverses layer by layer starting from child to parent to its parent repeatedly until it encounters null. Note: "this" and "new" keywords work like this only. We can't use "this" keyword in Arrow functions. Even classes n all works due to prototypal behaviour.

Array -> Object -> null
String -> Object -> null
Function is also an object.

We can add any property or method to any type or object in javascript by accessing the prototypal behavior. We can define the methods according to our need and link multiple objects through prototypal inheritance.