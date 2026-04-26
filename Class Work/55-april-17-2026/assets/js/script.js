/*
    Notes

    1:  The Assignment Operator (=) assigns a value to a variable:
    2:     var         addition                    =            numOneDigit          +          numTwoDigit         ;
       (keyword)    (variable Name)     (Assignment Operator)   (Operand)       (Operator)      (Operand)   (statement terminator)

    3:  The increment operator (++) increments numbers.

    4: \n use for line break.


    3:  JavaScript line terminators (newline \n, carriage return \r, etc.) mark the end of statements, triggering automatic semicolon insertion (ASI). Key types include Line Feed (\n, UNIX/macOS) and Carriage Return + Line Feed (\r\n, Windows). They are essential for syntax parsing and readability, sometimes influencing execution if omitted. 
*/  

/*
    Chapter # 1 "Alerts"
*/

// alert ("Thanks for your input!");
// alert ("This is Chapter # 1 which related to Alert.");  // short way to write alert
// window.alert("This is another way to write Alert in browser popup..");  // long way to write alert



/*  
    Chapter # 2 "Variables for Strings"
*/

// var userName;   // variable Declaration
// userName = "Mark";  //  variable Initialization
// console.log("variable 'userName' Initialization" + userName);
// document.writeln("variable 'userName' Initialization " + userName);
// document.writeln("<br>");

// var firstName = "Fahim";    //  variable Declaration + Initialization
// firstName = "Muhammad"; //  variable reassignment  or Update
// console.log("variable 'firstName' Initialization" + firstName);
// document.writeln("variable 'firstName' Initialization " + firstName);
// document.writeln("<br>");

// var lastName = "Fahim";
// var fullName = firstName + " " + lastName;
// console.log("variable 'firstName' and 'lastName' plus " + fullName);
// document.writeln("variable 'firstName' and 'lastName' plus " + fullName);


// var firstName = "Fahim" //  ReDeclaration + ReAssignment


/*  
    Chapter # 3 "Variables for Numbers"
*/

// var accountBalance = 70000;
// var chequeDeposite = 25000;
// var chequeDepositeTwo = 35000;

// var newAccountBalnce = accountBalance + chequeDeposite;
// console.log("First cheque Deposite " + newAccountBalnce);


// // ager same varible jo kai pehlay calculate ho chuka hai ki value main mazeed koi variable amount 
// // add kerna ho to yeah tareka bhi use ker sakte hain

// newAccountBalnce += chequeDepositeTwo;

// console.log("Second cheque Deposite " + newAccountBalnce);


/*  
    Chapter # 4 "Variable Names Legal and Illegal"
    
    user camelCase for proper naming
    other then that few thing are allowed in JS for nameing


    *** Legal Variable Names
    
    Camel Case: userName, totalAmount, itemsCount.
    Underscore/Dollar Sign: _private, $element, user_id.
    Numbers: user1, item2 (as long as they don't start with a number).
    Case Sensitivity: myVar and myvar are different. 

    **  Illegal Variable Names 
    
    Start with Numbers: 1stUser.
    Spaces: first name.
    Hyphens/Special Characters: user-name, my#variable.
    Reserved Keywords: class, var, function, return. 

*/

// var userResponse;
// var userResponseTime;
// var userResponseTimeLimit;
// var response;

// var user_name;
// var _username;
// var $username;

// var username1;
// var username2;


 

/*  
    Chapter # 5 "Math expressions: Familiar operators"

    *** Addition (+): Adds two numeric values or concatenates strings.
    *** Subtraction (-): Subtracts the right operand from the left.
    *** Multiplication (*): Multiplies two numbers.
    *** Division (/): Divides the first number by the second.
    *** Modulus (%): Returns the division remainder (e.g., 10 % 3 results in 1).
    *** Exponentiation (**): Raises the first number to the power of the second.
    *** Increment (++): Adds one to a variable.
    *** Decrement (--): Subtracts one from a variable. 
    
    *** Important Concepts
    
    *** Operator Precedence: JavaScript follows standard math rules (PEMDAS/BODMAS), meaning 
    multiplication and division are performed before addition and subtraction unless parentheses () are used.

    *** Compound Assignment: You can combine math with assignment (e.g., x += 5 is shorthand 
    for x = x + 5).
    
    *** Unary Operators: The + and - symbols can also be used as unary operators to convert a 
    value to a number or negate its sign.
*/

/**/
// var popularNumber = 4;
// console.log("This is simple type by which i assign number value to any variable, like = var popularNumber = 4; " + popularNumber);
// var popularNumber = 2 + 2;
// console.log("This is other type by which i assign number value to any variable, like = var popularNumber = 2 + 2; " + popularNumber);

var numOneDigit = 100;
var numTwoDigit = 50;
var numThreeDigit = "25";
console.log("This is the value of variable numOneDigit = " + numOneDigit + " This is the value of variable numTwoDigit =" + numTwoDigit);


//  Addition
var addition = numOneDigit + numTwoDigit;
// console.log(addition);
console.log("This is an addition of two variable = var addition = numOneDigit + numTwoDigit; = " + addition);

//  concatenates
var additionTwo = numOneDigit + numThreeDigit;
// console.log(addition);
console.log("This is an addition of two variable = var additionTwo = numOneDigit + numThreeDigit; whe have one number value in one variable and in other variable we have string, now we find out that in addition when we try to add one numbner with strign so it will concatenate the value= " + additionTwo);

//  Subtraction
var Subtraction = numOneDigit - numTwoDigit;
// console.log(Subtraction);
console.log("This is an Subtraction of two variable = var Subtraction = numOneDigit - numTwoDigit; = " + Subtraction);

//  Multiplication
var Multiplication = numOneDigit * numTwoDigit;
// console.log(Multiplication);
console.log("This is an Multiplication of two variable = var Multiplication = numOneDigit * numTwoDigit; = " + Multiplication);

//  Division
var Division = numOneDigit / numTwoDigit;
// console.log(Division);
console.log("This is an Division of two variable = var Division = numOneDigit / numTwoDigit; = " + Division);

//  Modulus
var Modulus = numOneDigit % numTwoDigit;
// console.log(Modulus);
console.log("This is an Modulus of two variable = var Modulus = numOneDigit %/ numTwoDigit; = " + Modulus);

//  Increment operator (++)

//  Post Increment
// numOneDigit++;
// var postIncrementOperator =  numOneDigit;
var postIncrementOperator =  numOneDigit++;
console.log(postIncrementOperator);
// console.log("BY Post increment operator (++) , we increment value '1' in our varable previous value = var incrementOperator =  numOneDigit; = " + incrementOperator);
//  Answer = 101


//  Pre Increment
// ++numOneDigit;
// var preIncrementOperator =  numOneDigit;
var preIncrementOperator =  ++numOneDigit;
console.log(preIncrementOperator);
//  Answer = 102


//  Decrement Operator (--)

//  Post Decrement
// numOneDigit--;
// var postDecrementOperator =  numOneDigit;
var postDecrementOperator =  numOneDigit--;
console.log(postDecrementOperator);
// console.log("BY Post Decrement operator (++) , we Decrement value '1' in our varable previous value = var postDecrementOperator =  numOneDigit; = " + postDecrementOperator);
//  Answer = 101


//  Pre Decrement
// --numOneDigit;
// var preDecrementOperator =  numOneDigit;
var preDecrementOperator =  --numOneDigit;
console.log(preDecrementOperator);
//  Answer = 100


//  Exponentiation operator (**)

let x = 5;
let z = x ** 2;
console.log(z);

let xx = 5;
let zz = Math.pow(xx,2);
console.log(zz);

//  Operator Precedence (PEMDAS/BODMAS);
//  



// var firstValue = +prompt("Enter your First Number.");
// var secondValue = +prompt("Enter your Second Number.");

// var totalNumber = firstValue + secondValue;
// console.log(totalNumber);
// document.writeln("First numbmer you inster is " + firstValue + " and second Number you insert in " + secondValue + " so total of both number is " + totalNumber + ".");
// document.writeln("<br>");

// var thirdValue = +prompt("Enter your First Number.");
// var fouthValue = +prompt("Enter your Second Number.");

// var totalNumberTwo = thirdValue - fouthValue;
// console.log(totalNumberTwo);
// document.writeln("Third numbmer you inster is " + thirdValue + " and Fourth Number you insert in " + fouthValue + " so after subctraction of both number is " + totalNumberTwo + ".");


/*
    Class # 1
*/

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

/*
    Class # 2
*/

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
*/

/*
    Class # 3
*/

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

/*
    Class # 4   
*/

// var numOne = 10;
// var numTwo = 20;

//  DMAS = Divid Multiply Add Sub
//  BODMAS = Brackets, Orders (powers/roots),  Division, Multiplication, Addition,  Subtraction

//  var eq =    9     +   9      -    8     +     19   -    18    -  18      +    9    = 
// var eq = --numOne + numOne-- - numOne++ + --numTwo - --numTwo - numTwo-- + numOne++;
// document.writeln(eq);


// var a = 3;
//  a += 3 || a = a + 3;  // ager "a" ko re-assign kerni hai new value and porani value main 
// hi mazeed value add kerkai new value assign kerni hai to us ko kernai kay 2 tarekay hain, 
// a += 3;
// a = a + 4;
// document.writeln("This is value of a " + a);
// document.writeln("This is value of b"+ b);
// document.writeln("This is value of c"+ c);

/*
// var a = 3;
// a += 3 || a = a + 3;
// document.writeln(a);

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
// var userInput = prompt("Write your Message");
// var userMessage = userInput;
// console.log(userMessage);
// var firtstAlpha = userMessage.slice(0,1).toUpperCase();
// var remaingAlha = userMessage.slice(1).toLowerCase();
// // console.log(firtstAlpha);
// // console.log(remaingAlha);
// var mergeWord = firtstAlpha + remaingAlha;
// console.log(mergeWord);
