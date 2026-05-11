console.log("My Js code Load");

//  Assignment Start below
//  ----------------------

//  Task 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

document.writeln("<b>Task 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”</b><br><br>");
console.log("Task 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”");

var cityName = prompt("Type your city Name");
document.write("var cityName = prompt('Type your city Name');<br><br>");
console.log("var cityName = prompt('Type your city Name');");

if (cityName === "Karachi") {
    document.write("Welcome to city of lights <br>");
    console.log("Welcome to city of lights");
} else {
    document.write("Welcome to " + cityName + "<br>");
    console.log("Welcome to " + cityName);
}

//  Task 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

document.writeln("<br><b>Task 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.</b><br><br>");
console.log("Task 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.");

var userGender = prompt("Enter you Gender please.", "Male / Female");
document.write("var userGender = prompt('Enter you Gender please.', 'Male / Female');<br><br>");
console.log("var userGender = prompt('Enter you Gender please.', 'Male / Female');");

if (userGender === "Male") {
    console.log("Good Morning Sir.");
    document.writeln("Good Morning Sir.");
} else {
    console.log("Good Morning Ma’am.");
    document.writeln("Good Morning Ma’am.");
}

//  Task 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

document.writeln("<br><br><b>Task 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:</b><br><br>");
console.log("Task 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:");

// var trafficSignalColor = prompt("Please check the color of traffic signal and write here", "Red / Yellow / Green");
var trafficSignalColor = prompt("Please check the color of traffic signal (Red, Yellow, or Green):");
document.write("var trafficSignalColor = prompt('Please check the color of traffic signal(Red, Yellow, or Green):');<br><br>");
console.log("var trafficSignalColor = prompt('Please check the color of traffic signal(Red, Yellow, or Green):');");

if (trafficSignalColor === "Red") {
    console.log("Must Stop");
    document.writeln("Must Stop.");
}

if (trafficSignalColor === "Yellow") {
    console.log("Ready to move");
    document.writeln("Ready to move");
}

if (trafficSignalColor === "Green") {
    console.log("Move now");
    document.writeln("Move now");
}

if (trafficSignalColor !== "Red" && trafficSignalColor !== "Yellow" && trafficSignalColor !== "Green") {
    document.write("Check Signal Again");
}


//  Task 4. Write a program to take input remaining fuel in car(in litres) from user.If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

document.writeln("<br><br><b>Task 4. Write a program to take input remaining fuel in car(in litres) from user.If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”.</b><br><br>");
console.log("Task 4. Write a program to take input remaining fuel in car(in litres) from user.If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”");

var remainingFuel = +prompt("Enter remaining fuel in car, write in litres, Like : 1, 1.25, 1.5, 2");

if (remainingFuel <= 0.25) {
    console.log("Please refill the fuel in your car.");
    document.writeln("Please refill the fuel in your car.");
} else {
    console.log("No Need to refill the fuel in your car.");
    document.writeln("No Need to refill the fuel in your car.");
}

//  Task 4. Run this script, & check whether alert message would be displayed or not. Record the outputs.

document.writeln("<br><br><b>Task 4. Run this script, & check whether alert message would be displayed or not. Record the outputs.</b><br><br>");
console.log("Task 4. Run this script, & check whether alert message would be displayed or not. Record the outputs.”");

//  a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }

document.writeln("<b>a. var a = 4; if (++a === 5){ alert('given condition for variable a is true'); }</b><br><br>");
console.log("a. var a = 4; if (++a === 5){ alert('given condition for variable a is true'); }");

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//  b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }

document.writeln("<b>b. var b = 82; if (b++ === 83){ alert('given condition for variable b is true'); }</b><br><br>");
console.log("b. var b = 82; if (b++ === 83){ alert('given condition for variable b is true'); }");

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//  c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }

document.writeln("<b>c. var c = 12; if (c++ === 13){ alert('condition 1 is true'); } if (c === 13){ alert('condition 2 is true'); } if (++c < 14){ alert('condition 3 is true'); } if(c === 14){ alert('condition 4 is true'); }</b><br><br>");
console.log("c. var c = 12; if (c++ === 13){ alert('condition 1 is true'); } if (c === 13){ alert('condition 2 is true'); } if (++c < 14){ alert('condition 3 is true'); } if(c === 14){ alert('condition 4 is true'); }");

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
    console.log("condition 1 is true");
    document.writeln("condition 1 is true <br /><br />");
}

if (c === 13) {
    alert("condition 2 is true");
    console.log("condition 2 is true");
    document.writeln("condition 2 is true <br /><br />");
}

if (++c < 14) {
    alert("condition 3 is true");
    console.log("condition 3 is true");
    document.writeln("condition 3 is true <br /><br />");
}

if (c === 14) {
    alert("condition 4 is true");
    console.log("condition 4 is true");
    document.writeln("condition 4 is true <br /><br />");
}

//  d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }

document.writeln("<b>d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert('The cost equals'); }</b><br><br>");
console.log("d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert('The cost equals'); }");

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
    console.log("The cost equals");
    document.writeln("The cost equals<br />");
}

//  e. if (true){ alert("True"); } if (false){ alert("False"); }

document.writeln("<br /><b>e. if (true){ alert('True'); } if (false){ alert('False'); }</b><br><br>");
console.log("e. if (true){ alert('True'); } if (false){ alert('False'); }");

if (true) {
    alert("True");
    console.log("True");
    document.writeln("True<br />");
}

if (false) {
    alert("False");
    console.log("False");
    document.writeln("False<br />");
}

//  f. if("car" < "cat"){ alert("car is smaller than cat"); }

document.writeln("<br /><b>f. if('car' < 'cat'){ alert('car is smaller than cat'); }</b><br><br>");
console.log("f. if('car' < 'cat'){ alert('car is smaller than cat'); }");

if ("car" < "cat") {
    alert("car is smaller than cat");
    console.log("car is smaller than cat");
    document.writeln("car is smaller than cat<br />");
}

//  Task 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
//  Show the total marks, marks obtained, percentage, grade & remarks like:

document.writeln("<br /><b>Task 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:</b><br>");
console.log("Task 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:");

var subjectOneMarks = +prompt("Enter obtained Mark for English");
console.log("Subject One Marks = " + subjectOneMarks);
var subjectOneTotalMarks = 100;
console.log("Subject One Total Marks = " + subjectOneTotalMarks);
var subjectTwoMarks = +prompt("Enter obtained Mark for Urdu");
console.log("Subject Two Marks = " + subjectTwoMarks);
var subjectTwoTotalMarks = 100;
console.log("Subject Two Total Marks = " + subjectTwoTotalMarks);
var subjectThreeMarks = +prompt("Enter obtained Mark for Math");
console.log("Subject Three Marks = " + subjectThreeMarks);
var subjectThreeTotalMarks = 100;
console.log("Subject Three Total Marks = " + subjectThreeTotalMarks);

var totalobtained = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;
console.log("Total 3 Subjects obtained Marks = " + totalobtained);
var totalMarks = subjectOneTotalMarks + subjectTwoTotalMarks + subjectThreeTotalMarks;
console.log("Total Marks of 3 subjhects = " + totalMarks);

var percentage = totalobtained / totalMarks * 100;
console.log("Percentage of 3 Subjects " + percentage + "%");

var grade = null;
var remarks = null;

if (percentage > 80) {
    grade = "A-one";
    console.log("grade : " + grade);
    remarks = "Excellent";
    console.log("Remarks : " + remarks);
}

if (percentage > 70 && percentage <= 80) {
    grade = "A";
    console.log("grade : " + grade);
    remarks = "Good";
    console.log("Remarks : " + remarks);
}

if (percentage > 60 && percentage <= 70) {
    grade = "B";
    console.log("grade : " + grade);
    remarks = "You need to improve";
    console.log("Remarks : " + remarks);
}

if (percentage <= 60) {
    grade = "Fail";
    console.log("grade : " + grade);
    remarks = "Sorry";
    console.log("Remarks : " + remarks);
}

document.writeln("<h3>Marks Sheet</h3>");
document.writeln("Total marks : " + totalMarks + "<br>");
document.writeln("Marks Obtained : " + totalobtained + "<br>");
document.writeln("Percentage : " + percentage + "%" + "<br>");
document.writeln("Grade : " + grade + "<br>");
document.writeln("Remarks : " + remarks + "<br>");



//  Task 7. Guess game: Store a secret number(ranging from 1 to 10) in a variable.Prompt user to guess the secret number.a.If user guesses the same number, show “Bingo! Correct answer”.b.If the guessed number + 1 is the secret number, show “Close enough to the correct answer”.
document.writeln("<br /><b>Task 7. Guess game: Store a secret number(ranging from 1 to 10) in a variable.Prompt user to guess the secret number.a.If user guesses the same number, show “Bingo! Correct answer”.b.If the guessed number + 1 is the secret number, show “Close enough to the correct answer”.</b><br><br>");
console.log("Task 7. Guess game: Store a secret number(ranging from 1 to 10) in a variable.Prompt user to guess the secret number.a.If user guesses the same number, show “Bingo! Correct answer”.b.If the guessed number + 1 is the secret number, show “Close enough to the correct answer”.");

var secretNumber = 5;
var userGuessSecretNumber = +prompt("Guess the Secret Number(ranging from 1 to 10).")
console.log(typeof (userGuessSecretNumber))

if (userGuessSecretNumber === secretNumber) {
    console.log("Bingo! Correct answer");
    document.writeln("Bingo! Correct answer<br>");
}

if (userGuessSecretNumber === ++secretNumber) {
    console.log("Close enough to the correct answer");
    document.writeln("Close enough to the correct answer<br>");
}

if (userGuessSecretNumber !== secretNumber) {
    console.log("Sorry! You Guess the Wrong Number. Try Again.");
    document.writeln("Sorry! You Guess the Wrong Number. Try Again.<br>");
}

//  Task 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
document.writeln("<br><b>Task 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.</b><br><br>");
console.log("Task 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.");

var userInputNumber = +prompt("Type Any Number.");
console.log("User input Number = " + userInputNumber)
var numberDivide = userInputNumber % 3;
console.log("User input Number divide by 3 and Modules is = " + numberDivide)

if (numberDivide === 0) {
    console.log("Your Input Nubmber is divisible by 3");
    document.writeln("Your Input Nubmber is divisible by 3");
} else {
    console.log("Your Input Nubmber is not divisible by 3");
    document.writeln("Your Input Nubmber is not divisible by 3");
}

//  Task 9. Write a program that checks whether the given input is an even number or an odd number.

//  Task 10. Write a program that takes temperature as input and shows a message based on following criteria a.T > 40 then “It is too hot outside.” b.T > 30 then “The Weather today is Normal.” c.T > 20 then “Today’s Weather is cool.” d.T > 10 then “OMG! Today’s weather is so Cool.”

//  Task 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

