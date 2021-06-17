const body = document.querySelector("body");
const burgerButton = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");

burgerButton.addEventListener("click", () => {
  headerMenu.classList.toggle("menu--shown");
  burgerButton.classList.toggle("header__burger--opened");
});

const agreementModal = document.querySelector(".modal__agreement");
const agreementCloseButton = agreementModal.querySelector(".modal__close");
const agreementButtons = document.querySelectorAll(".agreement");

agreementButtons.forEach((button) => {
  button.addEventListener("click", () => {
    agreementModal.classList.add("modal--shown");
    body.classList.add("body--frozen");
  });
});

agreementCloseButton.addEventListener("click", () => {
  agreementModal.classList.remove("modal--shown");
  body.classList.remove("body--frozen");
});

const partershipModal = document.querySelector(".modal__partnership");
const partershipCloseButton = partershipModal.querySelector(".modal__close");
const partnershipButton = document.querySelector(".about__partnership");

partnershipButton.addEventListener("click", () => {
  partershipModal.classList.add("modal--shown");
  body.classList.add("body--frozen");
});

partershipCloseButton.addEventListener("click", () => {
  partershipModal.classList.remove("modal--shown");
  body.classList.remove("body--frozen");
});

const requestModal = document.querySelector(".modal__request");
const requestCloseButton = requestModal.querySelector(".modal__close");
const requestContinueButton = requestModal.querySelector(
  ".modal__continue-button"
);
const submitButton = document.querySelector(".form__button");

submitButton.addEventListener("click", () => {
  requestModal.classList.add("modal--shown");
  body.classList.add("body--frozen");
});

requestCloseButton.addEventListener("click", () => {
  requestModal.classList.remove("modal--shown");
  body.classList.remove("body--frozen");
});

requestContinueButton.addEventListener("click", () => {
  requestModal.classList.remove("modal--shown");
  body.classList.remove("body--frozen");
});
