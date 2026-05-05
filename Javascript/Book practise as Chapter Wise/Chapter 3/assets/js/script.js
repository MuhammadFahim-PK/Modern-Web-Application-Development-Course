console.log("Js code Loaded");


//  
var numOne = 10;    // declare and initialize

console.log(numOne);

numOne + 10;    //  addition

numOne += 10;   //  addition assignment    
console.log(numOne);

var numTwo = 20;    // declare and initialize
var numThree = 30;    // declare and initialize
var numFour = 40;    // declare and initialize
var numTen = 100;

//  Math Operator = + , - , / , * , ++ , -- , %
//  BODMAS - DMAS
//  BODMAS = Bracket, Order, Division, Multiply, Addition, Substract
//  DMAS = Division, Multiply, Addition, Substract

//  BODMAS
//  var solveBodmas = 1.5             - 20     +   20   *   40
//  var solveBodmas = 1.5             - 20     +   800
//  var solveBodmas =  -18.5     +   800
//  var solveBodmas =  781.5
var solveBodmas = (numThree / numOne) - numOne + numTwo * numFour;

console.log(solveBodmas);

var solveEquOne = numFour + numTwo - numOne;
console.log(solveEquOne);

var solveModules = numTen % numFour;

console.log("i solve modules equsation " + solveModules);

//  Template Literal
console.log(`i solve modules equsation ${solveModules}`);

//  if i need to add or subract only 1 so i can user ++ OR --
numOne++;
console.log(numOne);

numOne--;
console.log(numOne);

numOne += numOne++;
console.log("I only add 1 in numOne " + numOne)
numOne += numOne++;
console.log("I only add 1 in numOne " + numOne)