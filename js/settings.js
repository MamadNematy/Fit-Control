document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("themeSwitch");
  const languageSelect = document.getElementById("languageSelect");
  const notificationsSwitch = document.getElementById("notificationsSwitch");

  // Load saved settings
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeSwitch.checked = true;
  }

  if (localStorage.getItem("language")) {
    languageSelect.value = localStorage.getItem("language");
  }

  if (localStorage.getItem("notifications") === "on") {
    notificationsSwitch.checked = true;
  }

  // Toggle dark theme
  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", themeSwitch.checked ? "dark" : "light");
  });

  // Language selection
  languageSelect.addEventListener("change", () => {
    localStorage.setItem("language", languageSelect.value);
  });

  // Notifications toggle
  notificationsSwitch.addEventListener("change", () => {
    localStorage.setItem(
      "notifications",
      notificationsSwitch.checked ? "on" : "off"
    );
  });
});
