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

