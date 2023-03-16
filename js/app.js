window.onload = function () {
  let contactBtn = document.querySelector("#contact-button");
  let contactForm = document.querySelector("#contact");
  contactBtn.addEventListener("click", function () {
    contactForm.scrollIntoView({ behavior: "smooth" });
  });
};
