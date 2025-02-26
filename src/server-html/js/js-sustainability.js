document.addEventListener("DOMContentLoaded", function () {
  const tabs1 = document.querySelectorAll(".tabs-1 li span");
  const tabs2 = document.querySelectorAll(".tabs-2 li span");
  const sideMenuLists = document.querySelectorAll(".tab-1 .sidemenu .menuItem");
  const slideTabs = document.querySelectorAll(".slide-tabs li span");

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
    tabs1,
    ["bg-primaryColor", "text-white"],
    ["bg-primaryColor", "text-white"]
  );

  addClickListener(
    tabs2,
    ["bg-primaryColor", "text-white"],
    ["bg-primaryColor", "text-white"]
  );

  addClickListener(
    sideMenuLists,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"]
  );

  addClickListener(
    slideTabs,
    ["bg-primaryColor", "text-white"],
    ["bg-primaryColor", "text-white"]
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".tabs-slide", {
    perPage: 3,
    focus: 0,
    omitEnd: true,
    pagination: false,
    gap: 24,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  });
  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".direction-card");
  const allSvg = document.querySelectorAll(".direction-card svg");
  const allP = document.querySelectorAll(".direction-card p");

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("bg-primaryColor")) {
        card.classList.remove("bg-primaryColor");
        allSvg[index].classList.remove("fill-white");
        allSvg[index].classList.add("fill-primaryColor");
        allP[index].classList.remove("text-white");
        allP[index].classList.add("text-primaryColor");
      } else {
        card.classList.add("bg-primaryColor");
        allSvg[index].classList.remove("fill-primaryColor");
        allSvg[index].classList.add("fill-white");
        allP[index].classList.remove("text-primaryColor");
        allP[index].classList.add("text-white");
      }
    });
  });
});
