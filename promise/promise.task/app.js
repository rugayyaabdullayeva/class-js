const form = document.querySelector("form");
const titleInput = document.querySelector("#name-input");
const descInput = document.querySelector("#desc-input");
const tbody = document.querySelector("tbody");

const BASE_URL = "https://northwind.vercel.app/api";

const getUsers = () => {
  const res = fetch(`${BASE_URL}/categories`);
  res
    .then((val) => val.json())
    .then((data) => {
      data
        .sort((a, b) => a.id - b.id)
        .map((elem) => {
          const tr = document.createElement("tr");
          const tdId = document.createElement("td");
          const tdName = document.createElement("td");
          const tdDesc = document.createElement("td");

          tdId.textContent = elem.id;
          tdName.textContent = elem.name;
          tdDesc.textContent = elem.description;
          tr.append(tdId, tdName, tdDesc);
          tbody.appendChild(tr);
        });
    });
};

getUsers();

const addCategories = async () => {
  const bodySchema = {
    name: titleInput.value,
    description: descInput.value,
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
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addCategories();
});