let form;
let nomeInput;
let imagemInput;
let listaItensDiv;

let itens = [];

function renderizarItens() {
    listaItensDiv.innerHTML = "";

    if (itens.length === 0) {
        listaItensDiv.innerHTML = "<p>Nenhum item cadastrado ainda.</p>";
        return;
    }

    itens.forEach((item, index) => {
        const card = document.createElement("article");
        card.classList.add("item-card");

        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <button class="remover-btn">Remover</button>
        `;

        card.querySelector(".remover-btn").addEventListener("click", () => {
            removerItem(index);
        });

        listaItensDiv.appendChild(card);
    });
}

function adicionarItem(event) {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const imagem = imagemInput.value.trim();

    if (nome === "" || imagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novoItem = { nome, imagem };

    itens.push(novoItem);

    salvarItens();
    renderizarItens();

    form.reset();
    nomeInput.focus();
}

function removerItem(index) {
    itens.splice(index, 1);

    salvarItens();
    renderizarItens();
}

function salvarItens() {
    localStorage.setItem("catalogoItens", JSON.stringify(itens));
}

document.addEventListener("DOMContentLoaded", function () {
    form = document.getElementById("form-cadastro");
    nomeInput = document.getElementById("nome-item");
    imagemInput = document.getElementById("url-img");
    listaItensDiv = document.getElementById("lista-filmes");

    const itensSalvos = JSON.parse(localStorage.getItem("catalogoItens"));

    if (itensSalvos) {
        itens = itensSalvos;
    }

    renderizarItens();

    form.addEventListener("submit", adicionarItem);
});