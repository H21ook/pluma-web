function switchTab(tabId) {
  // Бүх tab контентуудыг нуух
  document.querySelectorAll("[data-tab-content]").forEach((content) => {
    content.classList.add("hidden");
  });

  // Сонгогдсон tab контентыг харуулах

  //   console.log("123 ", document.querySelector('[data-tab="tab1"]'));
  const selectedContent = document.querySelector(
    `[data-tab-content="${tabId}"]`
  );

  const tab = document.querySelector(`[data-tab]`);

  if (tab) {
    tab.setAttribute("data-tab", tabId);
  }
  if (selectedContent) {
    selectedContent.classList.remove("hidden");
  }
}

// Анхны tab-ыг идэвхжүүлэх
switchTab("tab1");
