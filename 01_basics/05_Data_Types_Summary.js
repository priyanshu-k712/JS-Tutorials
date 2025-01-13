//Premitive Data Types (Are given copy of original value):
// String, Number, Boolean, null, undefined, Symbol(To make any value unique), BigInt(To handle bigger values that Number can't handle)

// Non-Premitive Data Types (Are given references of original value):
// Array, Objects, Functions

// JS is not Dynamically Typed Language.

// Number:
const value = 100;
const score = 100.4;

// Boolean;
const isLoggedIn = false;

// null:
const outsideTemp = null;

// undefined:
let userEmail; //log this it will give undefined.

// Symbol:
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

// BigInt:
const BigNumber = 3216549876568732168321874n; //If we put n at end it will make it BigInt

// Array:
const heroes = ['Ironman', 'Batman'];
const obj = {
    name: 'harry',
    age: 18,
};

// Functions:
const myFunction = function () {
    console.log('Hello World');
};

// Typeof Function:
console.log(typeof myFunction);
