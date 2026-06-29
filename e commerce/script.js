// =====================
// CART LOAD
// =====================

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const cartCounter =
document.getElementById("cart-count");


// =====================
// UPDATE CART COUNTER
// =====================

function updateCartCount(){

    if(cartCounter){
        cartCounter.textContent = cart.length;
    }

}

updateCartCount();


// =====================
// ADD TO CART
// =====================

const addButtons =
document.querySelectorAll(".product-btn");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = {

            name: button.dataset.name,

            price: button.dataset.price

        };

        cart.push(product);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        updateCartCount();

        alert("Product Added To Cart!");

    });

});