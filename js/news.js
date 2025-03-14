function initNews() {
  document
    .getElementById("dropdownButton")
    .addEventListener("click", function () {
      const dropdownMenu = document.getElementById("dropdownMenu");
      dropdownMenu.classList.toggle("hidden");
    });

  // Dropdown-ийн гадна дарж хаах
  document.addEventListener("click", function (event) {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.add("hidden");
    }
  });

  // Dialog нээх товч
  document.getElementById("openModal").addEventListener("click", function () {
    const dialog = document.getElementById("modal");
    dialog.classList.remove("hidden"); // Dialog нээх
    document.body.style.overflow = "hidden"; // Body scroll-ыг нуух
  });

  // Dialog хаах товч
  document.getElementById("closeModal").addEventListener("click", function () {
    const dialog = document.getElementById("modal");
    dialog.classList.add("hidden"); // Dialog хаах
    document.body.style.overflow = "auto"; // Body scroll-ыг сэргээх
  });

  // Dialog-ийн гадна дарж хаах
  document.getElementById("modal").addEventListener("click", function (event) {
    if (event.target.id === "modal") {
      event.target?.classList?.add("hidden"); // Dialog хаах
      document.body.style.overflow = "auto"; // Body scroll-ыг сэргээх
    }
  });
}
