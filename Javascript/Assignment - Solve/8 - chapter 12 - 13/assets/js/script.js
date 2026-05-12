console.log("My Js code Load");

//  Assignment Start below
//  ----------------------

//  1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

document.writeln("<b>1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).</b><br><br>");
console.log("1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).");



//  2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

document.writeln("<br><b>2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.</b><br><br>");
console.log("2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.");


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
console.log("First Number is Large, is This True or False? = " + checkFirstNumberIsLarge);

var checkSecondNumberIsLarge = usreInputNumberOne < usreInputNumberSecond;
console.log("Second Number is Large, is This True or False? = " + checkSecondNumberIsLarge);

var checkBothNumbersAreEqual = usreInputNumberOne === usreInputNumberSecond;
console.log("Are First and SEcond Number equal ? = " + checkBothNumbersAreEqual);

if (checkFirstNumberIsLarge === true) {
    console.log("User First Input Number is Greater than Second Number");
} else if (checkBothNumbersAreEqual === true) {
    console.log("Both numbers are equal");
} else {
    console.log("User Second Input Number is Greater than First Number");
}
