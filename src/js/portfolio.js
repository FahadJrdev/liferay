document.addEventListener("DOMContentLoaded", function () {
  const createPieChart = (id, data, colors, borders) => {
    new Chart(document.getElementById(id), {
      type: "pie",
      data: {
        labels: ["Category A", "Category B"],
        datasets: [
          {
            data: data,
            backgroundColor: colors,
            borderColor: borders,
            borderWidth: [12, 0],
            hoverOffset: 8,
            rotation: 250,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  };

  createPieChart(
    "pieChart1",
    [7, 93],
    ["#69B3E7", "#FFFFFF"],
    ["#69B3E7", "transparent"]
  );
  createPieChart(
    "pieChart2",
    [7, 93],
    ["#CEDC00", "#FFFFFF"],
    ["#CEDC00", "transparent"]
  );
});
