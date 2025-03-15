function activeTab(value) {
  var contents = document.getElementById("tabContents").children;

  for (let i = 0; i < contents.length; i++) {
    contents.item(i).classList.add("hidden");

    if (contents.item(i).dataset.value === value) {
      contents.item(i).classList.remove("hidden");
    }
  }
}

function init() {
  var parent = document.getElementById("tabButtons");
  if (parent) {
    activeTab(parent.dataset.value);
    if (parent.dataset.value === "monthly") {
      document
        .getElementById("paymentMonthly")
        .classList.add("after:translate-x-0");
      document
        .getElementById("paymentMonthly")
        .classList.remove("after:hidden");
    } else {
      document
        .getElementById("paymentMonthly")
        .classList.add("after:translate-x-full");
      document
        .getElementById("paymentMonthly")
        .classList.remove("after:hidden");
    }

    document
      .getElementById("paymentMonthly")
      .addEventListener("click", function () {
        var _parent = document.getElementById("tabButtons");
        _parent.dataset.value = "monthly";
        activeTab("monthly");
        document
          .getElementById("paymentMonthly")
          .classList.remove("after:translate-x-full", "after:hidden");
        document
          .getElementById("paymentMonthly")
          .classList.add("after:translate-x-0");
      });

    document
      .getElementById("paymentYearly")
      .addEventListener("click", function () {
        var _parent = document.getElementById("tabButtons");
        _parent.dataset.value = "yearly";
        activeTab("yearly");
        document
          .getElementById("paymentMonthly")
          .classList.remove("after:translate-x-0", "after:hidden");
        document
          .getElementById("paymentMonthly")
          .classList.add("after:translate-x-full");
      });
  }

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
