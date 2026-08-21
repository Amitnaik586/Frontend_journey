// data types in javascript //

// string data type //
let name = 'Amit';
let city = "honnavar";

// string concantenation //
let firstName = 'Amit';
let lastName = 'Naik';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// number data type //
let age = 19;
let year = 2006;
let tempruter = 30.9; // decimal also number 

//boolean data type //
let isStudent = true;
let isLoggedIn = false;

// example for boolean //
let age = 18;
console.log(age >= 20 );

// undifined // ------> this means a varible exist but it currently has no assighned value 
let name;
console.log(name)

// null // --------> intentionally empty / no value 
let ueser = null;

//bigint// -------> used to big numbers
let number = 475667345543653465767534765734567n;

//symbol // ----------> is a special primitive data type used mainly for creating unique indentifiers
let id1 = Symbol("id");
let id2 = Symbol("id");


// Object in javascript //
let user = {
    name: "Amit",       // String
    age: 19,            // Number      //object can contain diffrent data types
    isStudent: true,    // Boolean
    skills: ["HTML", "CSS", "JS"]
};

//built in Objects //
//Some important ones are //
Array
String
Number
Math
Date
RegExp
JSON
Map
Set
Promise











