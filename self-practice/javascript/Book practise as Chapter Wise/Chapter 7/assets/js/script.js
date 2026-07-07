console.log("Js code Loaded");


//  Math expressions: Familiar operators : +, -, *, and /, %
//  Math expressions: Unfamiliar operators : **, *, %, ++, --
//  Math expressions: Eliminating ambiguity : () , * , / , % , + , -
//

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
        

    *** Important Concepts

    *** Operator Precedence: JavaScript follows standard math rules (PEMDAS/BODMAS), meaning multiplication and division are performed before addition and subtraction unless parentheses () are used.

    *** Compound Assignment: You can combine math with assignment (e.g., x += 5 is shorthand for x = x + 5).

    *** Unary Operators: The + and - symbols can also be used as unary operators to convert a value to a number or negate its sign.

    Summary of JS Precedence
    Operator Type 	        Operators	    Precedence
    Parentheses	                ()	        Highest
    Exponents	                **	        High
    Mult/Div/Mod	        *, /, %	        Medium (Left-to-Right)
    Add/Sub	                   +, -	        Low (Left-to-Right)


    //  DMAS = Divid Multiply Add Sub
    //  BODMAS = Brackets, Orders (powers/roots),  Division, Multiplication, Addition,  Subtraction

*/

var numOne = 100;
var numTwo = 10;
var numThree = 2;
var numFour = 5;

//  DMAS = Divid Multiply Add Sub
//  BODMAS = Brackets, Orders (powers/roots),  Division, Multiplication, Addition,  Subtraction

var dmas = numOne + numTwo * numThree - numFour / numThree;
//  var dmas = 100 + 10 * 2 - 5 / 2;
//  var dmas = 100 + 10 * 2 - 2.5;
//  var dmas = 100 + 20  - 2.5;
//  var dmas = 120  - 2.5;
//  var dmas = 117.5;
console.log("DMAS = " + dmas)

var bodmas = numOne + (numTwo * numThree) - (numFour / numThree) + (numTwo * numThree) / numThree;
//  var bodmas = 100 + (10 * 2) - (5 / 2) + (10 * 2) / 2;
//  var bodmas = 100 + 20 - 2.5 + 20 / 2;
//  var bodmas = 100 + 20 - 2.5 + 10;
//  var bodmas = 120 - 2.5 + 10;
//  var bodmas = 117.5 + 10;
//  var bodmas = 127.5;
console.log("BODMAS = " + bodmas)


var bodmasTwo = (numOne + (numTwo * numThree)) - (numFour / numThree) + ((numTwo * numThree) / numThree);
//  var bodmasTwo = (100 + (10 * 2)) - (5 / 2) + ((10 * 2) / 2);
//  var bodmasTwo = (100 + 20) - 2.5 + 10;
//  var bodmasTwo = 120 - 2.5 + 10;
//  var bodmasTwo = 117.5 + 10;
//  var bodmasTwo = 127.5;
console.log("BODMAS Two = " + bodmasTwo)
