console.log("Js code load on page");

// function abc() {
//     var someValue = "Hello World!"; 
//     return someValue;
// }

// // abc();

// function def() {
//     // abc();
//     // console.log(abc());

//     return abc();
// }

// var getValue = def();

// console.log(getValue);

// //  Local vs Global Variables


// // Global Variable
// var str = "Hello World";

// function foo() {
//     console.log(str);

//     //  Local Variable
//     var strTwo = "Hello World";

//     console.log(strTwo);
// }

// foo()

// console.log(str);
// // console.log(strTwo);     //  Uncaught ReferenceError: strTwo is not defined


// //  Arrary Exanple

// var arr = ["Apple", "Mango"]

// function checkArray() {
//     arr = ["Bananna"]
//     console.log(arr);
// }

// checkArray();

// console.log(arr);


// //  IIFE - imediate Invoke Funcation

// (function abc() {
//     console.log("Hello IIFE Funcation");
// })();



// //  Calculation

// //  if / else 

// function calc(a, b, c) {
//     // var a;
//     // var b;
//     // var c;

//     // var valueOne = a;
//     // var valueTwo = b;
//     // var valueThree = c;

//     // var valueCalc = valueOne, valueThree, valueTwo;

//     // return(valueCalc);

//     if(c == "+") {
//         return a + b;
//     }
//     else if(c == "-") {
//         return a - b;
//     }
//     else if(c == "*") {
//         return a * b;
//     }
//     else if(c == "/") {
//         return a / b;
//     };
// }


// var plus = calc(10, 20, '+');
// var minus = calc(100, 20, '-');
// var multiply = calc(100, 20, '*');
// var divide = calc(100, 20, '/');

// console.log(plus);
// console.log(minus);
// console.log(multiply);
// console.log(divide);



// //  Find that input text is Palindrome or not
// //  mom, dad, civic, madam

// // var userInput = prompt("Enter any Word.");


// //

// var word = prompt("End any word.");

// //  console.log(word.split('').reverse().join());

// var reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);

// if (word == reverseWord) {
//     console.log(word + " This is a Palandrom Word");
//     console.log('${word} This is a Palandrom Word');
// } else {
//     console.log(word + " This is not a Palandrom Word");
//     console.log('${word} This is not a Palandrom Word');
// }

//


var valOne = document.getElementById('valOne');
var valTwo = document.getElementById('valTwo');
var valThree = document.getElementById('valThree');
var valFour = document.getElementById('valFour');
var valFive = document.getElementById('valFive');


var purchaseValue = document.getElementById('purchaseValue');
var discount = document.getElementById('discountValue');
var payableAmount = document.getElementById('payableAmount');

function purchaseCal() {
    // alert("funvation Call");
    // console.log(valOne.value);
    // console.log(valTwo.value);
    // console.log(valThree.value);
    // console.log(valFour.value);
    // console.log(valFive.value);
    purchaseValue.value = parseInt(valOne.value) + Number(valTwo.value) + parseInt(valThree.value) + Number(valFour.value) + parseInt(valFive.value);
    valOne.value = '';
    valTwo.value = '';
    valThree.value = '';
    valFour.value = '';
    valFive.value = '';
    // purchaseValue.value = '';
    // discount.value = '';
    // payableAmount.value = '';
    
    if (purchaseValue.value >= 10000) {
        console.log("Discount Apply 10K Or Above is 10%");
        discount.value = '10%';
    } else if (purchaseValue.value >= 5000) {
        console.log("Discount Apply less then 10K is 5%");
        discount.value = '5%';
    } else if (purchaseValue.value >= 3000) {
        console.log("Discount Apply less then 5K is 3%");
        discount.value = '3%';
    } else {
        console.log("Discount do not Apply");
        discount.value = '0%';
    }
}

