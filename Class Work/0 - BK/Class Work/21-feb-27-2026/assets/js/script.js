var firstNumber = +prompt("Enter your First Number");
var secondNumber = +prompt("Enter your Second Number");

var add = firstNumber + secondNumber
var sub = firstNumber - secondNumber
var mul = firstNumber * secondNumber
var div = firstNumber / secondNumber

document.writeln("The add of " + firstNumber + " and " +  secondNumber + " is = " + add);
document.writeln("<br> The sub of " + firstNumber + " and " +  secondNumber + " is = " + sub);
document.writeln("<br> The mul of " + firstNumber + " and " +  secondNumber + " is = " + mul);
document.writeln("<br> The div of " + firstNumber + " and " +  secondNumber + " is = " + div.toFixed(2));

document.writeln(
    "The add of " + firstNumber + " and " +  secondNumber + " is = " + add +
    "<br> The sub of " + firstNumber + " and " +  secondNumber + " is = " + sub +
    "<br> The mul of " + firstNumber + " and " +  secondNumber + " is = " + mul +
    "<br> The div of " + firstNumber + " and " +  secondNumber + " is = " + div.toFixed(2)
);

