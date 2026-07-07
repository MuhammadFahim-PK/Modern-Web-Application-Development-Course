console.log("Js file load");

var buttons = document.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {

    var card = this.parentNode.parentNode;

    // console.log(card);

    // while (card && card.className !== "card") {
    //     card = card.parentNode;
    //     console.log(card);
    // }

    var getImage = card.getElementsByClassName("card-img-top")[0].src;
    // console.log(getImage);
    var getTitle = card.getElementsByClassName("card-title")[0].innerHTML;
    // console.log(getTitle);
    var getDesc = card.getElementsByClassName("card-text")[0].innerHTML;
    // console.log(getDesc);
    var getPrice = card.getElementsByClassName("card-price")[0].innerHTML;
    // console.log(getPrice);

    var data = {
        img: getImage,
        title: getTitle,
        desc: getDesc,
        price : getPrice
    };

    console.log(data);
  };
}

/*

var buttons = document.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {

    // 1. Find card manually (no closest)
    var card = this.parentNode;
    while (card && card.className.indexOf("card") === -1) {
      card = card.parentNode;
    }

    // 2. Get product data
    var product = {
      img: card.getElementsByClassName("card-img-top")[0].src,
      title: card.getElementsByClassName("card-title")[0].innerHTML,
      desc: card.getElementsByClassName("card-text")[0].innerHTML,
      price: card.getElementsByClassName("card-price")[0].innerHTML,
      quantity: 1
    };

    // 3. Get cart from localStorage
    var cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }

    // 4. Check if product already exists (no find in ES5)
    var found = false;

    for (var j = 0; j < cart.length; j++) {
      if (cart[j].title === product.title) {
        cart[j].quantity = cart[j].quantity + 1;
        found = true;
        break;
      }
    }

    // 5. If not found, add new product
    if (!found) {
      cart.push(product);
    }

    // 6. Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Cart Updated:", cart);
  };
}

*/



// function getData() {
//     console.log("button clicked");
//     // var getImage = document.getElementsByTagName("img");
//     var getImage = document.getElementsByClassName("card-img-top");
//     console.log(getImage);
// }