console.log("Js code Loaded");


/*
    Notes : 
    in normal life we always use "if" statements, but sometimes we also use "else" and "else if" statements. 

*/

var userCity = prompt("Enter your city name.");
if (userCity == "karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Welcome to " + userCity);
}

var userName = prompt("Enter Your Name", "John")
if (userName == "") {
    console.log("Welcome User" + userName);
} else {
    console.log("User do not insert Name");
}

var numOne = +prompt("Enter your First Number");
var numTwo = +prompt("Enter your Second Number");
if (numOne > numTwo) {
    console.log(numOne + " is greater than " + numTwo);
    console.log(`${numOne} is greater than ${numTwo}`)
} else {
    console.log(numOne + " is less than " + numTwo);
    console.log(`${numOne} is less than ${numTwo}`)
}


