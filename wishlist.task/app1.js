let products = [];
let wishlist = [];


const openModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
};
document.getElementById("addProductButton").addEventListener("click", openModal);


const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
};
document.getElementById("closeModal").addEventListener("click", closeModal);


const addProduct = (event) => {
    event.preventDefault();
    const productId = document.querySelector("#productId").value;
    const productName = document.querySelector("#productName").value;
    const productCategory = document.querySelector("#productCategory").value;
    const productBrand = document.querySelector("#productBrand").value;
    const productPrice = document.querySelector("#productPrice").value;

    const newProduct = {
        id: productId,
        name: productName,
        category: productCategory,
        brand: productBrand,
        price: productPrice
    };
    products.push(newProduct);
    const productCard = document.createElement("div");
    productCard.className = "card";
    productCard.innerHTML = `
        <h3>${newProduct.name}</h3>
        <p>ID: ${newProduct.id}</p>
        <p>Category: ${newProduct.category}</p>
        <p>Brand: ${newProduct.brand}</p>
        <p>Price: $${newProduct.price}</p>
        <button class="addToWishlist btn btn-success mt-2 mb-4" data-id="${newProduct.id}">Add to Wishlist</button>
    `;

    document.getElementById("productContainer").appendChild(productCard);

    closeModal();
};
document.getElementById("productForm").addEventListener("submit", addProduct);


const addToWishlist = (productId) => {
    const product = products.find((item) => item.id === productId);
    if (product) {
        wishlist.push(product);
        updateWishlist();
    }
};

const updateWishlist = () => {
    const wishlistItems = document.getElementById("wishlistItems");
    wishlistItems.innerHTML = "";
    wishlist.forEach((item) => {
        const wishlistItem = document.createElement("div");
        wishlistItem.className = "wishlist-item";
        wishlistItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>ID: ${item.id}</p>
            <p>Category: ${item.category}</p>
            <p>Brand: ${item.brand}</p>
            <p>Price: $${item.price}</p>
        `;
        wishlistItems.appendChild(wishlistItem);
    });
};


const openWishlist = () => {
    updateWishlist();
    const wishlistOffcanvas = document.getElementById("wishlistOffcanvas");
    wishlistOffcanvas.style.width = "250px";
};

document.getElementById("wishlistButton").addEventListener("click", openWishlist);

const closeWishlist = () => {
    const wishlistOffcanvas = document.getElementById("wishlistOffcanvas");
    wishlistOffcanvas.style.width = "0";
};

document.getElementById("closeWishlist").addEventListener("click", closeWishlist);
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("addToWishlist")) {
        const productId = event.target.getAttribute("data-id");
        addToWishlist(productId);
    }
});
