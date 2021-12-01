// ================================================== Notes ==================================================
// TypeScript basics
//  Primitives: numbers, strings, boolean - types are written in lowercase
//  More complex types: arrays, objects
//  Function types, parameters

// ===========================================================================================================


// Primitive values

let age: number; 
// or below
// let age: number = 12;
age = 12.1;

// let userName: string = 'Imogen'; 
let userName: string;
userName = 'Imogen'; 

// let isThisTrue: boolean = true; 
let isThisTrue: boolean;
isThisTrue = true;


// More complex types
// Arrays

// let hobbies: string; - this would only allow us to store one string and not an array of strings
let hobbies : string[]; // this is how we can tell typescript we want an array of strings in hobbies
hobbies = ['Imogen', 'Alysia', 'Max'];

// by default typeScript will use type of 'any' if we give it no type
// let person:
// person = {
//   name: 'Max',
//   age: 25
// }

// Telling ts what sort of types are expected inside of this object
let person: {
  name: string,
  age: number
};

person = {
  name: 'Max',
  age: 25,
};

// Tell ts we want an object with these types inside of an array (array object)
let people: {
  name: string,
  age: number
}[]; 


// Type inference.....!
//  In TypeScript, there are several places where type inference is used to provide 
//  type information when there is no explicit type annotation. 
//  For example, in the code below
//  The type of the 'course' variable is inferred to be a 'string'
//  this kind of inference takes place when initializing... variables and members, 
//  setting parameter default values, and determining function return types.

// more info here - https://www.typescriptlang.org/docs/handbook/type-inference.html

//  with 'type inference' we dont have to do below 
//  let course: string = 'React - Course'

let course = 'React - Course';


// Union Types
//  allows us to use more than one type
//  add as many types as needed
//  more info - https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html

let newCourse: string | number | boolean = 'React - Course'; 
newCourse = 1000;


// Type Aliases
//  The code above, we've been using object types and union types by writting them directly in type annotations
//  This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.
// more info - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

type Users = {
  name: string,
  age: number,
  isSubscribed: boolean
};

let guestUser: Users = {
  name: "Alysia",
  age: 30,
  isSubscribed: false,
};

let specialUser: Users = {
  name: 'Imogen',
  age: 29,
  isSubscribed: true
};

let allUsers = [guestUser, specialUser, unknownUser];
console.log(allUsers);


// Function & types 
// we can set the return type for the function also, after the functions parameter list add colon - (): function type
// if we dont ts will infer the type for us 

const addNumbers = (a: number, b:number): number =>{
  return a + b;
};


// Void - represents the return value of functions which don’t return a value. It’s the inferred type any time a function 
//  doesn’t have any return statements, or doesn’t return any explicit value from those return statements
//  more info - https://www.typescriptlang.org/docs/handbook/2/functions.html#void

const printValue = (value: any) => {
  console.log(value);
};


// Generics 
// Very good to know read more!
// https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics

const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

// updatedArray.split('');
