console.log("My Js File active and run in my code.")

var getSubmitBtn = document.querySelector('#submitBtn');
var getUpdateBtn = document.getElementById('updateBtn');
var getResetBtn = document.querySelector('#resetBtn');

console.log("Submit Button Clicked" + getSubmitBtn);
console.log("Updat Button Clicked" + getUpdateBtn);
console.log("Reset Button Clicked" + getResetBtn);

getSubmitBtn = addEventListener('click', function(){
    //  Get Field Values
    var inputFirstName = document.querySelector('#firstName');
    console.log(inputFirstName);
    var inputLastName = document.querySelector('#lastName');
    console.log(inputLastName);
    var inputEmail = document.querySelector('#email');
    console.log(inputEmail);
    var inputPhone = document.querySelector('#phone');
    console.log(inputPhone);

    //  Check that Field are not Empty

    var checkBlankField = inputFirstName;
    
    //  Get Button
    var table = document.querySelector('#formInfo');
    console.log(table);

    table.style = 'opacity : 1';    

    //  update Data in Table's Colum
    table.querySelector("#firstName").innerHTML = inputFirstName.value;
    table.querySelector("#lastName").innerHTML = inputLastName.value;
    table.querySelector("#emailAddress").innerHTML = inputEmail.value;
    table.querySelector("#phoneNumber").innerHTML = inputPhone.value;

    //  Black the Field's After Submission
    inputFirstName.value = '';    
    inputLastName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
    
})


//
// function abc (e){
//     e.style.backgroundColor = "yellow"
// }


// var getInp = document.querySelector("#user");
// var getList = document.querySelector("#list");
// var getBtn = document.querySelector("#btn");

// // let currentItem = null;
// var currentItem;

// getBtn.addEventListener('click', function () {

//     getList.innerHTML += `<li> ${getInp.value} <button onclick='delBtn(this)'> Delete </button> <button onclick='editItem(this)'> Edit </button> </li>`

//     getInp.value = ""

// })

// function delBtn(e) {
//     e.parentNode.remove()
// }

// function delAll() {
//     getList.innerHTML = ''
// }


// // var getUpdateBtn = document.querySelector("#update")

// function editItem(e) {
//     console.log(e.parentNode.firstChild.textContent);
//     currentItem = e.parentNode.firstChild;
//     getInp.value = e.parentNode.firstChild.textContent;    
//     document.querySelector("#update").style.display = "inline-block";
//     return
// }

// function updateValue() {
    
// }


// function abc(){
//     var a = "saad"
// }


// function xyz(){
//     console.log()
// }

// xyz()

