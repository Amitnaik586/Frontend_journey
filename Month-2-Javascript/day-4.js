// NUMS AND MATHS

//Nums
//Examples
let num = 182472672;
console.log(num.toString().charAt(3));
console.log(num.toFixed(4));
console.log(num.toPrecision(5));



let hundreds = 365464355;
console.log(hundreds.toLocaleString('en-in'));

//Maths
//Examples
console.log(Math.sqrt());
console.log(Math.abs());
console.log(Math.round())
console.log(Math.ceil);
console.log(Math.floor());
console.log(Math.min());
console.log(Math.max);

// Example for Random()
let min = 1000;
let max = 9999;
let otp = Math.floor(Math.random()*(max - min + 1)+ min);
console.log(otp);
