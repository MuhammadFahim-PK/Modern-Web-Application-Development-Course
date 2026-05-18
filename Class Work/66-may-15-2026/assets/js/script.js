console.log("My Js File active and run in my code.")

var getBtn = document.querySelector('#submit');

console.log("btn clicked" + getBtn);

getBtn = addEventListener('click', function(){
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

    var checkBlankField = inputFirstName
    
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
