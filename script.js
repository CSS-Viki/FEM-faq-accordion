const accordions = document.getElementsByClassName("faq-container");

for (let i = 0; i < accordions.length; i++) {

  const accordion = accordions[i];
  const icon = accordion.querySelector(".faq-question-container img");

  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");

    if (accordion.classList.contains("active")) {
      icon.src = "./assets/images/icon-minus.svg";
    } else {
      icon.src = "./assets/images/icon-plus.svg";
    }
  });
}
