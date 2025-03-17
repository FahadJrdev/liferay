document.addEventListener("DOMContentLoaded", function () {
  const verticalSideMenuLists = document.querySelectorAll(
    ".VTab .VTab-menu-item"
  );
  const verticalSideMenuContents = document.querySelectorAll(
    ".VTab .VTab-menu-content"
  );

  const addClickListener = (
    elements,
    classesToAdd = [],
    classesToRemove = [],
    callback = null
  ) => {
    elements.forEach((element, index) => {
      element.addEventListener("click", () => {
        elements.forEach((item) => {
          classesToRemove.forEach((cls) => item.classList.remove(cls));
        });
        classesToAdd.forEach((cls) => element.classList.add(cls));

        if (callback && typeof callback === "function") {
          callback(element, index);
        }
      });
    });
  };

  addClickListener(
    verticalSideMenuLists,
    ["bg-white", "border-l-4", "font-semibold"],
    ["bg-white", "border-l-4", "font-semibold"],
    (item, index) => {
      verticalSideMenuContents.forEach((content) => {
        content.classList.add("!hidden");
      });
      verticalSideMenuContents[index].classList.remove("!hidden");
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide-we", {
    perPage: 3,
    focus: 0,
    omitEnd: true,
    pagination: true,
    gap: 24,
    padding: 12,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  });
  splide.mount();
});
