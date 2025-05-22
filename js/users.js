document.addEventListener("DOMContentLoaded", () => {
  const userTableBody = document.querySelector("#userTable tbody");
  const addUserBtn = document.getElementById("addUserBtn");
  const saveUserBtn = document.getElementById("saveUserBtn");
  const closeModalBtn = document.getElementById("closeModal");
  const userModal = document.getElementById("userModal");
  const searchInput = document.getElementById("searchInput");

  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const roleInput = document.getElementById("roleInput");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  function renderUsers(data) {
    userTableBody.innerHTML = "";
    data.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td><button data-index="${index}" class="delete-btn">حذف</button></td>
      `;
      userTableBody.appendChild(row);
    });
  }

  function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
    renderUsers(users);
  }

  addUserBtn.addEventListener("click", () => {
    userModal.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", () => {
    userModal.classList.add("hidden");
  });

  saveUserBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const role = roleInput.value;

    if (!name || !email) return;

    users.push({ name, email, role });
    saveUsers();

    nameInput.value = "";
    emailInput.value = "";
    roleInput.value = "کاربر";
    userModal.classList.add("hidden");
  });

  userTableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const index = e.target.getAttribute("data-index");
      users.splice(index, 1);
      saveUsers();
    }
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
    renderUsers(filtered);
  });

  renderUsers(users);
});
