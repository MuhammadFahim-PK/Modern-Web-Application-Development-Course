console.log("My Js code Load");

//  Assignment Start below
//  ----------------------

//  Task 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

document.writeln("<b>Task 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:</b><br><br>");
console.log("Task 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:");

var a = 10;
document.write("Result: <br>");
console.log("Result: <br>");
document.write("The value of a is: " + a + "<br>");
console.log("The value of a is: " + a);
document.write(".................................<br>");
console.log(".................................");
document.write("The value of ++a is: " + ++a + "<br>");
console.log("The value of ++a is: " + ++a);
document.write("Now the value of a is: " + a + "<br>");
console.log("Now the value of a is: " + a);
document.write(".................................<br>");
console.log(".................................");
document.write("The value of a++ is: " + a++ + "<br>");
console.log("The value of a++ is: " + a++);
document.write("Now the value of a is: " + a + "<br>");
console.log("Now the value of a is: " + a);
document.write(".................................<br>");
console.log(".................................");
document.write("The value of --a is: " + --a + "<br>");
console.log("The value of --a is: " + --a);
document.write("Now the value of a is: " + a + "<br>");
console.log("Now the value of a is: " + a);
document.write(".................................<br>");
console.log(".................................");
document.write("The value of a-- is: " + a-- + "<br>");
console.log("The value of a-- is: " + a--);
document.write("Now the value of a is: " + a + "<br><br>");
console.log("Now the value of a is: " + a);

//  Task 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--;


document.writeln("<b>Task 2. What will be the output in variables a, b & result after execution of the following script:</b><br><br>");
document.writeln("<b>var a = 2, b = 1;</b><br><br>");
document.writeln("<b>var result = --a - --b + ++b + b--;</b><br><br>");
document.writeln("<b>Explain the output at each stage:</b><br><br>");
document.writeln("<b>--a;</b><br><br>");
document.writeln("<b>--a - --b;</b><br><br>");
document.writeln("<b>--a - --b + ++b;</b><br><br>");
document.writeln("<b>--a - --b + ++b + b--;</b><br><br>");
console.log("<b>Task 2. What will be the output in variables a, b & result after execution of the following script:</b>");
console.log("var result = --a - --b + ++b + b--; ");
console.log("Explain the output at each stage:");
console.log("--a;");
console.log("--a - --b;");
console.log("--a - --b + ++b;");
console.log("--a - --b + ++b + b--;");

var a = 2, b = 1;
document.writeln("var a = 2, b = 1;<br>");
console.log("var a = 2, b = 1;");
document.write("a is " + a + "<br>");
console.log("a is " + a);
document.write("b is " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("result is " + result + "<br><br>");

//  Task 3. Write a program that takes input a name from user & greet the user.
document.writeln("<b>Task 3. Write a program that takes input a name from user & greet the user.</b><br><br>");
console.log("Task 3. Write a program that takes input a name from user & greet the user.");

var userName = prompt("Enter Your Name");
document.write("Hello " + userName + "<br><br>");
console.log("Hello " + userName);

//  Task 4.

document.writeln("<b>Task 4.</b><br><br>");
console.log("Task 4.");

//  Task 5. Write a program to take input a number from user & display it’s multiplication table on your browser.If user does not enter a new number, multiplication table of 5 should be displayed by default.

document.writeln("<b>Task 5. Write a program to take input a number from user & display it’s multiplication table on your browser.If user does not enter a new number, multiplication table of 5 should be displayed by default.</b><br><br>");
console.log("Task 5. Write a program to take input a number from user & display it’s multiplication table on your browser.If user does not enter a new number, multiplication table of 5 should be displayed by default.");

var userNumber = +prompt("Enter Your Number", 5);
console.log("var userNumber = +prompt('Enter Your Number', 5);");
document.write("The multiplication table of " + userNumber + " is:<br><br>");
console.log("The multiplication table of " + userNumber + " is:");
document.write(+ userNumber + " x 1 = " + userNumber * 1 + "<br>");
console.log(+ userNumber + " x 1 = " + userNumber * 1);
document.write(+ userNumber + " x 2 = " + userNumber * 2 + "<br>");
console.log(+ userNumber + " x 2 = " + userNumber * 2);
document.write(+ userNumber + " x 3 = " + userNumber * 3 + "<br>");
console.log(+ userNumber + " x 3 = " + userNumber * 3);
document.write(+ userNumber + " x 4 = " + userNumber * 4 + "<br>");
console.log(+ userNumber + " x 4 = " + userNumber * 4);
document.write(+ userNumber + " x 5 = " + userNumber * 5 + "<br>");
console.log(+ userNumber + " x 5 = " + userNumber * 5);
document.write(+ userNumber + " x 6 = " + userNumber * 6 + "<br>");
console.log(+ userNumber + " x 6 = " + userNumber * 6);
document.write(+ userNumber + " x 7 = " + userNumber * 7 + "<br>");
console.log(+ userNumber + " x 7 = " + userNumber * 7);
document.write(+ userNumber + " x 8 = " + userNumber * 8 + "<br>");
console.log(+ userNumber + " x 8 = " + userNumber * 8);
document.write(+ userNumber + " x 9 = " + userNumber * 9 + "<br>");
console.log(+ userNumber + " x 9 = " + userNumber * 9);
document.write(+ userNumber + " x 10 = " + userNumber * 10 + "<br><br>");
console.log(+ userNumber + " x 10 = " + userNumber * 10);

//  Task 6.
document.writeln("<b>Task 6.</b><br><br>");
console.log("Task 6.");
//  Task 6.a) Take three subjects name from user and store them in 3 different variables.
document.writeln("<b>Task 6.a) Take three subjects name from user and store them in 3 different variables.</b><br><br>");
console.log("Task 6.a) Take three subjects name from user and store them in 3 different variables.");
//  Task 6.b) Total marks for each subject is 100, store it in another variable.
document.writeln("<b>Task 6.b) Total marks for each subject is 100, store it in another variable.</b><br><br>");
console.log("Task 6.b) Total marks for each subject is 100, store it in another variable.");
//  Task 6.c) Take obtained marks for first subject from user and stored it in different variable.
document.writeln("<b>Task 6.c) Take obtained marks for first subject from user and stored it in different variable.</b><br><br>");
console.log("Task 6.c) Take obtained marks for first subject from user and stored it in different variable.");
//  Task 6.d) Take obtained marks for remaining 2 subjects from user and store them in variables.
document.writeln("<b>Task 6.d) Take obtained marks for remaining 2 subjects from user and store them in variables.</b><br><br>");
console.log("Task 6.d) Take obtained marks for remaining 2 subjects from user and store them in variables.");
//  Task 6.e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
document.writeln("<b>Task 6.e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)</b><br><br>");
console.log("Task 6.e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)");

//
var subjectOne = prompt("Enter first subject name:");
var subjectTwo = prompt("Enter second subject name:");
var subjectThree = prompt("Enter third subject name:");
var totalMarksPerSubject = 100;
var obtainedMarksOne = +prompt("Enter Obtained Marks for " + subjectOne + ":");
var obtainedMarksTwo = +prompt("Enter Obtained Marks for " + subjectTwo + ":");
var obtainedMarksThree = +prompt("Enter Obtained Marks for " + subjectThree + ":");
// Convert strings to numbers to allow addition (Chapter 28)
var totalObtained = Number(obtainedMarksOne) + Number(obtainedMarksTwo) + Number(obtainedMarksThree);
var totalPossible = totalMarksPerSubject * 3;
var percentage = (totalObtained / totalPossible) * 100;


document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subjectOne + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksOne + "</td><td>" + (obtainedMarksOne / totalMarksPerSubject * 100) + "%</td></tr>");
document.write("<tr><td>" + subjectTwo + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksTwo + "</td><td>" + (obtainedMarksTwo / totalMarksPerSubject * 100) + "%</td></tr>");
document.write("<tr><td>" + subjectThree + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksThree + "</td><td>" + (obtainedMarksThree / totalMarksPerSubject * 100) + "%</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>" + totalPossible + "</b></td><td><b>" + totalObtained + "</b></td><td><b>" + percentage + "%</b></td></tr>");
document.write("</table>");