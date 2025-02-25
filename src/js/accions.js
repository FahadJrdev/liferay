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

document.addEventListener("DOMContentLoaded", function () {
  const splide1 = new Splide(".splide1", {
    perPage: 6,
    pagination: false,
    breakpoints: {
      640: {
        perPage: 3,
      },
    },
  });
  splide1.mount();
  const splide2 = new Splide(".splide2", {
    perPage: 6,
    pagination: false,
    breakpoints: {
      640: {
        perPage: 3,
      },
    },
  });
  splide2.mount();
  const tabs = document.querySelectorAll(".tabs li span");
  const menuContents = document.querySelectorAll(".menu-content");
  const splideItems1 = document.querySelectorAll(".splide1 .splide__slide");
  const splideItems2 = document.querySelectorAll(".splide2 .splide__slide");
  const tab2Years = document.querySelectorAll(".tab-2 .year");
  const tab4Years = document.querySelectorAll(".tab-4 .year");
  const sideMenuLists = document.querySelectorAll(".tab-1 .sidemenu .menuItem");
  const sideMenu2Lists = document.querySelectorAll(
    ".tab-2 .sidemenu .menuItem"
  );
  const informContents = document.querySelectorAll(".informo-content");
  const sideMenu4Lists = document.querySelectorAll(
    ".tab-4 .sidemenu .menuItem"
  );

  const addClickListener = (
    elements,
    classesToAdd = [],
    classesToRemove = [],
    callback = null
  ) => {
    elements.forEach((element) => {
      element.addEventListener("click", () => {
        elements.forEach((item) => {
          classesToRemove.forEach((cls) => item.classList.remove(cls));
        });
        classesToAdd.forEach((cls) => element.classList.add(cls));

        if (callback && typeof callback === "function") {
          callback(element);
        }
      });
    });
  };

  addClickListener(
    tabs,
    ["bg-primaryColor", "text-white"],
    ["bg-primaryColor", "text-white"],
    (tab) => {
      const targetTab = tab.getAttribute("data-tab");
      menuContents.forEach((content) => {
        content.classList.add("hidden");
      });
      document.querySelector("." + targetTab).classList.remove("hidden");
    }
  );

  addClickListener(
    splideItems1,
    ["bg-white", "text-[#00AEC7]"],
    ["bg-white", "text-[#00AEC7]"],
    (item) => {
      const targetItem = item.getAttribute("data-year");
      tab2Years.forEach((year) => {
        year.innerHTML = targetItem;
      });
    }
  );

  addClickListener(
    splideItems2,
    ["bg-white", "text-[#00AEC7]"],
    ["bg-white", "text-[#00AEC7]"],
    (item) => {
      const targetItem = item.getAttribute("data-year");
      tab4Years.forEach((year) => {
        year.innerHTML = targetItem;
      });
    }
  );

  addClickListener(
    sideMenuLists,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"]
  );

  addClickListener(
    sideMenu2Lists,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"],
    (content) => {
      const targetContent = content.getAttribute("data-content");
      informContents.forEach((item) => {
        item.classList.add("hidden");
      });
      document
        .querySelector(".informo-content." + targetContent)
        .classList.remove("hidden");
      const termItem = content.querySelector(".termItem");
      if (termItem) {
        document.querySelector(".informo-content.content-2 .term").innerHTML =
          termItem.innerHTML;
      }
    }
  );

  addClickListener(
    sideMenu4Lists,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"],
    (content) => {
      const targetContent = content.querySelector(".date-content");
      const targetData = content
        .querySelector(".date-content")
        .getAttribute("data-date");
      const dateContent = document.querySelector(".tab-4 .tab-4-header");
      const dateContentInside = document.querySelectorAll(
        ".tab-4 .content .date-content"
      );
      dateContent.innerHTML = targetContent.innerHTML;
      dateContentInside.forEach((item) => {
        item.innerHTML = targetData;
      });
    }
  );
});
