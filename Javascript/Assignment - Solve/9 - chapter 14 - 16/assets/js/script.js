console.log("My Js code Load");

//  Assignment Start below
//  ----------------------

//  Task 1. Declare an empty array using JS literal notation

document.writeln(
  "<b>Task 1. Declare an empty array using JS literal notation.</b><br><br>",
);
console.log("Task 1. Declare an empty array using JS literal notation");

var StudentNames = [];

document.writeln("");
console.log("");

//  Task 2. Declare an empty array using JS object notation to store student names in future.

document.writeln(
  "<b>Task 2. Declare an empty array using JS object notation to store student names in future.</b><br><br>",
);
console.log(
  "Task 2. Declare an empty array using JS object notation to store student names in future.",
);

var StudentNames = new Array();

document.writeln("var StudentNames = new Array();<br><br>");
console.log("var StudentNames = new Array();");

//  Task 3. Declare and initialize a strings array.

document.writeln(
  "<b>Task 3. Declare and initialize a strings array.</b><br><br>",
);
console.log("Task 3. Declare and initialize a strings array.");

var colorNames = ["Red", "Yellow", "Green"];

document.writeln('var colorNames = ["Red", "Yellow", "Green"];<br><br>');
console.log('var colorNames = ["Red", "Yellow", "Green"];');

//  Task 4. Declare and initialize a numbers array.

document.writeln(
  "<b>Task 4. Declare and initialize a numbers array.</b><br><br>",
);
console.log("Task 4. Declare and initialize a numbers array.");

var numbers = [1, 2, 3, 4, 5];

document.writeln("var numbers = [1, 2, 3, 4, 5];<br><br>");
console.log("var numbers = [1, 2, 3, 4, 5];");

//  Task 5. Declare and initialize a boolean array.

document.writeln(
  "<b>Task 5. Declare and initialize a boolean array.</b><br><br>",
);
console.log("Task 5. Declare and initialize a boolean array.");

var attendanceStatus = [true, false, true, true];

document.writeln("var attendanceStatus = [true, false, true, true];<br><br>");
console.log("var attendanceStatus = [true, false, true, true];");

//  Task 6. Declare and initialize a mixed array.

document.writeln(
  "<b>Task 6. Declare and initialize a mixed array.</b><br><br>",
);
console.log("Task 6. Declare and initialize a mixed array.");

var mixedData = [1, "Mark", true, 150, NaN, null, false, "John"];

document.writeln(
  'var mixedData = [1, "Mark", true, 150, NaN, null, false, "John"];<br><br>',
);
console.log(
  'var mixedData = [1, "Mark", true, 150, NaN, null, false, "John"];',
);

//  Task 7. Declare and Initialize an array and store available education qualifications in Pakistan(e.g.SSC, HSC, BCS, BS, BCOM, MS, M.Phil., PhD).Show the listed qualifications in your browser like:

document.writeln(
  "<b>Task 7. Declare and Initialize an array and store available education qualifications in Pakistan(e.g.SSC, HSC, BCS, BS, BCOM, MS, M.Phil., PhD).Show the listed qualifications in your browser like:</b><br><br>",
);
console.log(
  "Task 7. Declare and Initialize an array and store available education qualifications in Pakistan(e.g.SSC, HSC, BCS, BS, BCOM, MS, M.Phil., PhD).Show the listed qualifications in your browser like:",
);

var qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.Phil.",
  "PhD",
];

document.writeln(
  'var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];<br><br>',
);
console.log(
  'var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];',
);

document.writeln("Qualifications:<br><br>");
console.log(
  'var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];',
);
document.writeln("1) " + qualifications[0] + "<br>");
document.writeln("2) " + qualifications[1] + "<br>");
document.writeln("3) " + qualifications[2] + "<br>");
document.writeln("4) " + qualifications[3] + "<br>");
document.writeln("5) " + qualifications[4] + "<br>");
document.writeln("6) " + qualifications[5] + "<br>");
document.writeln("7) " + qualifications[6] + "<br>");
document.writeln("8) " + qualifications[7] + "<br><br>");

//  Task 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

document.writeln(
  "<b>Task 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:</b><br><br>",
);
console.log(
  "Task 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:<br><br>",
);

var studentNamesTwo = ["Michael", "John", "Tony"];
var subjectNumber = [320, 230, 480];
var totalMarks = 500;

document.writeln(
  `Score of ${studentNamesTwo[0]} is ${subjectNumber[0]}. Percentage: ${(subjectNumber[0] / totalMarks) * 100}%. <br>`,
);
console.log(
  `Score of ${studentNamesTwo[0]} is ${subjectNumber[0]}. Percentage: ${(subjectNumber[0] / totalMarks) * 100}%.`,
);
document.writeln(
  `Score of ${studentNamesTwo[1]} is ${subjectNumber[1]}. Percentage: ${(subjectNumber[1] / totalMarks) * 100}%.<br>`,
);
console.log(
  `Score of ${studentNamesTwo[1]} is ${subjectNumber[1]}. Percentage: ${(subjectNumber[1] / totalMarks) * 100}%.`,
);
document.writeln(
  `Score of ${studentNamesTwo[2]} is ${subjectNumber[2]}. Percentage: ${(subjectNumber[2] / totalMarks) * 100}%.<br><br>`,
);
console.log(
  `Score of ${studentNamesTwo[2]} is ${subjectNumber[2]}. Percentage: ${(subjectNumber[2] / totalMarks) * 100}%.`,
);

//  Task 9. Initialize an array with color names. Display the array elements in your browser.

document.writeln(
  "<b>Task 9. Initialize an array with color names. Display the array elements in your browser.</b><br><br>",
);
console.log(
  "Task 9. Initialize an array with color names. Display the array elements in your browser.",
);

var colorNamesTwo = ["Yellow", "Green", "Red", "Pink", "Brown"];
document.writeln('var colorNamesTwo = ["Yellow", "Green", "Red", "Pink", "Brown"];<br><br>');
console.log('var colorNamesTwo = ["Yellow", "Green", "Red", "Pink", "Brown"];');

document.writeln(`1): Color #1 is ${colorNamesTwo[0]}<br>`);
console.log(`1): Color #1 is ${colorNamesTwo[0]}`);

document.writeln(`2): Color #2 is ${colorNamesTwo[1]}<br>`);
console.log(`2): Color #2 is ${colorNamesTwo[1]}`);

document.writeln(`3): Color #3 is ${colorNamesTwo[2]}<br>`);
console.log(`3): Color #3 is ${colorNamesTwo[2]}`);

document.writeln(`4): Color #4 is ${colorNamesTwo[3]}<br>`);
console.log(`4): Color #4 is ${colorNamesTwo[3]}`);

document.writeln(`5): Color #5 is ${colorNamesTwo[4]}<br><br>`);
console.log(`5): Color #5 is ${colorNamesTwo[4]}`);

//  Task 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
document.writeln("<b>Task 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.</b><br><br>");
console.log("Task 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.");

var studentScores = ["320", "230", "480","120"];
document.writeln('var studentScores = ["320", "230", "480", "120"];<br><br>');
console.log('var studentScores = ["320", "230", "480","120"];');

document.writeln(`Scores of Students :  ${studentScores}<br><br>`);
console.log(`Scores of Students :  ${studentScores}<br><br>`);

var studentScoresSort = studentScores.sort();
document.writeln("var studentScoresSort = studentScores.sort();<br><br>");
console.log("var studentScoresSort = studentScores.sort();");

document.writeln(`Ordered Scores of Students :  ${studentScoresSort}<br><br>`);
console.log(`Ordered Scores of Students :  ${studentScoresSort}<br><br>`);

//  Task 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
document.writeln("<b>Task 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.</b><br><br>");
console.log("Task 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.");

//  Task 12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
document.writeln("<b>Task 12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)</b><br><br>");
console.log("Task 12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)");

//  Task 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
document.writeln("<b>Task 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)</b><br><br>");
console.log(
  "Task 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)",
);

//  Task 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
document.writeln(
  "<b>Task 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)</b><br><br>",
);
console.log(
  "Task 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)",
);

//  Task 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
document.writeln(
  "<b>Task 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:</b><br><br>",
);
console.log(
  "Task 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:",
);