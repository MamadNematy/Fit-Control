document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav a");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    }
  });
});
