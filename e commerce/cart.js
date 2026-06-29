const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function renderCart(){

    if(!cartItems || !totalElement){
        return;
    }

    if(cart.length === 0){

        cartItems.innerHTML =
        '<p class="empty-cart">Your Cart is Empty 🛒</p>';

        totalElement.textContent =
        "Total: $0";

        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index) => {

        total += Number(item.price);

        cartItems.innerHTML += `

        <div class="cart-item">

            <div>
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
            </div>

            <button onclick="removeItem(${index})">
                Remove
            </button>

        </div>

        `;

    });

    totalElement.textContent =
    "Total: $" + total.toFixed(2);

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();

}

renderCart();