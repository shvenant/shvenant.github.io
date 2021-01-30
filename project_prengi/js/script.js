window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header__nav"),
        menuItem = document.querySelectorAll(".header__link"),
        hamburger = document.querySelector(".hamburger"),
        body = document.querySelector("body");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
        body.classList.toggle("no-scroll");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger_active");
            menu.classList.toggle("menu_active");
        });
    });
});

window.onscroll = function showHeader() {
    const header = this.document.querySelector(".header__top");
    if (window.pageYOffset > 750) {
        header.classList.add("header__fixed");
    } else {
        header.classList.remove("header__fixed");
    }
};
