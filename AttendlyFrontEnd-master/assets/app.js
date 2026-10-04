
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  const menuBtn = document.querySelector(".menu-btn");

  const toggleSidebar = () => {
    sidebar?.classList.toggle("open");
    overlay?.classList.toggle("show");
  };

  menuBtn?.addEventListener("click", toggleSidebar);
  overlay?.addEventListener("click", toggleSidebar);

  document.querySelectorAll(".password-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = btn.parentElement.querySelector("input");
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
      btn.textContent = input.type === "password" ? "◉" : "○";
    });
  });

  document.querySelectorAll("[data-demo]").forEach(el => {
    el.addEventListener("click", e => {
      if (el.tagName === "A") e.preventDefault();
      const message = el.dataset.demo || "This action is ready for your backend.";
      alert(message);
    });
  });

  // Small frontend-only table search.
  document.querySelectorAll("[data-table-search]").forEach(input => {
    input.addEventListener("input", () => {
      const target = document.querySelector(input.dataset.tableSearch);
      if (!target) return;
      const q = input.value.toLowerCase();
      target.querySelectorAll("tbody tr").forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(q) ? "" : "none";
      });
    });
  });

  // Select-all checkboxes.
  document.querySelectorAll("[data-select-all]").forEach(master => {
    master.addEventListener("change", () => {
      document.querySelectorAll(master.dataset.selectAll).forEach(cb => cb.checked = master.checked);
    });
  });
});
