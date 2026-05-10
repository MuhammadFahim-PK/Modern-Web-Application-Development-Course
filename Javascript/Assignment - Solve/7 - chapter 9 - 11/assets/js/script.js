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
document.write("var userGender = prompt('Enter you Gender please.', 'Male / Female')<br><br>");
console.log("var userGender = prompt('Enter you Gender please.', 'Male / Female');");

if (userGender === "Male") {
    console.log("Good Morning Sir.");
    document.writeln("Good Morning Sir.");
} else {
    console.log("Good Morning Ma’am.");
    document.writeln("Good Morning Ma’am.");
}

//  Task 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

document.writeln("<br><b>Task 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:</b><br><br>");
console.log("Task 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:");


