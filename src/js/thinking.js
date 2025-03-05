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
    perPage: 2,
    perMove: 1,
    gap: 36,
    padding: "1rem",
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  });
  splide2.mount();
  const splideItems1 = document.querySelectorAll(".splide1 .splide__slide");
  const sideMenu2Lists = document.querySelectorAll(
    ".tab-2 .sidemenu .menuItem"
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
    sideMenu2Lists,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"]
  );

  addClickListener(
    splideItems1,
    ["bg-white", "text-[#00AEC7]"],
    ["bg-white", "text-[#00AEC7]"]
  );
});
