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
  const cards = document.querySelectorAll(".svg-card");
  const allSvg = document.querySelectorAll(".svg-card svg");

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("border-secondaryColor")) {
        card.classList.remove("border-secondaryColor");
        card.classList.add("border-primaryColor");
        card.classList.remove("bg-white");
        allSvg[index].classList.remove("fill-secondaryColor");
        allSvg[index].classList.add("fill-primaryColor");
      } else {
        card.classList.remove("border-primaryColor");
        card.classList.add("border-secondaryColor");
        card.classList.add("bg-white");
        allSvg[index].classList.remove("fill-primaryColor");
        allSvg[index].classList.add("fill-secondaryColor");
      }
    });
  });
});
