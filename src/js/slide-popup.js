document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup-slide");
  const closeBtn = document.querySelector(".popup-slide .close");

  // Show popup after a slight delay
  setTimeout(() => {
    popup.classList.remove("translate-x-full");
    popup.classList.add("translate-x-0");
  }, 100);

  // Hide popup when clicking the close button
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("translate-x-0");
    popup.classList.add("translate-x-full");

    // Remove from DOM after animation completes
    setTimeout(() => {
      popup.classList.add("hidden");
    }, 500);
  });
});
