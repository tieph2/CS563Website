window.onload = function () {
  let contactBtn = document.getElementById("contact-button");
  let contactForm = document.getElementBy("contact");
  contactBtn.addEventListener("click", function () {
    contactForm.scrollIntoView({ behavior: "smooth" });
  });
};
