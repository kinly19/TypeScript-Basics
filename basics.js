// ================================================== Notes ==================================================
// TypeScript basics
//  Primitives: numbers, strings, boolean - types are written in lowercase
//  More complex types: arrays, objects
//  Function types, parameters
// ===========================================================================================================
// Primitive values
var age;
// or below
// let age: number = 12;
age = 12.1;
// let userName: string = 'Imogen'; 
var userName;
userName = 'Imogen';
// let isThisTrue: boolean = true; 
var isThisTrue;
isThisTrue = true;
// More complex types
// Arrays
// let hobbies: string; - this would only allow us to store one string and not an array of strings
var hobbies; // this is how we can tell typescript we want an array of strings in hobbies
hobbies = ['Imogen', 'Alysia', 'Max'];
// by default typeScript will use type of 'any' if we give it no type
// let person:
// person = {
//   name: 'Max',
//   age: 25
// }
// Telling ts what sort of types are expected inside of this object
var person;
person = {
    name: 'Max',
    age: 25
};
// Tell ts we want an object with these types inside of an array (array object)
var people;
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
var course = 'React - Course';
// Union Types
//  allows us to use more than one type
//  add as many types as needed
//  more info - https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
var newCourse = 'React - Course';
newCourse = 1000;
var guestUser = {
    name: "Alysia",
    age: 30,
    isSubscribed: false
};
var specialUser = {
    name: 'Imogen',
    age: 29,
    isSubscribed: true
};
var unknownUser = {
    name: 25555452,
    age: 29,
    isSubscribed: true
};
var allUsers = [guestUser, specialUser, unknownUser];
console.log(allUsers);
// Function & types 
