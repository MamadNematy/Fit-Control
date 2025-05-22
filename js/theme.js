document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;

  const isOpen = sidebar.classList.contains("open");
  sidebar.classList.toggle("open");

  if (!isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}
