document.addEventListener("DOMContentLoaded", () => {
  const productTableBody = document.querySelector("#productTable tbody");
  const addProductBtn = document.getElementById("addProductBtn");
  const saveProductBtn = document.getElementById("saveProductBtn");
  const closeProductModal = document.getElementById("closeProductModal");
  const productModal = document.getElementById("productModal");
  const searchProduct = document.getElementById("searchProduct");

  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productCategory = document.getElementById("productCategory");
  const productImage = document.getElementById("productImage");

  let products = JSON.parse(localStorage.getItem("products")) || [];

  function renderProducts(data) {
    productTableBody.innerHTML = "";
    data.forEach((product, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price.toLocaleString()} تومان</td>
        <td>${product.category}</td>
        <td><img src="${product.image}" alt="product" height="40" /></td>
        <td><button data-index="${index}" class="delete-product">حذف</button></td>
      `;
      productTableBody.appendChild(row);
    });
  }

  function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts(products);
  }

  addProductBtn.addEventListener("click", () => {
    productModal.classList.remove("hidden");
  });

  closeProductModal.addEventListener("click", () => {
    productModal.classList.add("hidden");
  });

  saveProductBtn.addEventListener("click", () => {
    const name = productName.value.trim();
    const price = parseFloat(productPrice.value);
    const category = productCategory.value.trim();
    const image = productImage.value.trim();

    if (!name || isNaN(price) || !category || !image) return;

    products.push({ name, price, category, image });
    saveProducts();

    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productImage.value = "";
    productModal.classList.add("hidden");
  });

  productTableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-product")) {
      const index = e.target.getAttribute("data-index");
      products.splice(index, 1);
      saveProducts();
    }
  });

  searchProduct.addEventListener("input", () => {
    const query = searchProduct.value.toLowerCase();
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    renderProducts(filtered);
  });

  renderProducts(products);
});
