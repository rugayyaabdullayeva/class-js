// Ürünlerin ve wishlist'in depolandığı dizi
let products = [];
let wishlist = [];

// Modal açma işlevi
const openModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
};

// Modal kapatma işlevi
const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
};

// Ürün eklemesi işlevi
const addProduct = (event) => {
    event.preventDefault();
    const productId = document.getElementById("productId").value;
    const productName = document.getElementById("productName").value;
    const productCategory = document.getElementById("productCategory").value;
    const productBrand = document.getElementById("productBrand").value;
    const productPrice = document.getElementById("productPrice").value;

    // Yeni ürün objesi oluştur
    const newProduct = {
        id: productId,
        name: productName,
        category: productCategory,
        brand: productBrand,
        price: productPrice
    };

    products.push(newProduct);

    // Ürün kartı oluştur ve ekrana ekle
    const productCard = document.createElement("div");
    productCard.className = "card";
    productCard.innerHTML = `
        <h3>${newProduct.name}</h3>
        <p>ID: ${newProduct.id}</p>
        <p>Category: ${newProduct.category}</p>
        <p>Brand: ${newProduct.brand}</p>
        <p>Price: $${newProduct.price}</p>
        <button class="addToWishlist" data-id="${newProduct.id}">Add to Wishlist</button>
    `;

    document.getElementById("productContainer").appendChild(productCard);

    // Modalı kapat
    closeModal();
};

// Wishlist'e ürün ekleme işlevi
const addToWishlist = (productId) => {
    const product = products.find((item) => item.id === productId);
    if (product) {
        wishlist.push(product);
        updateWishlist();
    }
};

// Wishlist'i güncelleme işlevi
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

// Wishlist Offcanvas'ı açma işlevi
const openWishlist = () => {
    updateWishlist();
    const wishlistOffcanvas = document.getElementById("wishlistOffcanvas");
    wishlistOffcanvas.style.width = "250px";
};

// Wishlist Offcanvas'ı kapatma işlevi
const closeWishlist = () => {
    const wishlistOffcanvas = document.getElementById("wishlistOffcanvas");
    wishlistOffcanvas.style.width = "0";
};

// Event Listener'lar
document.getElementById("addProductButton").addEventListener("click", openModal);
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("productForm").addEventListener("submit", addProduct);
document.getElementById("wishlistButton").addEventListener("click", openWishlist);
document.getElementById("closeWishlist").addEventListener("click", closeWishlist);
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("addToWishlist")) {
        const productId = event.target.getAttribute("data-id");
        addToWishlist(productId);
    }
});