console.log("My Js code Load");

//  Assignment Start below
//  ----------------------

//  Task 1.  Write a program that take two numbers & add them in a new variable. Show the result in your browser.

document.writeln("<b>Task 1.  Write a program that take two numbers & add them in a new variable. Show the result in your browser.</b><br><br>");

var numOne = 3;
var numTwo = 5;
var addition = numOne + numTwo;
console.log("Sum of " + numOne + " and " + numTwo + " is = " + addition);
document.writeln("Sum of " + numOne + " and " + numTwo + " is  " + addition + "<br>");

//  Task 2. Repeat task1 for subtraction, multiplication, division & modulus.

document.writeln("<br><br> <b>Task 2. Repeat task1 for subtraction, multiplication, division & modulus.</b><br><br>");

var numThree = 100;
var numFour = 50;

//  Subtraction
var subtraction = numThree - numFour;
console.log("Subtraction of " + numThree + " and " + numFour + " is = " + subtraction);
document.writeln("Subtraction of " + numThree + " and " + numFour + " is = " + subtraction + "<br>");

//  Multiplication
var multiplication = numThree * numFour;
console.log("Multiplication of " + numThree + " and " + numFour + " is = " + multiplication);
document.writeln("Multiplication of " + numThree + " and " + numFour + " is  " + multiplication + "<br>");

//  Division
var division = numThree / numFour;
console.log("Division of " + numThree + " and " + numFour + " is = " + division);
document.writeln("Division of " + numThree + " and " + numFour + " is  " + division + "<br>");

//  Modulus
var modulus = numThree % numFour;
console.log("Modulus of " + numThree + " and " + numFour + " is = " + modulus);
document.writeln("Modulus of " + numThree + " and " + numFour + " is  " + modulus + "<br>");


//  Task 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”

document.writeln("<br><br> <b>Task 3. Do the following using JS Mathematic Expressions</b><br>");

document.writeln("<br><br> <b>a. Declare a variable.</b><br><br>");

var userAge;

userAge = 5;

document.writeln("var userAge;");

document.writeln("<br><br> <b>Show the value of variable in your browser like “Value after variable declaration is: ??”</b><br><br>");

console.log("Value after variable declaration is: " + userAge);

document.writeln("Value after variable declaration is: " + userAge);

document.writeln("<br><br> <b>c. Initialize the variable with some number.</b><br><br>");

console.log("userAge = 5;");

document.writeln("userAge = 5;");

document.writeln("<br><br> <b>d. Show the value of variable in your browser like “Initial value: 5”.</b><br><br>");

console.log("Initial value: " + userAge);

document.writeln("Initial value: " + userAge);

document.writeln("<br><br> <b>e. Increment the variable.</b><br><br>");

//  if i need to Post increment 1 so i can do it like this
userAge++;

console.log("if i need to Post increment 1 so i can do it like this : userAge++; and Answer will be = " + userAge + "</b><br>");

document.writeln("if i need to Post increment 1 so i can do it like this : userAge++; and Answer will be = " + userAge + "</b><br>");

//  if i need to Pre increment 1 so i can do it like this
// ++userAge;

console.log("if i need to Pre increment 1 so i can do it like this : ++userAge; and Answer will be = " + userAge + "</b><br>");

document.writeln("if i need to Pre increment 1 so i can do it like this : ++userAge; and Answer will be = " + userAge + "</b><br>");

//  if i need to increment 1 so i can do it like this as well
//  userAge += 1;

console.log("if i need to increment 1 so i can do it like this as well : userAge += 1; and Answer will be = " + userAge + "</b><br>");

document.writeln("if i need to increment 1 so i can do it like this as well : userAge += 1; and Answer will be = " + userAge + "</b><br>");

//  if i need to increment 1 so i can do it like this as well
//  userAge = userAge + 1;
console.log("if i need to increment 1 so i can do it like this as well : userAge = userAge + 1; and Answer will be = " + userAge + "</b><br>");

document.writeln("if i need to increment 1 so i can do it like this as well : userAge = userAge + 1; and Answer will be = " + userAge + "</b><br>");

document.writeln("<br><b>f. Show the value of variable in your browser like “Value after increment is: 6”.</b><br><br>");

console.log("“Value after increment is: " + userAge);

document.writeln("“Value after increment is:  " + userAge);

document.writeln("<br><br> <b>g. Add 7 to the variable.</b><br><br>");

userAge = userAge + 7;

console.log("userAge = userAge + 7;");

document.writeln("userAge = userAge + 7;");

document.writeln("<br><br> <b>h. Show the value of variable in your browser like “Value after addition is: 13”.</b><br><br>");

console.log("Value after addition is: " + userAge);

document.writeln("Value after addition is: " + userAge);

document.writeln("<br><br> <b>i. Decrement the variable.</b><br><br>");

//  if i need to Post Decrement 1 so i can do it like this
userAge--;

console.log("if i need to Post Decrement 1 so i can do it like this : userAge--; and Answer will be = " + userAge + "</b><br>");

document.writeln("if i need to Post Decrement 1 so i can do it like this : userAge--; and Answer will be = " + userAge + "</b><br>");

//  if i need to Pre Decrement 1 so i can do it like this
// --userAge;

console.log("if i need to Pre Decrement 1 so i can do it like this : --userAge; and Answer will be = " + userAge + "</b><br>");

document.writeln("if i need to Pre Decrement 1 so i can do it like this : --userAge; and Answer will be = " + userAge + "</b><br>");

//  if i need to Decrement 1 so i can do it like this as well
//  userAge -= 1;

console.log("if i need to Decrement 1 so i can do it like this as well : userAge -= 1; and Answer will be = " + userAge + "</b><br>");

document.writeln("if i need to Decrement 1 so i can do it like this as well : userAge -= 1; and Answer will be = " + userAge + "</b><br>");

//  if i need to Decrement 1 so i can do it like this as well
//  userAge = userAge - 1;
console.log("if i need to Decrement 1 so i can do it like this as well : userAge = userAge - 1; and Answer will be = " + userAge + "</b><br>");

document.writeln("if i need to Decrement 1 so i can do it like this as well : userAge = userAge - 1; and Answer will be = " + userAge + "</b><br>");

document.writeln('<br><br><b>j. Show the value of variable in your browser like "Value after decrement is: 12".</b><br><br>');

console.log("Value after decrement is: " + userAge);

document.writeln("Value after decrement is: " + userAge);

document.writeln("<br><br> <b>k. Show the remainder after dividing the variable’s value by 3.”.</b><br><br>");

// userAge = userAge % 3;
userAge %= 3;

console.log("Show the remainder after dividing the variable’s value by 3. " + userAge);

document.writeln("Show the remainder after dividing the variable’s value by 3. " + userAge);

document.writeln("<br><br> <b>l. Output : “The remainder is : 0”</b><br><br>");

console.log("The remainder is : " + userAge);

document.writeln("The remainder is : " + userAge);

//  Task 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

document.writeln("<br><br><b>Task 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:</b><br>");

var movieTicket = 600;
var buyingTickets = 5;

var totalCost = movieTicket * buyingTickets;

console.log("Total Cost of buy 5 tickets to a movie is " + totalCost + "PKR");
document.writeln("<br>Total Cost of buy 5 tickets to a movie is " + totalCost + "PKR");


//  5. Write a script to display multiplication table of any number in your browser. E.g

document.writeln("<br><br><b>5. Write a script to display multiplication table of any number in your browser. E.g</b><br>");

var tableNumber = 4;
var counter = 1;
// counter++;
var tableMultiply = tableNumber * counter;

console.log("<br>Table of " + tableNumber);
document.writeln("<br>Table of " + tableNumber + "</br>");

console.log("4 x " + counter++ + " = " + (tableNumber * 1));
console.log("4 x " + counter++ + " = " + (tableNumber * 2));
console.log("4 x " + counter++ + " = " + (tableNumber * 3));
console.log("4 x " + counter++ + " = " + (tableNumber * 4));
console.log("4 x " + counter++ + " = " + (tableNumber * 5));
console.log("4 x " + counter++ + " = " + (tableNumber * 6));
console.log("4 x " + counter++ + " = " + (tableNumber * 7));
console.log("4 x " + counter++ + " = " + (tableNumber * 8));
console.log("4 x " + counter++ + " = " + (tableNumber * 9));
console.log("4 x " + counter++ + " = " + (tableNumber * 10));



document.writeln("4 x " + 1 + " = " + (tableNumber * 1) + "<br>");
document.writeln("4 x " + 2 + " = " + (tableNumber * 2) + "<br>");
document.writeln("4 x " + 3 + " = " + (tableNumber * 3) + "<br>");
document.writeln("4 x " + 4 + " = " + (tableNumber * 4) + "<br>");
document.writeln("4 x " + 5 + " = " + (tableNumber * 5) + "<br>");
document.writeln("4 x " + 6 + " = " + (tableNumber * 6) + "<br>");
document.writeln("4 x " + 7 + " = " + (tableNumber * 7) + "<br>");
document.writeln("4 x " + 8 + " = " + (tableNumber * 8) + "<br>");
document.writeln("4 x " + 9 + " = " + (tableNumber * 9) + "<br>");
document.writeln("4 x " + 10 + " = " + (tableNumber * 10) + "<br>");









