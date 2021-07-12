const burgerButton = document.querySelector(".burger");
const ul = document.querySelector("ul");

const menuTrigger = () => {
    ul.classList.toggle("active");
};

burgerButton.addEventListener("click", menuTrigger);
