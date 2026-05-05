console.log("Js code Loaded");


//  Math expressions: Familiar operators : +, -, *, and /, %
//  Math expressions: Unfamiliar operators : **, *, %, ++, --

/*
    ** (Exponentiation)
        Meaning: Raises the first number to the power of the second number.
        Math Equivalent: 
        (x to the power of y)
        Example: 2 ** 3 (2 to the power of 3) =  = 8

    ++ (Increment) 
        Meaning: Increases the value of a variable by exactly 1.
        Math Equivalent:
        Example: If x = 5, then x++ makes x = 6

    -- (Decrement) 
        Meaning: Decreases the value of a variable by exactly 1.
        Math Equivalent: 
        Example: If x = 5, then x-- makes x = 4
*/

var numOne = 100;
var numTwo = 10;
var numThree = 2;
var numFour = 5;

//  Addition
var addition = numOne + numTwo;
console.log("Addition of variable numOne + numTwo = " + addition);
console.log(`Addition of variable numOne + numTwo = ${addition}`);

//  Subtraction
var subtraction = numOne - numTwo;
console.log(subtraction);
console.log("Subtraction of variable numOne - numTwo = " + subtraction);
console.log(`Subtraction of variable numOne - numTwo = ${subtraction}`);

//  Multiplication

var multiplication = numOne * numTwo;
console.log(multiplication);
console.log("Multiplication of variable numOne * numTwo = " + multiplication);
console.log(`Multiplication of variable numOne * numTwo = ${multiplication}`);

//  Division
var division = numOne / numTwo;
console.log(division);
console.log("Division of variable numOne / numTwo = " + division);
console.log(`Division of variable numOne / numTwo = ${division}`);

//  Modulus
var modulus = numOne % numTwo;
console.log(modulus);
console.log("Modulus of variable numOne % numTwo = " + modulus);
console.log(`Modulus of variable numOne % numTwo = ${modulus}`);


//  ** (Exponentiation)
var exponentiation = numThree ** numFour;
console.log(exponentiation);
console.log("Exponentiation of variable numThree ** numFour = " + exponentiation);
console.log(`Exponentiation of variable numThree ** numFour = ${exponentiation}`);

//  ++ (Increment)
//  Increment operator (++)

console.log(numOne);
var increment = numOne++;
console.log(increment);
console.log("Increment of variable numOne++ = " + increment);
console.log(`Increment of variable numOne++ = ${increment}`);

console.log("numOne value is = " + numOne);
console.log("increment value is " + increment);
increment += ++numOne;
console.log("Increment of variable ++numOne = " + increment);
console.log(`Increment of variable ++numOne = ${increment}`);


var numOneDigit = 100;
var numTwoDigit = 50;
var numThreeDigit = "25";

//  Post Increment
// numOneDigit++;
// var postIncrementOperator =  numOneDigit;
var postIncrementOperator = numOneDigit++;
console.log("Post Increment = " + postIncrementOperator);
// console.log("BY Post increment operator (++) , we increment value '1' in our varable previous value = var incrementOperator =  numOneDigit++; = " + incrementOperator);
//  Answer = 100


//  Pre Increment
// ++numOneDigit;
// var preIncrementOperator =  numOneDigit;
var preIncrementOperator = ++numOneDigit;
console.log("Pre Increment = " + preIncrementOperator);
// console.log("BY Pre Increment operator (++) , we increment value '1' in our varable previous value = var preIncrementOperator =  ++numOneDigit; = " + preIncrementOperator);
//  Answer = 102


//  Decrement Operator (--)

//  Post Decrement
// numOneDigit--;
// var postDecrementOperator =  numOneDigit;
var postDecrementOperator = numOneDigit--;
console.log("Post Decrement = " + postDecrementOperator);
// console.log("BY Post Decrement operator (--) , we Decrement value '1' in our varable previous value = var postDecrementOperator =  numOneDigit--; = " + postDecrementOperator);
//  Answer = 102

//  Pre Decrement
// --numOneDigit;
// var preDecrementOperator =  numOneDigit;
var preDecrementOperator = --numOneDigit;
console.log("Pre Decrement = " + preDecrementOperator);
// console.log("BY Pre Decrement operator (--) , we Decrement value '1' in our varable previous value = var preDecrementOperator =  --numOneDigit; = " + preDecrementOperator);
//  Answer = 100


