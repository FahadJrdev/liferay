document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs li span");
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
    tabs,
    ["bg-primaryColor", "text-white"],
    ["bg-primaryColor", "text-white"]
  );

  addClickListener(
    sideMenuLists,
    ["bg-white", "border-l-4"],
    ["bg-white", "border-l-4"]
  );
});
