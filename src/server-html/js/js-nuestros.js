document.addEventListener("DOMContentLoaded", function () {
  const sideMenuLists = document.querySelectorAll(".HTab .HTab-menu-item");
  const sideMenuContents = document.querySelectorAll(
    ".HTab .HTab-menu-content"
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
    sideMenuLists,
    ["bg-primaryColor", "text-white"],
    ["bg-primaryColor", "text-white"],
    (item, index) => {
      sideMenuContents.forEach((content) => {
        content.classList.add("!hidden");
      });
      sideMenuContents[index].classList.remove("!hidden");
    }
  );
});
