/*  Class # 1*/

/*
document.writeln("This is my First Page");
document.write("Hello World!");
document.writeln("<h1> hello <br> world </h1>");
document.writeln("<h1> hello world</h1>");
document.writeln(5 * "abc");
document.writeln(5 * 5);

console.log("This is my First Page.");

alert("hello \n world")

*/

/*  Class # 2   */
/*
var userName = "Muhammad Fahim";
var userAge = "40"

console.log(userName);
console.log("My name is " + userName + " and I am " + userAge + " years old.");

alert(userName);
alert("My name is " + userName + " and I am " + userAge + " years old.");

document.write("My name is " + userName + " and I am " + userAge + " years old.");
document.writeln("<br> My name is " + userName + " and I am " + userAge + " years old.");
document.writeln("<br>" + userName);

var countNumber = 5;
var countNumberTwo = 10;
document.writeln("<br>" + "I add this " + countNumber + countNumberTwo);

document.writeln("<br>" + 4 - 4 + "5" * "2 * 2" + 10 * 2);
document.writeln("<br>" + (2 * 4) * (4 + 2));
*ss/

/*  Class # 3   */

// post increment
// pre increment
// post decrement
// pre decrement

/*
var c = 5
var d = 2

//  var total = 2   +  4  +  4  +  5  +  5     7  +  7  +  9  +  6  +  9 = 58
var eq    = d++ + ++d + d++ + c++ + d++ + ++c + c++ + ++c + d++ + c++
document.writeln("This is total of " + eq);
*/

/*  Class # 4   */
//  
var numOne = 10;
var numTwo = 20;

//  DMAS = Divid Multiply Add Sub
//  BODMAS = BODMAS Brackets, Orders (powers/roots),  Division, Multiplication, Addition,  Subtraction

var eq =    9     +   9      -    8     +     19   -    18    -  18      +    9    = 
var eq = --numOne + numOne-- - numOne++ + --numTwo - --numTwo - numTwo-- + numOne++
document.writeln(eq)


var a = 3;
//  a += 3 || a = a + 3 /// ager same variable main update kerna ho  value to 
a += 3;
document.writeln(a);

/*
// var a = 4
// var b = 2

// b += 10
// a -= 2

// document.writeln(a)
// document.writeln(b)

// var main; // declartion
// var main = "mirzapur" /
// / initialization

// var main;
// document.writeln(main)


// var firstName = prompt("Enter your first name", "johny")
// var lastName = prompt("Enter your last name", "gunnah")

// document.writeln(
//     "Your first name is " + firstName + "<br>" + 
//     "Your last name is " + lastName
// )


//  Type Conversation
// var test = Number(prompt("Test"))
// var num1 = parseInt(prompt("Enter first value"))
// var num2 = +prompt("Enter second value")
// console.log(sub)


var num1 = +prompt("Enter first value")
var num2 = +prompt("Enter second value")

var add = num1 + num2
var sub = num1 - num2
var mul = num1 * num2
var div = num1 / num2


document.writeln(
    "The add of "+ num1 +" and "+ num2 +" is = "+ add + 
    "<br> The sub of "+ num1 +" and "+ num2 +" is = "+ sub + 
    "<br> The mul of "+ num1 +" and "+ num2 +" is = "+ mul + 
    "<br> The div of "+ num1 +" and "+ num2 +" is = "+ div.toFixed(2) 
)
*/

/*  Class # 50 */
//  
var userInput = prompt("Write your Message");
var userMessage = userInput;
console.log(userMessage);
var firtstAlpha = userMessage.slice(0,1).toUpperCase();
var remaingAlha = userMessage.slice(1).toLowerCase();
// console.log(firtstAlpha);
// console.log(remaingAlha);
var mergeWord = firtstAlpha + remaingAlha;
console.log(mergeWord);

