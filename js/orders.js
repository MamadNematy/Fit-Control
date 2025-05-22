document.addEventListener("DOMContentLoaded", () => {
  const orderTableBody = document.querySelector("#orderTable tbody");
  const addOrderBtn = document.getElementById("addOrderBtn");
  const saveOrderBtn = document.getElementById("saveOrderBtn");
  const closeOrderModal = document.getElementById("closeOrderModal");
  const orderModal = document.getElementById("orderModal");
  const statusFilter = document.getElementById("statusFilter");

  const orderCustomer = document.getElementById("orderCustomer");
  const orderAmount = document.getElementById("orderAmount");
  const orderStatus = document.getElementById("orderStatus");

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  function renderOrders(data) {
    orderTableBody.innerHTML = "";
    data.forEach((order, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>#${index + 1}</td>
        <td>${order.customer}</td>
        <td>${order.amount.toLocaleString()} تومان</td>
        <td>${order.date}</td>
        <td>${order.status}</td>
        <td><button data-index="${index}" class="delete-order">حذف</button></td>
      `;
      orderTableBody.appendChild(row);
    });
  }

  function saveOrders() {
    localStorage.setItem("orders", JSON.stringify(orders));
    renderOrders(orders);
  }

  addOrderBtn.addEventListener("click", () => {
    orderModal.classList.remove("hidden");
  });

  closeOrderModal.addEventListener("click", () => {
    orderModal.classList.add("hidden");
  });

  saveOrderBtn.addEventListener("click", () => {
    const customer = orderCustomer.value.trim();
    const amount = parseFloat(orderAmount.value);
    const status = orderStatus.value;
    const date = new Date().toLocaleDateString("fa-IR");

    if (!customer || isNaN(amount)) return;

    orders.push({ customer, amount, status, date });
    saveOrders();

    orderCustomer.value = "";
    orderAmount.value = "";
    orderStatus.value = "پردازش";
    orderModal.classList.add("hidden");
  });

  orderTableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-order")) {
      const index = e.target.getAttribute("data-index");
      orders.splice(index, 1);
      saveOrders();
    }
  });

  statusFilter.addEventListener("change", () => {
    const filter = statusFilter.value;
    if (filter === "all") {
      renderOrders(orders);
    } else {
      const filtered = orders.filter((o) => o.status === filter);
      renderOrders(filtered);
    }
  });

  renderOrders(orders);
});
