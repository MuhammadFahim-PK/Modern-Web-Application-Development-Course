console.log("Js code Loaded");


/*
    Notes : 
    in normal life we always use "if" statements, but sometimes we also use "else" and "else if" statements. 

    if(condition) {
    } else {
    }
        

    ==      =>> is used to compare two values, but it does not check the type of the values.
    ===     =>> is used to compare two values, but it does check the type of the values.
    >       =>> is Greater than operator.
    <       =>> is Less than operator.
    >=      =>> is Greater than or equal to operator.
    <=      =>> is Less than or equal to operator.
    !=      =>> is Not equal operator.
    !==     =>> is Not operator.
    &&      =>> is And operator.
    ||      =>> is Or operator.
*/

var numOne = +prompt("Enter First Number");
var numTwo = +prompt("Enter Second Number");

//  ==     =>> is used to compare two values, but it does not check the type of the values.
if (numOne == numTwo) {
    console.log("numOne " + numOne + " is equal to numTwo " + numTwo);
} else {
    console.log("numOne " + numOne + " is not equal to numTwo " + numTwo);
}

//  ===     =>> is used to compare two values, but it does check the type of the values.
if (numOne === numTwo) {
    console.log("numOne " + numOne + " is equal to numTwo " + numTwo);
} else {
    console.log("numOne " + numOne + " is not equal to numTwo " + numTwo);
}

//  >  =>> is Greater than operator.
if (numOne > numTwo) {
    console.log("numOne " + numOne + " is greater than numTwo " + numTwo);
} else {
    console.log("numTwo " + numTwo + " is greater than from numOne " + numOne);
}

//  <  =>> is Less than operator.
if (numOne < numTwo) {
    console.log("numOne " + numOne + " is Less than numTwo " + numTwo);
} else {
    console.log("numTwo " + numTwo + " is Less than from numOne " + numOne);
}

// >=   =>> is Greater than or equal to operator.
if (numOne >= numTwo) {
    console.log("numOne " + numOne + " is greater than equal to numTwo " + numTwo);
} else {
    console.log("numTwo " + numTwo + " is greater than from numOne " + numOne);
}

//  <=  =>> is Less than operator.
if (numOne < numTwo) {
    console.log("numOne " + numOne + " is Less than equal to numTwo " + numTwo);
} else {
    console.log("numTwo " + numTwo + " is Less than from numOne " + numOne);
}

// !=    =>> is Not operator.
if (numOne != numTwo) {
    console.log("numOne " + numOne + " is not equal to numTwo " + numTwo);
} else {
    console.log("numOne " + numOne + " is equal to numTwo " + numTwo);
}

// !==   =>> is Not equal operator.
if (numOne !== numTwo) {
    console.log("numOne " + numOne + " is not equal to numTwo " + numTwo);
}

//  