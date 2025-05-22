document.addEventListener("DOMContentLoaded", () => {
  const salesCtx = document.getElementById("salesChart").getContext("2d");
  const ordersCtx = document.getElementById("ordersChart").getContext("2d");
  const rolesCtx = document.getElementById("rolesChart").getContext("2d");

  new Chart(salesCtx, {
    type: "line",
    data: {
      labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
      datasets: [
        {
          label: "فروش (میلیون تومان)",
          data: [12, 19, 14, 25, 20, 30],
          borderColor: "#4f46e5",
          backgroundColor: "rgba(79, 70, 229, 0.1)",
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
      },
    },
  });

  new Chart(ordersCtx, {
    type: "doughnut",
    data: {
      labels: ["پردازش", "ارسال", "لغو"],
      datasets: [
        {
          data: [20, 15, 5],
          backgroundColor: ["#4f46e5", "#22c55e", "#ef4444"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
      },
    },
  });

  new Chart(rolesCtx, {
    type: "bar",
    data: {
      labels: ["ادمین", "کاربر"],
      datasets: [
        {
          label: "تعداد کاربران",
          data: [3, 12],
          backgroundColor: ["#4f46e5", "#6b7280"],
        },
      ],
    },
    options: {
      responsive: true,
      indexAxis: "y",
      plugins: {
        legend: { display: false },
      },
    },
  });
});
