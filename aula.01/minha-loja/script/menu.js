const btnMenu = document.getElementById("btnMenu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

btnMenu.addEventListener("click", () => {

    sidebar.classList.add("ativo");
    overlay.classList.add("ativo");

});

overlay.addEventListener("click", () => {

    sidebar.classList.remove("ativo");
    overlay.classList.remove("ativo");

});