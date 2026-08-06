const btnMenu = document.querySelector(".btn-menu-header2");
const menu = document.querySelector(".menu-lateral");
const overlay = document.querySelector(".overlay");

btnMenu.addEventListener("click", () => {
    menu.classList.add("ativo");
    overlay.classList.add("ativo");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("ativo");
    overlay.classList.remove("ativo");
});