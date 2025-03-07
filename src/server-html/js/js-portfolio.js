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

document.addEventListener("DOMContentLoaded", function () {
  const locations = document.querySelectorAll(".map [data-country]");
  const country_placeholder = document.querySelector(
    ".resource .country_placeholder"
  );
  const country = document.querySelector(".resource .country");
  const asset = document.querySelector(".resource .asset");
  const asset_employee = document.querySelector(".resource .asset .employee");
  const asset_client = document.querySelector(".resource .asset .clients");
  const insurance = document.querySelector(".resource .insurance");
  const insurance_employee = document.querySelector(
    ".resource .insurance .employee"
  );
  const insurance_client = document.querySelector(
    ".resource .insurance .clients"
  );
  const ban = document.querySelector(".resource .ban");
  const ban_employee = document.querySelector(".resource .ban .employee");
  const ban_client = document.querySelector(".resource .ban .clients");

  locations.forEach((location) => {
    location.addEventListener("click", () => {
      country.classList.remove("hidden");
      country_placeholder.classList.add("hidden");
      const country_name = location.getAttribute("data-country");
      country.innerHTML = country_name;
      const asset_employee_info = location.getAttribute("data-asset-employee");
      const asset_client_info = location.getAttribute("data-asset-clients");
      const insurance_employee_info = location.getAttribute(
        "data-insurance-employee"
      );
      const insurance_client_info = location.getAttribute(
        "data-insurance-clients"
      );
      const ban_employee_info = location.getAttribute("data-ban-employee");
      const ban_client_info = location.getAttribute("data-ban-clients");
      if (!asset_employee_info) {
        asset.classList.remove("flex");
        asset.classList.add("hidden");
      } else {
        asset.classList.remove("hidden");
        asset.classList.add("flex");
        asset_employee.innerHTML = asset_employee_info;
        asset_client.innerHTML = asset_client_info;
      }
      if (!insurance_employee_info) {
        insurance.classList.remove("flex");
        insurance.classList.add("hidden");
      } else {
        insurance.classList.remove("hidden");
        insurance.classList.add("flex");
        insurance_employee.innerHTML = insurance_employee_info;
        insurance_client.innerHTML = insurance_client_info;
      }
      if (!ban_employee_info) {
        ban.classList.remove("flex");
        ban.classList.add("hidden");
      } else {
        ban.classList.remove("hidden");
        ban.classList.add("flex");
        ban_employee.innerHTML = ban_employee_info;
        ban_client.innerHTML = ban_client_info;
      }
    });
  });
});
