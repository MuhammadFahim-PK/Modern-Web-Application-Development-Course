console.log("My Js code Load");

//  Assignment Start below
//  ----------------------

//  Task 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

document.writeln("<b>Task 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:</b><br><br>");

var a = 10;
document.write("Result: <br>");
document.write("The value of a is: " + a + "<br>");
document.write(".................................<br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write(".................................<br>");
document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write(".................................<br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write(".................................<br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

//  Task 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--;


document.writeln("<b>Task 2. What will be the output in variables a, b & result after execution of the following script:</b><br><br>");

var a = 2, b = 1;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("result is " + result + "<br>");

//  Task 3. Write a program that takes input a name from user & greet the user.

document.writeln("<b>Task 3. Write a program that takes input a name from user & greet the user.</b><br><br>");

var userName = prompt("Enter Your Name");
document.write("Hello " + userName + "<br><br>");

//  Task 4.

document.writeln("<b>Task 4.</b><br><br>");

//  Task 5. Write a program to take input a number from user & display it’s multiplication table on your browser.If user does not enter a new number, multiplication table of 5 should be displayed by default.

document.writeln("<b>Task 5. Write a program to take input a number from user & display it’s multiplication table on your browser.If user does not enter a new number, multiplication table of 5 should be displayed by default.</b><br><br>");