const form = document.querySelector("form");
const list = document.querySelector(".list");
const alert = document.querySelector("#alert");

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}

window.addEventListener("load", checkUsers());

const createBasket = () => {
  const nameInput = document.querySelector("#nameInput");
  const emailInput = document.querySelector("#emailInput");
  const passwordInput = document.querySelector("#passwordInput");

  if (!nameInput.value.trim()) {
    nameInput.style.border = "1px solid red";
    return;
  } else {
    nameInput.style.border = "1px solid black";
  }

  const userSchema = {
    id: Math.random(),
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  const users = JSON.parse(localStorage.getItem("users"));
  users.push(userSchema);

  localStorage.setItem("users", JSON.stringify(users));

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
};

function deleteUser(e) {
  const users = JSON.parse(localStorage.getItem("users"));
  const newUsers = users.filter((item) => item.id != e.value);

  console.log(newUsers);
  localStorage.setItem("users", JSON.stringify(newUsers));

  list.innerHTML = "";
  getUsers(newUsers);
}

const getUsers = (users) => {
  users.map((user) => {
    list.innerHTML += `
   <div class="card" style="width: 18rem">
   <div class="card-body">
     <h5 class="card-title">Username: ${user.name}</h5>
     <h6 class="card-subtitle mb-2 text-body-secondary">
       User email: ${user.email}
     </h6>
     <button value=${user.id} onClick={deleteUser(this)} class="btn btn-danger">Delete</button>
   </div>
 </div>
   `;
  });
};

const users = JSON.parse(localStorage.getItem("users"));
getUsers(users);

function checkUsers() {
  if (JSON.parse(localStorage.getItem("users")).length == 0) {
    alert.style.display = "block";
  } else {
    alert.style.display = "none";
  }
}

checkUsers();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createBasket();
  list.innerHTML = "";
  const users = JSON.parse(localStorage.getItem("users"));
  getUsers(users);
  checkUsers();
});