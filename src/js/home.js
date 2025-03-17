document.addEventListener("DOMContentLoaded", function () {
  // hover effect on slider
  const sliderBG = document.querySelector(".sliderBG");
  const hover1 = document.querySelector(".hover1");
  const hover2 = document.querySelector(".hover2");
  const hover3 = document.querySelector(".hover3");
  const hover4 = document.querySelector(".hover4");
  const hover2BG = document.querySelector(".hover2BG");
  const hover3BG = document.querySelector(".hover3BG");
  const hover4BG = document.querySelector(".hover4BG");
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  const btn3 = document.querySelector(".btn3");
  const btn4 = document.querySelector(".btn4");
  const upperPart = document.querySelector(".upperPart");
  const upperText = document.querySelector(".upperText");
  const slider = document.querySelector(".slider");
  const bottomPart = document.querySelector(".bottomPart");
  const bottomText = document.querySelector(".bottomText");

  hover2.addEventListener("mouseover", () => {
    // Toggle button visibility and size
    btn2.classList.replace("md:h-0", "md:h-full");
    btn2.classList.replace("md:invisible", "md:visible");
    btn2.classList.replace("md:opacity-0", "md:opacity-100");

    // Text Change
    hover1.querySelector("h2").innerHTML =
      "Second Hover Accede a nuestra videoconferencia de resultados";

    btn1.classList.add("md:invisible", "md:opacity-0", "md:h-0");

    // Adjust hover and slider styles
    hover2.classList.add("border-l-4");
    slider.classList.replace("bg-tertiaryColor", "bg-primaryColor");

    // Update upper part and text styles
    upperPart.classList.replace("text-primaryColor", "text-secondaryColor");
    upperText.classList.replace("text-tabletext", "text-white");

    upperPart.classList.replace("from-white", "from-primaryColor");
    upperPart.classList.replace("via-white", "via-primaryColor");

    // Update bottom part styles
    bottomPart.classList.replace(
      "from-[rgba(255,255,255,0.8)]",
      "from-primaryColor"
    );
    bottomPart.classList.replace(
      "via-[rgba(255,255,255,0.8)]",
      "via-primaryColor"
    );
    bottomText.classList.replace("text-primaryColor", "text-white");

    // Adjust background sizes
    hover2BG.classList.replace("w-0", "w-[65%]");
    sliderBG.classList.replace("w-[65%]", "w-0");

    let video = hover2BG.querySelector("video");
    if (video) {
      video.setAttribute("autoplay", "");
      video.setAttribute("muted", "");
      video.play();
    }
  });
  hover2.addEventListener("mouseout", () => {
    // Reset button visibility and size
    btn2.classList.replace("md:h-full", "md:h-0");
    btn2.classList.replace("md:visible", "md:invisible");
    btn2.classList.replace("md:opacity-100", "md:opacity-0");

    // Text Change
    hover1.querySelector("h2").innerHTML =
      "Accede a nuestra videoconferencia de resultados a 4T24 con público inversionista";

    btn1.classList.remove("md:invisible", "md:opacity-0", "md:h-0");

    // Reset hover and slider styles
    hover2.classList.remove("border-l-4");
    slider.classList.replace("bg-primaryColor", "bg-tertiaryColor");

    // Reset upper part and text styles
    upperPart.classList.replace("text-secondaryColor", "text-primaryColor");
    upperText.classList.replace("text-white", "text-tabletext");

    upperPart.classList.replace("from-primaryColor", "from-white");
    upperPart.classList.replace("via-primaryColor", "via-white");

    // Reset bottom part styles
    bottomPart.classList.replace(
      "from-primaryColor",
      "from-[rgba(255,255,255,0.8)]"
    );
    bottomPart.classList.replace(
      "via-primaryColor",
      "via-[rgba(255,255,255,0.8)]"
    );
    bottomText.classList.replace("text-white", "text-primaryColor");

    // Reset background sizes
    hover2BG.classList.replace("w-[65%]", "w-0");
    sliderBG.classList.replace("w-0", "w-[65%]");

    let video = hover2BG.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video to start
    }
  });

  hover3.addEventListener("mouseover", () => {
    // Toggle button visibility and size
    btn3.classList.replace("md:h-0", "md:h-full");
    btn3.classList.replace("md:invisible", "md:visible");
    btn3.classList.replace("md:opacity-0", "md:opacity-100");

    // Text Change
    hover1.querySelector("h2").innerHTML =
      "Third Hover Accede a nuestra videoconferencia de resultados";

    btn1.classList.add("md:invisible", "md:opacity-0", "md:h-0");

    // Adjust hover and slider styles
    hover3.classList.add("border-l-4");
    slider.classList.replace("bg-tertiaryColor", "bg-primaryColor");

    // Adjust background sizes
    hover3BG.classList.replace("w-0", "w-full");
    sliderBG.classList.replace("w-[65%]", "w-0");

    let video = hover3BG.querySelector("video");
    if (video) {
      video.setAttribute("autoplay", "");
      video.setAttribute("muted", "");
      video.play();
    }
  });
  hover3.addEventListener("mouseout", () => {
    // Reset button visibility and size
    btn3.classList.replace("md:h-full", "md:h-0");
    btn3.classList.replace("md:visible", "md:invisible");
    btn3.classList.replace("md:opacity-100", "md:opacity-0");

    // Text Change
    hover1.querySelector("h2").innerHTML =
      "Accede a nuestra videoconferencia de resultados a 4T24 con público inversionista";

    btn1.classList.remove("md:invisible", "md:opacity-0", "md:h-0");

    // Reset hover and slider styles
    hover3.classList.remove("border-l-4");
    slider.classList.replace("bg-primaryColor", "bg-tertiaryColor");

    // Reset background sizes
    hover3BG.classList.replace("w-full", "w-0");
    sliderBG.classList.replace("w-0", "w-[65%]");

    let video = hover3BG.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video to start
    }
  });

  hover4.addEventListener("mouseover", () => {
    // Toggle button visibility and size
    btn4.classList.replace("md:h-0", "md:h-full");
    btn4.classList.replace("md:invisible", "md:visible");
    btn4.classList.replace("md:opacity-0", "md:opacity-100");

    // Text Change
    hover1.querySelector("h2").innerHTML =
      "Fourth Hover Accede a nuestra videoconferencia de resultados";

    btn1.classList.add("md:invisible", "md:opacity-0", "md:h-0");

    // Adjust hover and slider styles
    hover4.classList.add("border-l-4");
    slider.classList.replace("bg-tertiaryColor", "bg-primaryColor");

    // Update upper part and text styles
    upperPart.classList.replace("text-primaryColor", "text-secondaryColor");
    upperText.classList.replace("text-tabletext", "text-white");

    upperPart.classList.replace("from-white", "from-primaryColor");
    upperPart.classList.replace("via-white", "via-primaryColor");

    // Update bottom part styles
    bottomPart.classList.replace(
      "from-[rgba(255,255,255,0.8)]",
      "from-primaryColor"
    );
    bottomPart.classList.replace(
      "via-[rgba(255,255,255,0.8)]",
      "via-primaryColor"
    );
    bottomText.classList.replace("text-primaryColor", "text-white");

    // Adjust background sizes
    hover4BG.classList.replace("w-0", "w-[65%]");
    sliderBG.classList.replace("w-[65%]", "w-0");
  });
  hover4.addEventListener("mouseout", () => {
    // Reset button visibility and size
    btn4.classList.replace("md:h-full", "md:h-0");
    btn4.classList.replace("md:visible", "md:invisible");
    btn4.classList.replace("md:opacity-100", "md:opacity-0");

    // Text Change
    hover1.querySelector("h2").innerHTML =
      "Accede a nuestra videoconferencia de resultados a 4T24 con público inversionista";

    btn1.classList.remove("md:invisible", "md:opacity-0", "md:h-0");

    // Reset hover and slider styles
    hover4.classList.remove("border-l-4");
    slider.classList.replace("bg-primaryColor", "bg-tertiaryColor");

    // Reset upper part and text styles
    upperPart.classList.replace("text-secondaryColor", "text-primaryColor");
    upperText.classList.replace("text-white", "text-tabletext");

    upperPart.classList.replace("from-primaryColor", "from-white");
    upperPart.classList.replace("via-primaryColor", "via-white");

    // Reset bottom part styles
    bottomPart.classList.replace(
      "from-primaryColor",
      "from-[rgba(255,255,255,0.8)]"
    );
    bottomPart.classList.replace(
      "via-primaryColor",
      "via-[rgba(255,255,255,0.8)]"
    );
    bottomText.classList.replace("text-white", "text-primaryColor");

    // Reset background sizes
    hover4BG.classList.replace("w-[65%]", "w-0");
    sliderBG.classList.replace("w-0", "w-[65%]");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    perPage: 3,
    focus: 0,
    omitEnd: true,
    gap: 24,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  });
  splide.mount();
});
