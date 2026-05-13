console.log("My Js code Load");

//  Assignment Start below
//  ----------------------

//  Task 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

document.writeln("<b>Task 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).</b><br><br>");
console.log("Task 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).");



//  Task 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

document.writeln("<br><b>Task 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.</b><br><br>");
console.log("Task 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.");


var usreInputNumberOne = +prompt("Please Enter Frist Number.");
document.writeln("var usreInputNumberOne = +prompt('Please Enter Frist Number.'); <br>");
console.log("var usreInputNumberOne = +prompt('Please Enter Frist Number.');");

document.writeln("User Insert First Number is = " + usreInputNumberOne + "<br><br>");
console.log("User Insert First Number is = " + usreInputNumberOne);

var usreInputNumberSecond = +prompt("Please Enter Second Number.");
document.writeln("var usreInputNumberSecond = +prompt('Please Enter Second Number.'); <br>");
console.log("var usreInputNumberSecond = +prompt('Please Enter Second Number.');");

document.writeln("User Insert First Number is = " + usreInputNumberSecond + "<br><br>");
console.log("User Insert First Number is = " + usreInputNumberSecond);

var checkFirstNumberIsLarge = usreInputNumberOne > usreInputNumberSecond;
document.writeln("First Number is Large, is This True or False? = " + checkFirstNumberIsLarge + "<br><br>");
console.log("First Number is Large, is This True or False? = " + checkFirstNumberIsLarge);

var checkSecondNumberIsLarge = usreInputNumberOne < usreInputNumberSecond;
document.writeln("Second Number is Large, is This True or False? = " + checkSecondNumberIsLarge + "<br><br>");
console.log("Second Number is Large, is This True or False? = " + checkSecondNumberIsLarge);

var checkBothNumbersAreEqual = usreInputNumberOne === usreInputNumberSecond;
document.writeln("Are First and Second Number equal ? = " + checkBothNumbersAreEqual + "<br><br>");
console.log("Are First and Second Number equal ? = " + checkBothNumbersAreEqual);

if (checkFirstNumberIsLarge === true) {
    document.writeln("User First Input Number is Greater than Second Number. <br><br>");
    console.log("User First Input Number is Greater than Second Number");
} else if (checkBothNumbersAreEqual === true) {
    document.writeln("");
    console.log("Both numbers are equal");
} else {
    document.writeln("User Second Input Number is Greater than First Number. <br><br>");
    console.log("User Second Input Number is Greater than First Number");
}

//  Task 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

document.writeln("<br><b>Task 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.</b><br><br>");
console.log("Task 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.");

var usreInputNumberTwo = +prompt("Please Enter a Number and we will let you know that your number is positive or Negatice or zero.");
console.log("var usreInputNumberTwo = +prompt('Please Enter a Number and we will let you know that your number is positive or Negatice or zero.');");
document.writeln("var usreInputNumberTwo = +prompt('Please Enter a Number and we will let you know that your number is positive or Negatice or zero.');<br>");

console.log("User insert this number in input field = " + usreInputNumberTwo);
document.writeln("User insert this number in input field = " + usreInputNumberTwo + "<br><br>");

if (usreInputNumberTwo > 0) {
    console.log("Your Insert Number is Positive.");
    document.writeln("Your Insert Number is Positive.<br>");
} else if (usreInputNumberTwo < 0) {
    console.log("Your Insert Number is Negative.");
    document.writeln("Your Insert Number is Negative.<br>");
} else {
    console.log("Your Insert Number is Zero.");
    document.writeln("Your Insert Number is Zero.<br>");
}

//  Task 4. Write a program that takes a character(i.e.string of length 1) and returns true if it is a vowel, false otherwise

document.writeln("<br><b>Task 4. Write a program that takes a character(i.e.string of length 1) and returns true if it is a vowel, false otherwise.</b><br><br>");
console.log("Task 4. Write a program that takes a character(i.e.string of length 1) and returns true if it is a vowel, false otherwise.");