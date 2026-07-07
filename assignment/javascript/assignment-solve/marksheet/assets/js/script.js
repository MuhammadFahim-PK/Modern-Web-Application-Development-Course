console.log("JS file running");

//  Marks Sheet Program in JavaScript
//  80%+ is A+
//  70%+ is A
//  60%+ is B
//  50%+ is C
//  40%+ is D
//  30%+ is E
//  Less than 30% is F

let obtainedMarks = 100;
console.log("Obtained Marks: " + obtainedMarks);
let studentName = prompt("Enter Studet Name.", "Name");
console.log("Student Name: " + studentName);
let studentRollNumber = prompt(studentName + "'s Roll Number.", "RG-001");
console.log(studentName + "'s Roll Number: " + studentRollNumber);
let studentEnglishMarks = +prompt("Enter Obtained Marks of English.", "50");
console.log(studentName + "'s English Marks: " + studentEnglishMarks);
let studentMathematicsMarks = +prompt("Enter Obtained Marks of Mathematics.", "50");
console.log(studentName + "'s Mathematics Marks: " + studentMathematicsMarks);
let studentUrduMarks = +prompt("Enter Obtained Marks of Urdu.", "50");
console.log(studentName + "'s Urdu Marks: " + studentUrduMarks);
let studentPhysicsMarks = +prompt("Enter Obtained Marks of Physics.", "50");
console.log(studentName + "'s Physics Marks: " + studentPhysicsMarks);
let studentChemistryMarks = +prompt("Enter Obtained Marks of Chemistry.", "50");
console.log(studentName + "'s Chemistry Marks: " + studentChemistryMarks);
let studentTotalMarks = studentEnglishMarks + studentMathematicsMarks + studentUrduMarks + studentPhysicsMarks + studentChemistryMarks;
console.log(studentName + "'s Total Marks Marks: " + studentTotalMarks);
let studentPercentage = ((studentTotalMarks / 500) * 100).toFixed(2);
console.log(studentName + "'s Percentage: " + studentPercentage + "%");
// let studentPercentageRoundOff = parseFloat(studentPercentage).toFixed(2);
let studentPercentageRoundOff = Math.floor(studentPercentage);
console.log(studentName + "'s Percentage: " + studentPercentageRoundOff + "%");

if (studentPercentageRoundOff >= 80 && studentPercentageRoundOff <= 100) {
    console.log(studentName + " You Got A+ Grade")
} else if (studentPercentageRoundOff >= 70 && studentPercentageRoundOff <= 80) {
    console.log(studentName + " You Got A Grade")
} else if (studentPercentageRoundOff >= 60 && studentPercentageRoundOff <= 70) {
    console.log(studentName + " You Got B Grade")
} else if (studentPercentageRoundOff >= 50 && studentPercentageRoundOff <= 60) {
    console.log(studentName + " You Got C Grade")
} else if (studentPercentageRoundOff >= 40 && studentPercentageRoundOff <= 50) {
    console.log(studentName + " You Got D Grade")
} else if (studentPercentageRoundOff >= 30 && studentPercentageRoundOff <= 40) {
    console.log(studentName + " You Got E Grade")
} else {
    console.log(studentName + " You Got F Grade")
}
