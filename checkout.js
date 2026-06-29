// ======================
// ORDER SUMMARY
// ======================

const orderItems =
document.getElementById("orderItems");

const orderTotal =
document.getElementById("orderTotal");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

if(orderItems && orderTotal){

    cart.forEach(item => {

        total += Number(item.price);

        orderItems.innerHTML += `

        <div class="order-item">

            <span>${item.name}</span>

            <span>$${item.price}</span>

        </div>

        `;

    });

    orderTotal.textContent =
    "Total: $" + total.toFixed(2);

}

// ======================
// PLACE ORDER
// ======================

const checkoutForm =
document.getElementById("checkoutForm");

if(checkoutForm){

    checkoutForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("🎉 Order Placed Successfully!");

        localStorage.removeItem("cart");

        window.location.href =
        "index.html";

    });

}