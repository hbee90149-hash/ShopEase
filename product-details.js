// ======================
// LOAD PRODUCT
// ======================

const product =
JSON.parse(localStorage.getItem("selectedProduct"));

if(product){

    document.getElementById("productName").textContent =
    product.name;

    document.getElementById("productPrice").textContent =
    "$" + product.price;

    document.getElementById("productImage").src =
    product.image;

    document.getElementById("productDescription").textContent =
    product.description;

    document.getElementById("productRating").textContent =
    product.rating;

    document.getElementById("productBrand").textContent =
    "Brand: " + product.brand;

    document.getElementById("productStock").textContent =
    "Status: " + product.stock;

}

// ======================
// ADD TO CART
// ======================

const addBtn =
document.getElementById("addToCartBtn");

if(addBtn){

    addBtn.addEventListener("click", () => {

        let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

        const quantity =
        Number(document.getElementById("quantity").value);

        for(let i = 0; i < quantity; i++){

            cart.push(product);

        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        alert(
            quantity +
            " Product(s) Added To Cart!"
        );

    });

}