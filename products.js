// ======================
// PRODUCTS DATA
// ======================

const products = [

{
    name: "Wireless Headphones",
    price: 89.99,
    category: "Electronics",
    image: "images/product 1.jpg",
    description: "High-quality wireless headphones with deep bass and long battery life.",
    rating: "⭐⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Luxury Brand"
},

{
    name: "Smart Watch",
    price: 129.99,
    category: "Electronics",
    image: "images/product 2.jpg",
    description: "Smart watch with fitness tracking, heart rate monitor and notifications.",
    rating: "⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Tech Brand"
},

{
    name: "Running Shoes",
    price: 59.99,
    category: "Shoes",
    image: "images/product 3.jpg",
    description: "Comfortable running shoes designed for sports and daily use.",
    rating: "⭐⭐⭐",
    stock: "In Stock",
    brand: "Sports Brand"
},

{
    name: "Leather Bag",
    price: 49.99,
    category: "Fashion",
    image: "images/product 4.jpg",
    description: "Premium leather bag with modern style and durable material.",
    rating: "⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Fashion Brand"
},

{
    name: "Beauty Kit",
    price: 39.99,
    category: "Beauty",
    image: "images/product 5.jpg",
    description: "Complete beauty kit including makeup essentials and skincare items.",
    rating: "⭐⭐⭐",
    stock: "In Stock",
    brand: "Beauty Brand"
},

{
    name: "Fashion Jacket",
    price: 79.99,
    category: "Fashion",
    image: "images/product 6.jpg",
    description: "Trendy fashion jacket perfect for casual and winter wear.",
    rating: "⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Fashion Brand"
},

{
    name: "Hand Dishwasher Gloves",
    price: 24.99,
    category: "Home Living",
    image: "images/picture 7.jpg",
    description: "Durable waterproof dishwasher gloves designed to protect your hands while cleaning dishes.",
    rating: "⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Home Brand"
},

{
    name: "Ink Pen",
    price: 9.99,
    category: "Office and School Supplies",
    image: "images/picture 8.jpg",
    description: "Smooth writing ink pen with comfortable grip, perfect for school and office use.",
    rating: "⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Office Brand"
},

{
    name: "Tennis Racket",
    price: 99.99,
    category: "Sports",
    image: "images/picture 9.jpg",
    description: "Lightweight tennis racket with excellent control and power.",
    rating: "⭐⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Sports Brand"
},

{
    name: "Choker Necklace",
    price: 19.99,
    category: "Accessories",
    image: "images/picture 3.jpg",
    description: "Elegant choker necklace that adds a stylish touch to any outfit.",
    rating: "⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Fashion Brand"
},

{
    name: "Relaxable Shoes",
    price: 69.99,
    category: "Shoes",
    image: "images/picture 5.jpg",
    description: "Soft and comfortable shoes designed for everyday wear.",
    rating: "⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Shoes Brand"
},

{
    name: "Perfume",
    price: 29.99,
    category: "Beauty",
    image: "images/picture 6.jpg",
    description: "Premium fragrance with a refreshing and long-lasting scent.",
    rating: "⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Beauty Brand"
},

{
    name: "Headphones",
    price: 59.99,
    category: "Electronics",
    image: "images/picture 4.jpg",
    description: "High-quality headphones delivering clear sound and deep bass.",
    rating: "⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Electronics Brand"
},

{
    name: "Trendy Fashion Dress",
    price: 89.99,
    category: "Fashion",
    image: "images/picture 2.jpg",
    description: "Modern fashion dress crafted with premium fabric and elegant style.",
    rating: "⭐⭐⭐⭐⭐",
    stock: "In Stock",
    brand: "Fashion Brand"
}

];

// ======================
// ELEMENTS
// ======================

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// ======================
// DISPLAY PRODUCTS
// ======================

function displayProducts(items){

    productsGrid.innerHTML = "";

    items.forEach(product => {

        productsGrid.innerHTML += `

        <div class="product-card"
             onclick='openProduct(${JSON.stringify(product)})'>

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">
                    $${product.price}
                </p>

                <button
                    class="product-btn"
                    data-name="${product.name}"
                    data-price="${product.price}">
                    Add To Cart
                </button>

            </div>

        </div>

        `;
    });

    addCartEvents();
}

// ======================
// ADD TO CART
// ======================

function addCartEvents(){

    const buttons =
    document.querySelectorAll(".product-btn");

    buttons.forEach(button => {

        button.addEventListener("click", (e) => {

            e.stopPropagation();

            let cart =
            JSON.parse(localStorage.getItem("cart")) || [];

            const product = {

                name: button.dataset.name,
                price: Number(button.dataset.price)

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

}

// ======================
// CART COUNTER
// ======================

function updateCartCount(){

    const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    const counter =
    document.getElementById("cart-count");

    if(counter){
        counter.textContent = cart.length;
    }

}

// ======================
// FILTER PRODUCTS
// ======================

function filterProducts(){

    const search =
    searchInput.value.toLowerCase();

    const category =
    categoryFilter.value;

    const filtered =
    products.filter(product => {

        const matchesSearch =
        product.name.toLowerCase().includes(search);

        const matchesCategory =
        category === "all" ||
        product.category === category;

        return matchesSearch && matchesCategory;

    });

    displayProducts(filtered);

}

// ======================
// PRODUCT DETAILS PAGE
// ======================

function openProduct(product){

    localStorage.setItem(
        "selectedProduct",
        JSON.stringify(product)
    );

    window.location.href =
    "product-details.html";

}

// ======================
// EVENTS
// ======================

searchInput.addEventListener(
    "input",
    filterProducts
);

categoryFilter.addEventListener(
    "change",
    filterProducts
);

// ======================
// INITIAL LOAD
// ======================

displayProducts(products);
updateCartCount();