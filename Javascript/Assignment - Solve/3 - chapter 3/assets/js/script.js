console.log("My Js code Load");

//  Assignment Start below
//  ----------------------

//  Task 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age;

age = 15;

alert("I am " + age + " years old");

//  Task 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var visitorVisitedCount = 15;
alert("You have visited this site " + visitorVisitedCount + " times");

//  Task 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear;
birthYear = 1985;

document.writeln("My birth year is " + birthYear);
document.write("<br> Data type of my declared variable is " + typeof (birthYear));

//  Task 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
// a. Visitor’s name 
// b. Product title 
// c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "John Doe";
var productTitle = "T-shirt";
var productCount = 5;
var storeName = "XYZ Clothing store";

document.writeln('<br><b>"' + visitorName + '</b> ordered <b>' + productCount + ' ' + productTitle + '(s)</b> on ' + storeName + '<b>"</b>');