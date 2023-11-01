// const BASE_URL = "https://northwind.vercel.app/api";

// const getPosts = async () => {
//     const res = await fetch(`${BASE_URL}/products`);
//     const data = res.json();
//     return data
// };

// const createTable = () => {
//     getPosts().then((data) => {
//         data.forEach((item) => {
//             const tr = document.createElement("tr");

//             const tdId = document.createElement("td");
//             tdId.innerHTML = item.id;

//             const tdName = document.createElement("td");
//             tdName.innerHTML = item.name

//             const button = document.createElement("button");
//             button.style.backgroundColor = "green"
//             button.style.color = "white"
//             button.style.border = "none"
//             button.style.borderRadius = "7px"
//             button.style.margin = "10px"
//             button.innerHTML = "Delete"

//             const detailButton = document.createElement("button");
//             detailButton.style.backgroundColor = "orange"
//             detailButton.style.color = "white"
//             detailButton.style.border = "none"
//             detailButton.style.borderRadius = "7px"
//             detailButton.style.margin = "10px"
//             detailButton.innerHTML = "Detail Button"


//             tr.append(tdId, tdName, button, detailButton);
//             document.querySelector("#t-body").append(tr);

//             button.addEventListener("click", async () => {
//                 await fetch(`${BASE_URL}/products/${item.id}`, {
//                     method: "DELETE",
//                 });
//                 tr.remove();
//             });
//         })
//         etailButton.addEventListener("click", () => {
//             getProducts().then((data) => {
//               detailContainer.innerHTML = ""; 

//               data.forEach((item) => {
//                 const card = document.createElement("div");
//                 card.style.width = "36rem";
//                 card.style.border = "1px solid red";

//                 const userId = document.createElement("h1");
//                 userId.innerText = item.id;

//                 const title = document.createElement("h2");
//                 title.innerText = item.name;

//                 const body = document.createElement("p");
//                 body.innerText = item.quantityPerUnit;

//                 const unitsInStock = document.createElement("p");
//                 unitsInStock.innerText = item.unitsInStock;

//                 const unitPrice = document.createElement("p");
//                 unitPrice.innerText = item.unitPrice;

//                 const discontinued = document.createElement("p");
//                 discontinued.innerText = item.discontinued;

//                 card.append(userId, title, body, unitsInStock, unitPrice, discontinued);
//                 detailContainer.appendChild(card);
//                 document.querySelector(".detailContainer").appendChild(card);
//               });
//             });
//           });

//     })
// }

// createTable()



const BASE_URL = "https://northwind.vercel.app/api";

const getProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json(); // "await" ekledim
    return data;
};

const createTable = () => {
    getProducts().then((data) => {
        data.forEach((item) => {
            const tr = document.createElement("tr");

            const tdId = document.createElement("td");
            tdId.innerHTML = item.id;

            const tdName = document.createElement("td");
            tdName.innerHTML = item.name;

            const button = document.createElement("button");
            button.style.backgroundColor = "green";
            button.style.color = "white";
            button.style.border = "none";
            button.style.borderRadius = "7px";
            button.style.margin = "10px";
            button.innerHTML = "Delete";

            const detailButton = document.createElement("button");
            detailButton.style.backgroundColor = "orange";
            detailButton.style.color = "white";
            detailButton.style.border = "none";
            detailButton.style.borderRadius = "7px";
            detailButton.style.margin = "10px";
            detailButton.innerHTML = "Detail Button";

            tr.append(tdId, tdName, button, detailButton);
            document.querySelector("#t-body").append(tr);

            button.addEventListener("click", async () => {
                await fetch(`${BASE_URL}/products/${item.id}`, {
                    method: "DELETE",
                });
                tr.remove();
            });

            detailButton.addEventListener("click", () => {
                getProducts().then((data) => {
                    const detailContainer = document.querySelector(".detailContainer");
                    detailContainer.innerHTML = "";

                    data.forEach((item) => {
                        const card = document.createElement("div");
                        card.style.width = "36rem";
                        card.style.border = "1px solid red";

                        const userId = document.createElement("h1");
                        userId.innerText = item.id;

                        const title = document.createElement("h2");
                        title.innerText = item.name;

                        const body = document.createElement("p");
                        body.innerText = item.quantityPerUnit;

                        const unitsInStock = document.createElement("p");
                        unitsInStock.innerText = item.unitsInStock;

                        const unitPrice = document.createElement("p");
                        unitPrice.innerText = item.unitPrice;

                        const discontinued = document.createElement("p");
                        discontinued.innerText = item.discontinued;

                        card.append(userId, title, body, unitsInStock, unitPrice, discontinued);
                        detailContainer.appendChild(card);
                    });
                });
            });
        });
    });
}

createTable();