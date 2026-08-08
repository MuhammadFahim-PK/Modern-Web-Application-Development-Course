/*
    Notes
*/
/*
    window.print()  ==>>    for print the content of the current window

    JavaScript can "display" data in different ways:

    Writing into an HTML element, using innerHTML or innerText.
    Writing into the HTML output using document.write().
    Writing into an alert box, using window.alert().
    Writing into the browser console, using console.log().

*/

// console.log("This is my first page");





// userName = "Fahim";


// console.log("we try to access userName variable " + userName);

// TDZ = Temporal dead zone

// let userName = "Fahim";
// const userName = "Fahim";



// let test = (a, b) => {
//     console.log()
//     return a + b
// }

// console.log(test(20, 30));


//  .innerHTML      ==>> 

// var article = document.getElementsByClassName("article");
var article = document.getElementsByClassName("article");
console.log(article);
var articleID = document.getElementById("article");
console.log(articleID);
var heading = document.getElementById("heading");
console.log(heading);

var headingText = document.getElementById("heading").innerHTML;
console.log(headingText);

var headingTextTwo = document.getElementById("heading").innerText;
console.log(headingTextTwo);


//  Shallow copy and deep copy
//  iterators
//  for of loop
//  map
//  filter
//  foreach
//  find
//  reduce
//  some
//  every
//  flat









