console.log("Js file include.");

// var getBulbImage = document.querySelector('.js_bulb-img');

function bulpOn() {
    // console.log("this is image" + getBulbImage);
    var getBulbImage = document.querySelector('.js_bulb-img');
    getBulbImage.src = "assets/images/bulb-on.png";
}

function bulbOff() {
    // console.log("this is image" + getBulbImage);
    var getBulbImage = document.querySelector('.js_bulb-img');
    getBulbImage.src = "assets/images/bulb-off.png";
}

function bulpToggleState() {
    console.log("Button Clicked");
    var getBulbImageSec = document.querySelector('.js_bulb-img-two');
    console.log(getBulbImageSec.src);
    if (getBulbImageSec.src === "./assets/images/bulb-off.png") {
        getBulbImageSec.src = "./assets/images/bulb-on.png";
        console.log("this code runs.");
    } else {
        getBulbImageSec.src = "assets/images/bulb-off.png";
    }
}