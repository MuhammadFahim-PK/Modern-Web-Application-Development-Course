console.log("This is my document");



//  Chapter # 58. The DOM

//  for get full document info
// console.log(document);

//  When i want to know that how many item are available in my document so i can check by this
// console.log(document.childNodes);

//  when i want to access on inner html so i can access it by index number
// console.log(document.childNodes[0]);
// console.log(document.childNodes[1]);

//  when i want to access nested child so i can do this by using index number
// console.log(document.childNodes[1].childNodes);
//  Note    : whem i access above code i can find out element "text", which can be empty space, 
// so do not be confuse by it, like "NodeList(3) [head, text, body]"

//  by this i can directly access head tag
// console.log(document.childNodes[1].childNodes[0]);

console.log(document.childNodes[1].childNodes[0].childNodes[1]);


//  Chapter # 59. The DOM: Parents and children
//  Chapter # 60. The DOM: Finding children
//  Chapter # 61. The DOM: Junk artifacts and nodeType
//  Chapter # 62. The DOM: More ways to target elements
//  Chapter # 63. The DOM: Getting a target's name
//  Chapter # 64. The DOM: Counting elements
//  Chapter # 65. The DOM: Attributes
//  Chapter # 66. The DOM: Attribute names and values
//  Chapter # 67. The DOM: Adding nodes
//  Chapter # 68. The DOM: Inserting nodes