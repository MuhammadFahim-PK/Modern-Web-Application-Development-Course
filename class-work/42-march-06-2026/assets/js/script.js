console.log("test");

let age = 18;
let gender = "Male";
let resident = "Karachi";
let education = "BCS";
let expertise = "Javascript";
let experienceInyear = 2;

if (age >= 18) {
    console.log("You can Apply, please check other requirment.");
    if (gender == "Male") {
        console.log("You age is equal to our requirment, please check other requirment.");
        if (resident == "Karachi") {
            console.log("Our Office is Karachi, so you meet our requirment.");
            if (education = "BCS") {
                console.log("You have done your BCS, so you are elegable for this job.");
            } else {
                console.log("You education do not meet our requirment.")
            }
        } else {
            console.log("This is onsite job, and you are not in Karachi, so we are sorry, that you are not elegable for this job.");
        }
    } else {
        console.log("This job is specific for Male.");
    }
} else {
    console.log("You are under Age! Pleae Apply later when you will be 18 year old.");
}


// if (age >= 18 && gender == "Male" && resident == "Karachi") {
//     console.log("You can Apply, please check other requirment.");    
// } else {
//     console.log("You are under Age! Pleae Apply later when you will be 18 year old.");
// }