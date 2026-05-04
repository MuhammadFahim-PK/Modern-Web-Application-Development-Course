console.log("Js code Loaded");

//  String can be add with "", '', ``
//  ""  -   Double Quotes
//  ''  -   Single Quotes
//  ``  -   Backticks

var userName;   // variable Declaration
userName = "Mark";  //  variable Initialization

console.log("variable 'userName' Initialization" + userName);
document.writeln("variable 'userName' Initialization " + userName);
document.writeln("<br>");

var firstName = "Fahim";    //  variable Declaration + Initialization
firstName = "Muhammad"; //  variable reassignment  or Update
console.log("variable 'firstName' Initialization" + firstName);
document.writeln("variable 'firstName' Initialization " + firstName);
document.writeln("<br>");

var lastName = "Fahim";
var fullName = firstName + " " + lastName;
console.log("variable 'firstName' and 'lastName' plus " + fullName);
document.writeln("variable 'firstName' and 'lastName' plus " + fullName);


var firstName = "Fahim" //  ReDeclaration + ReAssignment


//  template literals
//  `` -   Backticks
//  ${} -   Expression Placeholder
//  Example -

var firstName = "Fahim";
var lastName = "Khan";
var age = 25;

var fullName = `My name is ${firstName} ${lastName} and my age is ${age}`;
console.log(fullName);
document.writeln(fullName);
document.writeln("<br>");

//  We have 3 keywords which we use for create variable in javascript
//  var, let, const
/*
    var
    ------
    1. function scoped
    2. can be redeclared
    3. can be updated
    4. hoisted (initialized with undefined)
    5. NO temporal dead zone (TDZ)
    6. added to window object (in global scope)

    let
    -----
    1. block scoped
    2. can't be redeclared (in same scope)
    3. can be updated
    4. hoisted (but NOT initialized)
    5. has temporal dead zone (TDZ)
    6. NOT added to window object

    const
    -------
    1. block scoped
    2. can't be redeclared
    3. can't be reassigned (BUT objects/arrays can be mutated)
    4. hoisted (but NOT initialized)
    5. has temporal dead zone (TDZ)
    6. NOT added to window object
*/

//  var is function scoped, let and const are block scoped
//

//  TDZ for var ❌

console.log("TDZ for var ❌" + a); // undefined




var a = 10;



//  let and const on window ❌

var a = 1;
let b = 2;
const c = 3;

console.log(window.a); // 1
console.log("let and const on window ❌" + window.b); // undefined
console.log("let and const on window ❌" + window.c); // undefined



//  3. "const can't be updated" ⚠️ (half - truth)

//  Be precise:

//  Cannot reassign
//  Can still mutate objects / arrays

const user = { name: "Ali" };
user.name = "Fahim"; // ✅ allowed

//  user = {}; // ❌ error


//  Missing but important (add this to your notes)

//  1. Redeclaration nuance

let userNumber = 1;

//  let a = 2; // ❌ error

var userNumberTwo = 1;

var userNumberTwo = 2; // ✅ allowed


//  2. Scope difference (real impact)

if (true) {
    var x = 10;
    let y = 20;
}

console.log("var x = 10; " + x); // 10
//  console.log("let y = 20; " + y); // ❌ ReferenceError


//  3. Why var is avoided in real projects

//  Not theory.Real reason:
//  leaks outside blocks
//  causes bugs in loops and async code

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i = 0; i < 3; i++ " + i), 100);
}
// 3, 3, 3 ❌

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("let i = 0; i < 3; i++ " + i), 100);
}
// 0, 1, 2 ✅