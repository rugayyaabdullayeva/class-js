// const nameInput = document.querySelector("#nameInput");
// const surnameInput = document.querySelector("#surnameInput");
// const addButton = document.querySelector("#addButton");
// const container = document.querySelector("#container");

// if (!localStorage.getItem("users")) {
//     localStorage.setItem("users", JSON.stringify([]));
// }

// const users = JSON.parse(localStorage.getItem("users")) || [];

// window.addEventListener("load", getUsers);

// function addUser() {
//     let userSchema = {
//         id: Math.random(),
//         name: nameInput.value,
//         surname: surnameInput.value
//     }
//     users.push(userSchema);
//     localStorage.setItem("users", JSON.stringify(users));
// }

// function deleteUser(e) {
//     const users = JSON.parse(localStorage.getItem("users"));
//     const newUsers = users.filter((item) => item.id != e.value);

//     console.log(newUsers);
//     localStorage.setItem("users", JSON.stringify(newUsers));

//     list.innerHTML = "";
//     getUsers(newUsers);
// }

// function getUsers() {
//     container.innerHTML = "";

//     users.forEach((user) => {
//         const card = document.createElement("div");
//         const name = document.createElement("p");
//         const surname = document.createElement("p");
//         const deleteButton = document.createElement("button");

//         name.textContent = user.name;
//         surname.textContent = user.surname;
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", () => {
//             deleteUser(user.id);
//         });

//         card.appendChild(name);
//         card.appendChild(surname);
//         card.appendChild(deleteButton);
//         container.appendChild(card);
//     });
// }

// addButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     addUser();
//     getUsers();
// });


// !---------------------------------------------------------------------------------

const nameInput = document.querySelector("#nameInput");
const surnameInput = document.querySelector("#surnameInput");
const addButton = document.querySelector("#addButton");
const container = document.querySelector("#container");

let id = 0;
let users;

if (localStorage.getItem("users")) {
    users = [];
} else {
    console.log("user var");
    users = JSON.parse(localStorage.getItem("users"))
}
