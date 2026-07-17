const form = document.getElementById("form-register");

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
     window.location.href = "loja.html";
});