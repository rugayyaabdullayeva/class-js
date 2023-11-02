const form = document.querySelector("form");
const titleInput = document.querySelector("#title-input");
const priceInput = document.querySelector("#price-input");
const descInput = document.querySelector("#desc-input");
const categoryInput = document.querySelector("#category-input");
const tbody = document.querySelector("tbody");

const BASE_URL = "https://fakestoreapi.com/products"

const getUsers = () => {
    const res = fetch(`${BASE_URL}`);
    res
        .then((val) => val.json())
        .then((data) => {
            data
                .sort((a, b) => a.id - b.id)
                .map((elem) => {
                    const tr = document.createElement("tr");
                    const tdId = document.createElement("td");
                    const tdTitle = document.createElement("td");
                    const tdPrice = document.createElement("td")
                    const tdDesc = document.createElement("td");
                    const tdCategory = document.createElement("td");
                    const tdDelete = document.createElement("td");
                    const deleteButton = document.createElement("button");
                    deleteButton.textContent = "Delete";

                    tdId.textContent = elem.id;
                    tdTitle.textContent = elem.title;
                    tdPrice.textContent = elem.price
                    tdDesc.textContent = elem.description;
                    tdCategory.textContent = elem.category;
                    tr.append(tdId, tdTitle, tdPrice, tdDesc, tdCategory,tdDelete);
                    tbody.appendChild(tr);
                });
        });
};

getUsers();

const addCategories = async () => {
    const bodySchema = {
        title: titleInput.value,
        price: priceInput.value,
        description: descInput.value,
        category: categoryInput.value,
    };

    await fetch(`${BASE_URL}/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodySchema),
    });

    tbody.innerHTML = "";
    getUsers();

    titleInput.value = "";
    descInput.value = "";
    priceInput.value = "";
    categoryInput.value = "";
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addCategories();
});



deleteButton.classList.add("btn", "btn-danger");
deleteButton.addEventListener("click", () => {
});
tdDelete.appendChild(deleteButton);
tr.appendChild(tdDelete);
deleteButton.addEventListener("click", () => {
    const productId = elem.id;
    fetch(`${BASE_URL}/${productId}`, {
        method: "DELETE",
    })
        .then((response) => {
            if (response.status === 200) {
                tr.remove();
            } else {

            }
        });
});