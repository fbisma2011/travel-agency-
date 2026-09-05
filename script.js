
// Prompt and Alert
prompt("Enter your name");
alert("Hello World");

document.write("Hello ");


// Variables & Data Types
document.write("<h3>Variable + Data Types</h3>");

let name = "Bisma";
let age = 15;
let student = true;

console.log(name);
console.log(age);
console.log(student);

document.write(
    name + "<br>" +
    age + "<br>" +
    student
);


// String Variable
let names = "Bisma Fatima";
document.write("<br>My name is " + names);


// Var
var ages = 15;
document.write("<br>My age is " + ages);


// Const
const country = "Pakistan";
console.log(country);


// Arithmetic Operators
var a = 10;
var b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus


// Assignment Operators
document.write("<h3>Arithmetic Operators</h3>");

let y = 20;

y += 20;
document.write(y + "<br>");

y -= 10;
document.write(y + "<br>");

y *= 20;
document.write(y + "<br>");

y /= 10;
document.write(y + "<br>");

y %= 5;
document.write(y + "<br>");


// Comparison Operators
a = 10;
b = 5;

console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a <= b);
console.log(a >= b);
console.log(a > b);
console.log(a < b);


// Conditions
document.write("<h3>Condition</h3>");

let Age = 20;

if (Age >= 18) {
    document.write("You are eligible to vote");
}
else {
    document.write("You are not eligible to vote");
}


// Grade Condition
let marks = 90;

if (marks >= 80) {
    console.log("Grade A");
}
else if (marks >= 70) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else {
    console.log("Fail");
  }

