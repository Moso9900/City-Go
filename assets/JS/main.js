document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const catFilter = document.getElementById("catFilter");
  const dateFilter = document.getElementById("dateFilter");
  const locFilter = document.getElementById("locFilter");
  const clearBtn = document.getElementById("clearFilters");
  const eventCards = document.querySelectorAll(".event-card");

  function filterEvents() {
    const searchText = searchInput.value.trim().toLowerCase();
    const category = catFilter.value.trim().toLowerCase();
    const date = dateFilter.value;
    const location = locFilter.value.trim().toLowerCase();

    eventCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const cat = card.querySelector(".badge").dataset.category.toLowerCase();
      const loc = card.querySelector(".card-body p:nth-of-type(1)").textContent.toLowerCase();
      const dateText = card.querySelector(".card-body p:nth-of-type(2)").textContent.toLowerCase();

      // تحقق من المطابقة لكل حقل
      const matchSearch = title.includes(searchText);
      const matchCat = !category || cat === category;
      const matchLoc = !location || loc.includes(location);
      const matchDate = !date || dateText.includes(new Date(date).getFullYear().toString()) || dateText.includes(new Date(date).toLocaleString('default', { month: 'long' }).toLowerCase());

      if (matchSearch && matchCat && matchLoc && matchDate) {
        card.parentElement.style.display = "";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterEvents);
  catFilter.addEventListener("change", filterEvents);
  dateFilter.addEventListener("change", filterEvents);
  locFilter.addEventListener("input", filterEvents);

  // زر مسح الفلاتر
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    catFilter.value = "";
    dateFilter.value = "";
    locFilter.value = "";
    filterEvents();
  });
});

 document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (!scrollBtn) return;

    // اجعله يظهر فورًا
    scrollBtn.style.display = "flex";

    // عند الضغط، العودة للأعلى بسلاسة
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });