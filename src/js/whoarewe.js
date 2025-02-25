document.addEventListener("DOMContentLoaded", function () {
  const sideMenuLists = document.querySelectorAll(".tab-1 .sidemenu .menuItem");

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
    sideMenuLists,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"]
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide-we", {
    perPage: 3,
    focus: 0,
    omitEnd: true,
    pagination: true,
    gap: 24,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  });
  splide.mount();
});
