console.log("Js code Loaded");

//  Prompts

//  If i use prompt without "+" so i can write string in input field.
// var userName = prompt("Type Your Name Please", "Only Alphabates Allowed");
// console.log("This is user name = " + userName);

// var placeHolder = "Type Your Name Please."
// var defaultValue = "Only Alphabates Allowed";
// var userName = prompt(placeHolder, defaultValue);
// console.log("This is user name = " + userName);

// take Input by prompt field
// var inputCatNumber = +prompt("How many Cats Do You Have?");
// console.log("This is user input = " + inputCatNumber)

//  If i use prompt with "+" so i can write only string in input field.

//
var mySalary = +prompt("What is Your Salary?", 100000);
console.log("This is user input = " + mySalary)


var placeHolder = "What is Today's Date?";
var defaultValue = "May 06, 2026";
var currentDate = window.prompt(placeHolder, defaultValue);
console.log("This is current date = " + currentDate);

