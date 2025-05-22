document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  // بررسی حالت ذخیره شده در localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // ذخیره حالت در localStorage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
