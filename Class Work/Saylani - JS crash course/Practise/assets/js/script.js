//  Practice Start Below
//  --------------------

//  Declare and Initialize Variable
var userName = "Muhammad Fahim";

//  Update Variable / Re-Assign Variable
userName = "Faisal";

// alert(userName);        //  user Out
console.log("This is my name " + userName);  //  Developer Output 

//  How to use Variable Name
//  1: it should not start with Number
//  2: it should not start with Symbol, except $ and _
//  3: it should be in camelCase
//  4: it should not be a space
//  5: it should not be a reserved keyword

//  var username = "Muhammad Fahim";           // this is legal variable name
//  var userName = "Muhammad Fahim";            // this is legal variable name, This is the best practice
//  var userName1 = "Muhammad Fahim";           // this is legal variable name
//  var _userName = "Muhammad Fahim";           // this is legal variable name
//  var _userName = "Muhammad Fahim";           // this is legal variable name
//  var $userName = "Muhammad Fahim";            // this is legal variable name
//  var user_Name = "Muhammad Fahim";           // this is legal variable name

//  var 1userName = "Muhammad Fahim";           // this is illegal variable name
//  var 123 = "Muhammad Fahim";                 // this is illegal variable name
//  var *userName = "Muhammad Fahim";           // this is illegal variable name
//  var userName* = "Muhammad Fahim";           // this is illegal variable name
//  var userName! = "Muhammad Fahim";           // this is illegal variable name


//  string Text
var productName = "Biryani Masala";

//  number Text / Integer
var productPrice = 250;

//  float Text / Decimal
var productWeight = 250.5;

//  boolean Text / True or False
var productAvailable = true;

//  undefined Text / Undefined
var productQuantity;

//  null Text / Null
var productDiscount = null;


//  Discount Calculation
var productName = "Biryani Masala";
var productPrice = 250;
var discount = 10;
var discountedPrice = productPrice - discount;
console.log("The discounted price of " + productName + " is " + discountedPrice);


//  Increment Salary
var mySalary = 160000;
var incrementPercentage = 20; // 20%
var incrementAmount = mySalary * incrementPercentage / 100;
var incrementedSalary = mySalary + incrementAmount;
console.log("The incremented salary is " + incrementedSalary);

//  Increment Salary with new percentage
var incrementPercentageIncreased = 30; // 30%
var incrementAmountIncreased = mySalary * incrementPercentageIncreased / 100;
var incrementedSalaryIncreased = mySalary + incrementAmountIncreased;
console.log("The New incremented salary is " + incrementedSalaryIncreased);

//  String Concatenation - (if one variable is string and other is number so it will not add but it will concat)
var originalNum = "23"; //  String
var newNum = 7; //  Number
var sum = originalNum + newNum;
console.log("The sum of " + originalNum + " and " + newNum + " is " + sum);

//  
var firstName = "Muhammad";
var lastName = "Fahim";
var fullName = firstName + " " + lastName; //  String Concatenation
console.log("The full name is " + fullName);

//  String Concatenation - (if two variable are string so it will not sum but it will concat)
var bikeStartNum = "AK";
var bikeLastNum = "1234";
var bikeFullNum = bikeStartNum + bikeLastNum;
console.log("The bike full number is " + bikeFullNum);

//  String Concatenation - (if two variable are string so it will not sum but it will concat)
var bikeStartNum = "11";
var bikeLastNum = "1234";
var bikeFullNum = bikeStartNum + bikeLastNum;
console.log("The bike full number is " + bikeFullNum);

//  String + Num Concatenation - (if one variable is string and other is number so it will not sum but it will concat)
var bikeStartNum = "AK";
var bikeLastNum = 1234;
var bikeFullNum = bikeStartNum + bikeLastNum;
console.log("The bike full number is " + bikeFullNum);

//  String - Num Concatenation - (if one variable is string and other is number so it will not subtract but it will concat)
var bikeStartNum = "AK";
var bikeLastNum = "1234";
var bikeFullNum = bikeStartNum - bikeLastNum; //  String - Num Subtraction (it will give NaN because bikeStartNum is string and bikeLastNum is number)
console.log("The bike full number is " + bikeFullNum);

//  String Concatenation - (if one variable is string and other is number so it will  subtract but it will not concat)
var bikeStartNum = "101";
var bikeLastNum = 23;
var bikeFullNum = bikeStartNum - bikeLastNum;
console.log("The bike full number is " + bikeFullNum);

//  Type Conversion
var num1 = "10";
var num2 = 20;
var sum = parseInt(num1) + parseInt(num2);
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

//  Few Examples are
"Muhammad" + "Fahim";   //  ======> "Muhammad Fahim"
"Muhammad" - "Fahim";   //  ======> NaN => Not a Number
"Fahim" + 10;           //  ======> "Fahim10"
"Fahim" + "10";         //    ======> "Fahim10"
"Fahim" - 10;           //  ======> NaN => Not a Number
"10" + "10"             //    ======> "1010"
"10" + 10               //  ======> "1010"
"10" - "10"             //  ======> 0
"10" - 10               //  ======> 0
10 * 10                 //    ======> 100
"10" * 10               //  ======> 100
"10" / 10               //  ======> 1


//  Variable Name - legal and illegal

// var user Name = "Muhammad Fahim";   //  illegal way
// var user-Name = "Muhammad Fahim";   //  illegal way
// var user#Name = "Muhammad Fahim";   //  illegal way
// var user!Name = "Muhammad Fahim";   //  illegal way
// var user#Name = "Muhammad Fahim";   //  illegal way
// var alert = "Muhammad Fahim";       //  illegal way - not good practice to use JS own keyword as variable name

var userName = "Muhammad Fahim";  //  legal way
var userResponse = "Muhammad Fahim";  //  legal way
var userResponseTime = "Muhammad Fahim";  //  legal way
var userResponseTimeLimit = "Muhammad Fahim";  //  legal way
var userName20 = "Muhammad Fahim";  //  legal way
var user20Name = "Muhammad Fahim";  //  legal way
var $userName = "Muhammad Fahim";   //  legal way
var $userName$ = "Muhammad Fahim";    //  legal way
var $user_Name = "Muhammad Fahim";   //  legal way
var user$Name = "Muhammad Fahim";   //  legal way
var $userName_ = "Muhammad Fahim";  //  legal way
var myAlert = "Muhammad Fahim";     //  legal way
var MyAlert = "Muhammad Fahim";     //  legal way - but we need to take care that JS is Case sensitive


var num = 5;

console.log("The value of num is " + num);

var newNum = ++num; //  Pre Increment
console.log("The value of newNum is " + newNum);


var newNum = --num; //  Pre Decrement

console.log("The value of newNum is " + newNum);

var newNum = num++; //  Post Increment

console.log("The value of newNum is " + newNum);

var newNum = num--; //  Post Decrement

console.log("The value of newNum is " + newNum);

var num = 3;

newNum = ++num + --num + num++ + num++ - ++num - num-- - num-- + ++num + num++
// newNum =   4   +   3   +   3   +  4    -   6   -  6    -  5    +   5   +  5 = 7
console.log("The sum of newNum is " + newNum);






//window.alert("Window.alert is also known as alert box");



