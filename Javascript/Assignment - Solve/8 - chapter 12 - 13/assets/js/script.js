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

var usreInputNumberThree = prompt("Enter any English character in this field, we will let you know that your insert character is vowel or not");
document.writeln("var usreInputNumberThree = prompt('Enter any English character in this field, we will let you know that your insert character is vowel or not'); <br>");
console.log("var usreInputNumberThree = prompt('Enter any English character in this field, we will let you know that your insert character is vowel or not');");

document.writeln("User insert character is = " + usreInputNumberThree + "<br><br>");
console.log("User insert character is = " + usreInputNumberThree);

var userInsertblank = usreInputNumberThree === '';
document.writeln("var userInsertblank = usreInputNumberThree === '';<br>");
console.log("var userInsertblank = usreInputNumberThree === '';");

if (usreInputNumberThree !== userInsertblank) {
    console.log("User Write Some Thing.");
    document.writeln("User Write Some Thing.<br>");
    if (usreInputNumberThree === "a") {
        document.writeln("User Write vowel character, which is = " + usreInputNumberThree + "<br>");
        console.log("User Write vowel character, which is = " + usreInputNumberThree);
    } else if (usreInputNumberThree === "e") {
        document.writeln("User Write vowel character, which is = " + usreInputNumberThree + "<br>");
        console.log("User Write vowel character, which is = " + usreInputNumberThree);
    } else if (usreInputNumberThree === "i") {
        document.writeln("User Write vowel character, which is = " + usreInputNumberThree + "<br>");
        console.log("User Write vowel character, which is = " + usreInputNumberThree);
    } else if (usreInputNumberThree === "o") {
        document.writeln("User Write vowel character, which is = " + usreInputNumberThree + "<br>");
        console.log("User Write vowel character, which is = " + usreInputNumberThree);
    } else if (usreInputNumberThree === "u") {
        document.writeln("User Write vowel character, which is = " + usreInputNumberThree + "<br>");
        console.log("User Write vowel character, which is = " + usreInputNumberThree);
    } else {
        document.writeln("User do not Write vowel character, which is = " + usreInputNumberThree + "<br>");
        console.log("User do not Write vowel character, which is = " + usreInputNumberThree);
    }
} else {
    document.writeln("User Field Blank Field.<br><br>");
    console.log("User Field Blank Field.");
}

//  Task 5. Write a program that
//  a.Store correct password in a JS variable.
//  b.Asks user to enter his / her password
//  c.Validate the two passwords:
//      i.Check if user has entered password.If not, then give message “ Please enter your password”
//      ii.Check if both passwords are same.If they are same, show message “Correct! The password you entered matches the original password”.Show “Incorrect password” otherwise.

document.writeln("<br><b>Task 5. Write a program that</b><br>");
document.writeln("<b>a.Store correct password in a JS variable.</b><br>");
document.writeln("<b>b.Asks user to enter his / her password </b><br>");
document.writeln("<b>c.Validate the two passwords: </b><br>");
document.writeln("<b>i.Check if user has entered password.If not, then give message “ Please enter your password” </b><br>");
document.writeln("<b>ii.Check if both passwords are same.If they are same, show message “Correct! The password you entered matches the original password”.Show “Incorrect password” otherwise. </b><br><br>");
console.log("Task 5. Write a program that");
console.log("a.Store correct password in a JS variable.");
console.log("b.Asks user to enter his / her password");
console.log("c.Validate the two passwords:");
console.log("i.Check if user has entered password.If not, then give message “ Please enter your password”");
console.log("ii.Check if both passwords are same.If they are same, show message “Correct! The password you entered matches the original password”.Show “Incorrect password” otherwise.");

var storePassword = "Fahim#123";
document.writeln("var storePassword = 'Fahim#123';<br>");
console.log("var storePassword = 'Fahim#123';");

var usreInputNumberFour = prompt("Please enter your password.");
document.writeln("var usreInputNumberFour = promt('Please enter your password.');<br>");
console.log("var usreInputNumberFour = promt('Please enter your password.');");

document.writeln("User Input Text is = " + usreInputNumberFour + "<br><br>");
console.log("User Input Text is = " + usreInputNumberFour);

if (usreInputNumberFour !== '') {
    document.writeln("if Condition Run.<br><br>");
    console.log("if Condition Run.")
    if (usreInputNumberFour === storePassword) {
        document.writeln("Correct! The password you entered matches the original password <br><br>");
        console.log("Correct! The password you entered matches the original password");
    } else {
        document.writeln("Incorrect password <br><br>");
        console.log("Incorrect password");
    }
} else {
    document.writeln("Please Write Password for Login. <br><br>");
    console.log("Please Write Password for Login.")
}

//  Task 6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }

document.writeln('<b>Task 6. This if/else statement does not work. Try to fix it: <br> var greeting; <br> var hour = 13; <br> if (hour < 18) { <br> greeting = "Good day"; <br> else greeting = "Good evening"; <br>}</b><br><br>');
console.log('<b>Task 6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }</b>');

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
    document.writeln(greeting + "<br><br>");
    console.log(greeting);
} else {
    greeting = "Good evening";
    document.writeln(greeting + "<br><br>");
    console.log(greeting);
}

//  Task 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

document.writeln("<b>Task 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements</b><br><br>");
console.log("<b>Task 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements</b>");

var usreInputNumberFive = +prompt("Please write current Time, Like 24 hours clock format like: 1900 = 7pm");
document.writeln("var usreInputNumberFive = +prompt('Please write current Time, Like 24 hours clock format like: 1900 = 7pm');<br><br>");
console.log("var usreInputNumberFive = +prompt('Please write current Time, Like 24 hours clock format like: 1900 = 7pm');");

document.writeln("User Input time is = " + usreInputNumberFive + "<br><br>");
console.log("User Input time is = " + usreInputNumberFive);

console.log("User Input time is = " + typeof (usreInputNumberFive));

if (usreInputNumberFive !== '') {
    document.writeln("if Condition Run.<br><br>");
    console.log("if Condition Run.")
    if ((usreInputNumberFive >= 0000) && (usreInputNumberFive < 1200)) {
        document.writeln("Good Morning.<br><br>");
        console.log("Good Morning.");
    } else if ((usreInputNumberFive >= 1200) && (usreInputNumberFive < 1700)) {
        document.writeln("Good Morning.<br><br>");
        console.log("Good Morning.");
    } else if ((usreInputNumberFive >= 1700) && (usreInputNumberFive < 2100)) {
        document.writeln("Good Evening.<br><br>");
        console.log("Good Evening.");
    } else if ((usreInputNumberFive >= 2100) && (usreInputNumberFive <= 2359)) {
        document.writeln("Good Night.<br><br>");
        console.log("Good Night.");
    } else {
        document.writeln("Please Write Correct Time.<br><br>");
        console.log("Please Write Correct Time.");
    }
} else {
    document.writeln("Please Write Time.<br><br>");
    console.log("Please Write Time..")
}