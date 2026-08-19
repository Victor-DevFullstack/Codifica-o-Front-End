let formulario;
let inputNome;
let inputPreco
let inputImagem;
let listaProdutos;

let produtos = [];

function renderizarProdutos() {
    listaProdutos.innerHTML = "";

    if (produtos.length === 0) {
        listaProdutos.innerHTML = "<p>Nenhum item cadastrado ainda.</p>";
        return;
    }

    produtos.forEach((item, index) => {
        const card = document.createElement("article");
        card.classList.add("card-produto");

        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <p>R$ ${item.preco}</p>
            <button class="btn-remover">Remover</button>
        `;

        card.querySelector(".btn-remover").addEventListener("click", () => {
            removerProduto(index);
        });

        listaProdutos.appendChild(card);
    });
}

function adicionarProduto(event) {
    event.preventDefault();

    const nome = inputNome.value.trim();
    const preco = inputPreco.value.trim();
    const imagem = inputImagem.value.trim();

    if (nome === "" || preco === "" || imagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novoItem = { nome, preco, imagem };

    produtos.push(novoItem);

    salvarProdutos();
    renderizarProdutos();

    formulario.reset();
    inputNome.focus();
}

function removerProduto(index) {
    produtos.splice(index, 1);

    salvarProdutos();
    renderizarProdutos();
}

function salvarProdutos() {
    localStorage.setItem("catalogoProdutos", JSON.stringify(produtos));
}

document.addEventListener("DOMContentLoaded", function () {
    formulario = document.getElementById("form-cadastro");
    inputNome = document.getElementById("input-nome");
    inputPreco = document.getElementById("input-preco");
    inputImagem = document.getElementById("input-imagem");
    listaProdutos = document.getElementById("lista-produtos");

    const produtosSalvos = JSON.parse(localStorage.getItem("catalogoProdutos"));

    if (produtosSalvos) {
        produtos = produtosSalvos;
    }

    renderizarProdutos();

    formulario.addEventListener("submit", adicionarProduto);
});