function closeDrawer() {
  const drawer = document.getElementById("drawer");
  drawer.classList.add("translate-x-full"); // Drawer хаах
  document.body.style.overflow = "auto"; // Body scroll-ыг сэргээх
}

function initMain() {
  // Drawer нээх товч
  document.getElementById("openDrawer").addEventListener("click", function () {
    const drawer = document.getElementById("drawer");
    drawer.classList.remove("translate-x-full"); // Drawer нээх
    document.body.style.overflow = "hidden"; // Body scroll-ыг нуух
  });

  // Drawer хаах товч
  document.getElementById("closeDrawer").addEventListener("click", closeDrawer);

  //window resize md-ээс дээш хэмжээтэй бол drawer хаах
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      closeDrawer();
    }
  });

  initNews();
}
