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
