/*
    Notes

    1:  Concatenation: Concatenation of Strings in JavaScript
        String concatenation is the process of joining two or more strings into a single string. ...
        The + (plus) operator is the most common way to concatenate strings. ...
        For most everyday use cases, template literals and the + operator are the go-to options

    2: Type Conversion : JavaScript automatically converts types when using mathematical operators. 
    The + operator prioritizes string concatenation, while other arithmetic operations trigger number conversion.

*/  

//  Task for Current day
console.log("This is my page");

var days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']

var today = new Date();

console.log("Current Date : " + today);

var currentDay = new Date().getDay();

console.log("Current Day " + currentDay);

if (currentDay === 0 ) {
    console.log("Today is Sunday");
} else if ( currentDay === 1) {
    console.log("Today is Moday");
} else if ( currentDay === 2) {
    console.log("Today is Tuesday");
} else if ( currentDay === 3) {
    console.log("Today is Wednessday");
} else if ( currentDay === 4) {
    console.log("Today is Thursday");
} else if ( currentDay === 5) {
    console.log("Today is Friday");
} else if ( currentDay === 6) {
    console.log("Today is Saturday");
}

//  Task for Age Calculator

var userDateofbirth = new Date('May 21, 1985');
var currentDate = new Date();
var userAgeMilisecond =   currentDate - userDateofbirth;
console.log(userAge);
var userAge = userAgeMilisecond / (1000 * 60 * 60 * 24 * 365);
console.log("User Current Age is " + userAge);
console.log("User Current Age is " + userAge.toFixed(2));

