const burgerButton = document.querySelector(".burger");
const nav = document.querySelector("nav");

const menuTrigger = () => {
    nav.classList.toggle("active");
};

burgerButton.addEventListener("click", menuTrigger);
