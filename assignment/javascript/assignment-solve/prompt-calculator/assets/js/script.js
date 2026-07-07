console.log("Js file add in project.");


let numberOne = +prompt("Enter your First Number", 0 - 9);
console.log('User type first Number, which is "' + numberOne + '"');

let numberTwo = +prompt("Enter your Second Number", 0 - 9);
console.log('User type Second Number, which is "' + numberTwo + '"');

let operator = prompt("Type your Operator", "+ , _ , *, /, % ");
console.log('User type operator, which is "' + operator + '"');

if (operator === "+") {
    console.log("User want to add both numbers = " + (numberOne + numberTwo));
} else if (operator === "-") {
    console.log("User want to subtract numbers = " + (numberOne - numberTwo));
} else if (operator === "*") {
    console.log("User want to Multiply the numbers = " + (numberOne * numberTwo));
} else if (operator === "/") {
    console.log("User want to Divde the numbers = " + (numberOne / numberTwo));
} else if (operator === "%") {
    console.log("User want to Know the Modulus " + (numberOne % numberTwo));
} else {
    console.log("Please provide proper data");
}