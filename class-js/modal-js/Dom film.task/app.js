const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("modal");
const imageInput = document.getElementById("imageInput");
const nameInput = document.getElementById("nameInput");
const genreInput = document.getElementById("genreInput");
const addButton = document.getElementById("addButton");
const cancelButton = document.getElementById("cancelButton");
const updateButton = document.getElementById("updateButton");
const movieTable = document.getElementById("movieTable").getElementsByTagName('tbody')[0];

let editingRow = null;

openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
    clearInputs();
});

addButton.addEventListener("click", () => {
    const image = imageInput.value;
    const name = nameInput.value;
    const genre = genreInput.value;

    if (image && name && genre) {
        if (editingRow) {

            editingRow.cells[0].innerHTML = image;
            editingRow.cells[1].innerHTML = name;
            editingRow.cells[2].innerHTML = genre;
            editingRow = null;
            updateButton.style.display = "none";
        } else {
            const row = movieTable.insertRow(0);
            const imageCell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const genreCell = row.insertCell(2);
            const EditCell = row.insertCell(3);
            const DeleteCell = row.insertCell(4);

            imageCell.innerHTML = image;
            nameCell.innerHTML = name;
            genreCell.innerHTML = genre;
            EditCell.innerHTML = '<button onclick="editRow(this)">Edit</button>';
            DeleteCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
        }
        modal.style.display = "none";
        clearInputs();
    }
});

function editRow(button) {
    const row = button.parentElement.parentElement;
    imageInput.value = row.cells[0].textContent;
    nameInput.value = row.cells[1].textContent;
    genreInput.value = row.cells[2].textContent;
    editingRow = row;
    updateButton.style.display = "block";
    modal.style.display = "block";
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function clearInputs() {
    imageInput.value = "";
    nameInput.value = "";
    genreInput.value = "";
}



