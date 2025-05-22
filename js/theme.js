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

// user
const user = {
  name: "محمد حسن نعمتی",
  role: "مدیر سیستم",
  avatar: "assets/images/download.jpg",
  loggedIn: true,
};

localStorage.setItem("user", JSON.stringify(user));

document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData) {
    document.getElementById("user-name").textContent = userData.name;
    document.getElementById("user-role").textContent = userData.role;
    document.getElementById("user-avatar").src = userData.avatar;
  }
});
