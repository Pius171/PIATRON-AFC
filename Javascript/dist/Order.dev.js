"use strict";

var _app = require("firebase/app");

var _database = require("firebase/database");

// console.log('Order.js is bundled');
// import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCQ34GgMwoq85P34gsRQT0bo6PK7Tpf6yc",
  authDomain: "piatron-a9a6d.firebaseapp.com",
  projectId: "piatron-a9a6d",
  storageBucket: "piatron-a9a6d.appspot.com",
  messagingSenderId: "1065060850773",
  appId: "1:1065060850773:web:83866aa3bac2f552e808dc",
  measurementId: "G-F8CJX083LX" // databaseURL: "food-counter-4a98e-default-rtdb.firebaseio.com",

};
var listCart = [];
var Enter = document.querySelector('.Enter');
var cartItem = document.querySelector('#cartItem');
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _database.getDatabase)();
var cart = document.querySelector('.cart-icon');
var dbref = (0, _database.ref)(db);
(0, _database.get)((0, _database.child)(dbref, "PAU/Location/SST/")).then(function (snapshot) {
  var Menu = []; // console.log(snapshot);

  snapshot.forEach(function (food) {
    Menu.push(food.val());
  });
  console.log(Menu);
  var cartContainer = document.getElementById('cart-container');

  function displayCart() {
    Menu.forEach(function (item) {
      var cartCard = document.createElement('div');
      cartCard.classList.add('cart-card');
      cartCard.innerHTML = "\n        <div hidden>".concat(item.id, "</div>\n        <img class='img1' src=\"").concat(item.image, "\" alt=\"food\" />\n        <div class=\"food-container\">\n          <h3>").concat(item.name, "</h3>\n          <p>&#8358;").concat(item.price, "</p>\n        </div>\n        <p style=\"color: red\">Quantity Available : ").concat(item.qty, "</p>\n        <div class=\"clickButtons\">\n          <button type=\"button\" class=\"number1\" data-item=\"1\">1</button>\n          <button type=\"button\" class=\"number2\" data-item=\"2\">2</button>\n          <button type=\"button\" class=\"number3\" data-item=\"3\">3</button>\n          <button type=\"button\" class=\"number4\" data-item=\"4\">4</button>\n          <button type=\"button\" class=\"number5\" data-item=\"5\">5</button>\n        </div>\n     ");
      cartContainer.append(cartCard);
      var clickButtons = cartCard.querySelector('.clickButtons');
      var number1 = clickButtons.querySelector('.number1');
      var number2 = clickButtons.querySelector('.number2');
      var number3 = clickButtons.querySelector('.number3');
      var number4 = clickButtons.querySelector('.number4');
      var number5 = clickButtons.querySelector('.number5');
      number1.addEventListener('click', function () {
        var itemOne = parseInt(number1.getAttribute("data-item")); // console.log ('item is clicking');

        if (listCart[item.id] == null) {
          addToCart(item.id); // changeQuantity(item.id, itemOne);

          listCart[item.id].quantity = itemOne;
          reloadCart();
        } else {
          // listCart[item.id].quantity = listCart[item.id].quantity + itemName;
          // changeQuantity(item.id, itemName);
          listCart[item.id].quantity = itemOne;
          reloadCart();
        } // quantity.innerText = itemName;
        // reloadCart();
        // console.log(itemName);

      });
      number2.addEventListener('click', function () {
        var itemTwo = parseInt(number2.getAttribute("data-item"));
        console.log('item is clicking');

        if (listCart[item.id] == null) {
          addToCart(item.id);
          listCart[item.id].quantity = itemTwo;
          reloadCart();
        } else {
          listCart[item.id].quantity = itemTwo;
          reloadCart();
        } // quantity.innerText = itemName;
        // reloadCart();
        // console.log(itemName);

      });
      number3.addEventListener('click', function () {
        var itemThree = parseInt(number3.getAttribute("data-item"));
        console.log('item is clicking');

        if (listCart[item.id] == null) {
          addToCart(item.id);
          listCart[item.id].quantity = itemThree;
          reloadCart();
        } else {
          listCart[item.id].quantity = itemThree;
          reloadCart();
        } // quantity.innerText = itemName;
        // reloadCart();
        // console.log(itemName);

      });
      number4.addEventListener('click', function () {
        var itemFour = parseInt(number4.getAttribute("data-item"));
        console.log('item is clicking');

        if (listCart[item.id] == null) {
          addToCart(item.id);
          listCart[item.id].quantity = itemFour;
          reloadCart();
        } else {
          // quantity.innerText = itemFour;
          listCart[item.id].quantity = itemFour;
          reloadCart();
        } // reloadCart();
        // console.log(itemName);

      });
      number5.addEventListener('click', function () {
        var itemFive = parseInt(number5.getAttribute("data-item"));
        console.log('item is clicking');

        if (listCart[item.id] == null) {
          addToCart(item.id);
          listCart[item.id].quantity = itemFive;
          reloadCart(); // console.log(listCart[item.id].quantity);
        } else {
          listCart[item.id].quantity = itemFive;
          reloadCart(); // console.log(listCart[item.id].quantity);
        } // quantity.innerText = itemName;
        // reloadCart();
        // console.log(itemName);

      }); //  cartCard.addEventListener('click', () => {
      //   if (listCart[item.id] == null) {
      //     addToCart(item.id);
      //   }
      //   else  {
      //     listCart[item.id].quantity = listCart[item.id].quantity + 1;
      //   }
      //   reloadCart();
      //  });
      //  cartCard.addEventListener('click', addToCart(item.id))
    });
  }

  console.log(Menu);
  displayCart();

  function addToCart(id) {
    console.log('Item ' + id + ' is added to cart');

    if (listCart[id] == null) {
      listCart[id] = Menu[id];
      listCart[id].quantity = 1;
    }

    reloadCart();
    console.log(listCart);
  }

  function reloadCart() {
    var total = document.querySelector('#total');
    var quantity = document.querySelector('#cart-count');
    cartItem.innerHTML = " ";
    var count = 0;
    var totalPrice = 0.00;

    for (var id in listCart) {
      if (listCart.hasOwnProperty(id)) {
        (function () {
          var item = listCart[id];
          totalPrice += item.price * item.quantity;
          count += item.quantity;
          var cartList = document.createElement('div');
          cartList.setAttribute('id', 'cartLists');
          cartList.innerHTML = "\n        <h3>".concat(item.name, "</h3>\n        <div hidden>").concat(item.id, "</div>\n\n        <div class=\"count\">\n          <button class='minus' type=\"button\">-</button>\n          <p>").concat(item.quantity, "</p>\n          <button class='plus' type=\"button\">+</button>\n        </div>\n      ");
          cartItem.appendChild(cartList); // Attach event listeners to the buttons

          var minusButton = cartList.querySelector('.minus');
          var plusButton = cartList.querySelector('.plus'); // Add a click event listener for the minus button

          minusButton.addEventListener('click', function () {
            // Call a function with the item ID and the action you want (e.g., decrement quantity)
            changeQuantity(item.id, item.quantity - 1);
          }); // Add a click event listener for the plus button

          plusButton.addEventListener('click', function () {
            // Call a function with the item ID and the action you want (e.g., increment quantity)
            changeQuantity(item.id, item.quantity + 1);
          });
        })();
      }
    }

    total.innerText = totalPrice;
    quantity.innerText = count;
  }

  function changeQuantity(id, quantity) {
    if (quantity === 0) {
      delete listCart[id];
    } else if (listCart[id]) {
      listCart[id].quantity = quantity;
    }

    reloadCart();
  }
}); // console.log(listCart);

var sideBar = document.querySelector('.cart-sidebar');
var cartCount = document.querySelector('#cart-count');
var container = document.querySelector('.cart-container'); // const hidden = document.querySelector('.hidden');

cart.addEventListener('click', function () {
  sideBar.style.display = 'flex';
  container.style.width = '73.5%';
});
cartCount.addEventListener('click', function () {
  sideBar.style.display = 'none';
  container.style.width = '97.75%';
  container.style.marginRight = '0px';
});

var uploadToDataBase = function uploadToDataBase() {
  listCart.forEach(function (list) {
    (0, _database.update)((0, _database.ref)(db, "PAU/Location/SST/" + list.name), {
      qty: list.qty - list.quantity
    }).then(function () {
      // console.log(snapshot);
      console.log('Upload Successful');
      window.location.reload();
    })["catch"](function (error) {
      alert('unsuccessful , error: ' + error);
    });
  });
};

Enter.addEventListener('click', function () {
  uploadToDataBase();
  console.log('Upload Successful');
}); // windows.onload = () => {
//   sideBar.style.display = 'none';
//   container.style.width = '97.75%';
//   container.style.marginRight = '0px';
// };