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

  const sideMenuLists = document.querySelectorAll(".multi-Tabs .HTab");
  const sideMenuContents = document.querySelectorAll(".multi-Tabs .HContent");
  const verticalSideMenuLists1 = document.querySelectorAll(
    ".VTab1 .VTab-menu-item"
  );
  const verticalSideMenuContents1 = document.querySelectorAll(
    ".VTab1 .VTab-menu-content"
  );
  const verticalSideMenuLists2 = document.querySelectorAll(
    ".VTab2 .VTab-menu-item"
  );
  const verticalSideMenuContents2 = document.querySelectorAll(
    ".VTab2 .VTab-menu-content"
  );
  const verticalSideMenuLists3 = document.querySelectorAll(
    ".VTab3 .VTab-menu-item"
  );
  const verticalSideMenuContents3 = document.querySelectorAll(
    ".VTab3 .VTab-menu-content"
  );
  const verticalSideMenuLists4 = document.querySelectorAll(
    ".VTab4 .VTab-menu-item"
  );
  const verticalSideMenuContents4 = document.querySelectorAll(
    ".VTab4 .VTab-menu-content"
  );
  const verticalSideMenuLists5 = document.querySelectorAll(
    ".VTab5 .VTab-menu-item"
  );
  const verticalSideMenuContents5 = document.querySelectorAll(
    ".VTab5 .VTab-menu-content"
  );
  const verticalSideMenuLists6 = document.querySelectorAll(
    ".VTab6 .VTab-menu-item"
  );
  const verticalSideMenuContents6 = document.querySelectorAll(
    ".VTab6 .VTab-menu-content"
  );
  const verticalSideMenuLists7 = document.querySelectorAll(
    ".VTab7 .VTab-menu-item"
  );
  const verticalSideMenuContents7 = document.querySelectorAll(
    ".VTab7 .VTab-menu-content"
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
    sideMenuLists,
    ["bg-white", "text-[#00AEC7]"],
    ["bg-white", "text-[#00AEC7]"],
    (item, index) => {
      sideMenuContents.forEach((content) => {
        content.classList.add("!hidden");
      });
      sideMenuContents[index].classList.remove("!hidden");
    }
  );

  addClickListener(
    verticalSideMenuLists1,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"],
    (item, index) => {
      verticalSideMenuContents1.forEach((content) => {
        content.classList.add("!hidden");
      });
      verticalSideMenuContents1[index].classList.remove("!hidden");
    }
  );

  addClickListener(
    verticalSideMenuLists2,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"],
    (item, index) => {
      verticalSideMenuContents2.forEach((content) => {
        content.classList.add("!hidden");
      });
      verticalSideMenuContents2[index].classList.remove("!hidden");
    }
  );

  addClickListener(
    verticalSideMenuLists3,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"],
    (item, index) => {
      verticalSideMenuContents3.forEach((content) => {
        content.classList.add("!hidden");
      });
      verticalSideMenuContents3[index].classList.remove("!hidden");
    }
  );

  addClickListener(
    verticalSideMenuLists4,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"],
    (item, index) => {
      verticalSideMenuContents4.forEach((content) => {
        content.classList.add("!hidden");
      });
      verticalSideMenuContents4[index].classList.remove("!hidden");
    }
  );

  addClickListener(
    verticalSideMenuLists5,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"],
    (item, index) => {
      verticalSideMenuContents5.forEach((content) => {
        content.classList.add("!hidden");
      });
      verticalSideMenuContents5[index].classList.remove("!hidden");
    }
  );

  addClickListener(
    verticalSideMenuLists6,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"],
    (item, index) => {
      verticalSideMenuContents6.forEach((content) => {
        content.classList.add("!hidden");
      });
      verticalSideMenuContents6[index].classList.remove("!hidden");
    }
  );
});
