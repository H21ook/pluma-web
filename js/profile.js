function init() {
  initMain();

  // Datepicker идэвхжүүлэх
  datepicker("#datepickerInput", {
    formatter: (input, date, instance) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      input.value = `${year}-${month}-${day}`; // yyyy-mm-dd форматаар харуулах
    },
    startDay: 1, // Даваа гарагаас эхлэх

    overlayButton: "Select", // Overlay товчны текст
    overlayPlaceholder: "Please enter year", // Overlay placeholder
  });

  document
    .getElementById("toggleSwitch")
    .addEventListener("change", function () {
      const toggleSwitch = document.getElementById("toggleSwitch");
      if (toggleSwitch.checked) {
        console.log("Switch идэвхжүүлэгдсэн");
      } else {
        console.log("Switch идэвхгүйжсэн");
      }
    });

  document
    .getElementById("fileInput")
    .addEventListener("change", function (event) {
      var image = document.getElementById("avatarImage");
      var emptyImage = document.getElementById("avatarEmpty");
      const file = event.target.files[0]; // Сонгосон файлыг авах
      if (file) {
        const reader = new FileReader(); // Файл унших объект үүсгэх
        reader.onload = function (e) {
          // Зургийг avatar-д харуулах

          image.src = e.target.result;
          image.classList.remove("hidden");
          emptyImage.classList.add("hidden");
        };
        reader.readAsDataURL(file); // Файлыг унших
      } else {
        image.classList.add("hidden");
        emptyImage.classList.remove("hidden");
      }
    });
}

function changeTab(event) {
  const tabButtons = document.getElementById("tabButtons").children;
  const tabContents = document.getElementById("tabContents").children;

  for (let j = 0; j < tabContents.length; j++) {
    tabContents[j].classList.add("hidden");
    if (event.target.dataset.value === tabContents.item(j).dataset.value) {
      tabContents.item(j).classList.remove("hidden");
    } else {
      tabContents.item(j).classList.add("hidden");
    }
  }

  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons.item(i).classList.remove("border-primary");
    tabButtons
      .item(i)
      .classList.add("text-text-secondary", "border-transparent");
  }

  event.target.classList.remove("text-text-secondary", "border-transparent");
  event.target.classList.add("border-primary");
}
