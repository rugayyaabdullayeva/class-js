
  // Modalı açma fonksiyonu
  function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
  }

  // Modalı kapatma fonksiyonu
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  // Add butonuna tıklama işlemi
  document.getElementById("openModal").addEventListener("click", openModal);

  // Cancel butonuna tıklama işlemi
  document.getElementById("cancelButton").addEventListener("click", closeModal);

  // Update butonuna tıklama işlemi
  document.getElementById("updateButton").addEventListener("click", updateMovie);

  // Add butonuna tıklama işlemi
  document.getElementById("addButton").addEventListener("click", addMovie);

  // Film eklemek için kullanılan fonksiyon
  function addMovie() {
    const imageInput = document.getElementById("imageInput").value;
    const nameInput = document.getElementById("nameInput").value;
    const genreInput = document.getElementById("genreInput").value;

    // Verileri yerel depolamada saklayın veya başka bir veritabanında işleyin.

    // Örneğin, yerel depolamaya eklemek için:
    const movieData = { image: imageInput, name: nameInput, genre: genreInput };
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movieData);
    localStorage.setItem("movies", JSON.stringify(movies));

    // Modalı kapat
    closeModal();

    // Tabloyu güncelle
    updateTable();
  }

  // Tabloyu güncellemek için kullanılan fonksiyon
  function updateTable() {
    const table = document.getElementById("movieTable").getElementsByTagName("tbody")[0];
    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    // Tabloyu temizle
    table.innerHTML = "";

    // Her bir film için satır oluştur
    movies.forEach((movie, index) => {
      const row = table.insertRow(index);
      const imageCell = row.insertCell(0);
      const nameCell = row.insertCell(1);
      const genreCell = row.insertCell(2);
      const editCell = row.insertCell(3);
      const deleteCell = row.insertCell(4);

      imageCell.innerHTML = `<img src="${movie.image}" alt="${movie.name}" width="100">`;
      nameCell.textContent = movie.name;
      genreCell.textContent = movie.genre;

      // Düzenle ve sil butonları ekleyin
      editCell.innerHTML = '<button onclick="editMovie(' + index + ')">Edit</button>';
      deleteCell.innerHTML = '<button onclick="deleteMovie(' + index + ')">Delete</button>';
    });
  }

  // Sayfa yüklendiğinde tabloyu güncelle
  updateTable();
