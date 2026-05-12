console.log("Js file working...")


var userColorCode = prompt("Please Select Any Color for this Webpage");
console.log("User select this color = " + userColorCode)

if (userColorCode != '') {
    console.log("This code Running");
    document.body.style.backgroundColor = userColorCode;
} else {
    document.body.style.background = "url('asstes/img/imran-khan.jpg')";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    // document.body.style.backgroundColor = 'pink';
}
