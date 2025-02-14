document.addEventListener("DOMContentLoaded", function () {
  // Chart
  const ctx = document.getElementById("stockChart").getContext("2d");
  // Sample Data (Replace with real data)
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]; // X-Axis labels
  const gruposuraData = [
    40500, 40000, 35320, 36926, 37090, 34377, 32730, 30307, 32814, 31255, 33031,
    35321,
  ];
  const pfgrupsuraData = [
    27314, 26208, 25682, 24850, 26366, 25309, 23212, 22304, 24346, 25752, 27933,
    23321,
  ];
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "GRUPOSURA",
          data: gruposuraData,
          borderColor: "#FFFFFF",
          backgroundColor: "#FFFFFF",
          borderWidth: 2,
          pointStyle: false,
          tension: 0.4, // Smooth curve
        },
        {
          label: "PFGRUPSURA",
          data: pfgrupsuraData,
          borderColor: "#000000",
          backgroundColor: "#000000",
          borderWidth: 2,
          pointStyle: false,
          tension: 0.4, // Smooth curve
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
            color: "#FFF",
            font: { size: 14, weight: "bold" },
          },
          ticks: {
            color: "#FFF", // Change month labels color (golden)
            font: { size: 12, weight: "bold" },
          },
          grid: { color: "rgba(200, 200, 200, 0.3)" },
        },
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "Price (COP)",
            color: "#FFF",
            font: { size: 14, weight: "bold" },
          },
          ticks: {
            color: "#FFF", // Change month labels color (golden)
            font: { size: 12, weight: "bold" },
          },
          grid: { color: "rgba(200, 200, 200, 0.3)" },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          align: "start",
          labels: { color: "#FFF" },
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.raw.toLocaleString();
            },
          },
        },
      },
    },
  });
});
