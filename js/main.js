let links = document.querySelectorAll(".header__link");
const body = document.body;
const burger = document.querySelector("#burger");
const menu_burg = document.querySelector("#b_menu");
const nav = document.querySelector("#nav").cloneNode(1);

burger.addEventListener("click", function() {
    menu_burg.classList.toggle("open");
    body.classList.toggle("noscroll");
    menu_burg.appendChild(nav);
})
links.forEach((link) => {
    link.addEventListener("click", function() {
        menu_burg.classList.remove("open");
        body.classList.remove("noscroll");
    });
});