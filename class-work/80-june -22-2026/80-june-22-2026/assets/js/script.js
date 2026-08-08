console.log("Js code Run.")

function signUp(event) {

    // Stop the page from refreshing immediately
    event.preventDefault();

    let userName = document.getElementById("username");
    console.log(userName.value);

    // userName.value = '';

    localStorage.setItem("User Name", userName.value);

    let userEmail = document.getElementById("email");
    console.log(userEmail.value);

    localStorage.setItem("User Email", userEmail.value);

    let userPassword = document.getElementById("password");
    console.log(userPassword.value);

    localStorage.setItem("User Password", userPassword.value);

    let userConfirmPassword = document.getElementById("cpassword");
    console.log(userConfirmPassword.value);

    localStorage.setItem("User Confirm Password", userConfirmPassword.value);

    let userFirstName = document.getElementById("fname");
    console.log(userFirstName.value);

    localStorage.setItem("User First Name", userFirstName.value);

    let userLastName = document.getElementById("lname");
    console.log(userLastName.value);

    localStorage.setItem("User Last Name", userLastName.value);

    let userNewsLetter = document.getElementById("newsletter");
    console.log(userNewsLetter.value);

    localStorage.setItem("User News Letter", userNewsLetter.value);

}


var allUsers = []

// localStorage.setItem("username", "")