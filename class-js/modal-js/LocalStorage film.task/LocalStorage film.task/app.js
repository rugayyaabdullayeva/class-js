const modal = document.getElementById("modal");
const addButton = document.getElementById("openModal");
const cancelButton = document.getElementById("cancelButton");
const updateButton = document.getElementById("updateButton");
const imageInput = document.getElementById("imageInput");
const nameInput = document.getElementById("nameInput");
const genreInput = document.getElementById("genreInput");
const movieTable = document.getElementById("movieTable").getElementsByTagName("tbody")[0];
document.addEventListener("DOMContentLoaded", function () {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    addButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    cancelButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    updateButton.addEventListener("click", function () {
        const image = imageInput.value;
        const name = nameInput.value;
        const genre = genreInput.value;

        if (image && name && genre) {
            const movie = { image, name, genre };
            movies.push(movie);
            localStorage.setItem("movies", JSON.stringify(movies));
            modal.style.display = "none";
            updateButton();

            imageInput.value = "";
            nameInput.value = "";
            genreInput.value = "";
        }
    });

    function updateTable() {
        movieTable.innerHTML = "";
        movies.forEach((movie, index) => {
            const row = movieTable.insertRow(index);
            const imageCell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const genreCell = row.insertCell(2);
            const editCell = row.insertCell(3);
            const deleteCell = row.insertCell(4);

            imageCell.innerHTML = `<img src="${movie.image}" alt="${movie.name}" width="100">`;
            nameCell.textContent = movie.name;
            genreCell.textContent = movie.genre;

            editCell.innerHTML = '<button onclick="editMovie(' + index + ')">Edit</button>';
            deleteCell.innerHTML = '<button onclick="deleteMovie(' + index + ')">Delete</button>';
        });
    }

    
    function editMovie(index) {

    }

    function deleteMovie(index) {
      
    }

    updateTable();
});

