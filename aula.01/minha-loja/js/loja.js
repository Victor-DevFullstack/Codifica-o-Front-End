// ==========================
// VARIÁVEIS GLOBAIS
// ==========================

// Referências aos elementos do DOM (serão atribuídas após o carregamento da página)
let productList;
let cartList;
let totalEl;

// Elementos do mini carrinho
let cartCount;
let miniList;
let miniTotal;

// Array que representa o estado atual do carrinho
let carrinho = [];

const produtos = [
    {
        id: 1,
        nome: "Dunk Low Retro Premium",
        classe: "Casual",
        preco: 588.99,
        img:"./img/tenis4.webp"
    },
    { id: 2, nome: "Tênis Nike Revolution 8", classe: "Corrida", preco: 299.99, img:"./img/tenis2.webp"},
    { id: 3, nome: "Dunk Low Retro Premium", classe: "Casual", preco: 588.99, img:"./img/tenis4.webp"},
    { id: 4, nome: "Dunk Low Retro Premium", classe: "Casual", preco: 588.99, img:"./img/tenis4.webp"},
    { id: 5,nome: "Dunk Low Retro Premium",classe: "Casual", preco: 588.99, img:"./img/tenis4.webp"},
    { id: 6, nome: "Dunk Low Retro Premium", classe: "Casual", preco: 588.99, img:"./img/tenis4.webp"}
];



// ==========================
 // RENDERIZAÇÃO DOS PRODUTOS
 // ==========================

 // Função responsável por exibir os produtos na tela
function renderizarProdutos() {

    // Limpa o container antes de renderizar novamente
    productList.innerHTML = "";

    // Percorre o array de produtos
    produtos.forEach(produto => {
        // Cria um elemento HTML para o card
        const card = document.createElement("article");
        card.classList.add("product-article");

        // Define o conteúdo do card
        card.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}" class="img-product">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco}</p>
            <button>Adicionar ao carrinho</button>
        `;

        // Adiciona evento ao botão
        card.querySelector("button").addEventListener("click", () => {
        adicionarAoCarrinho(produto.id);
        });

        // Insere o card no DOM
        productList.appendChild(card);
        });
}

// =============================
// ADICIONAR PRODUTO AO CARRINHO
// =============================

// Recebe o ID do produto e adiciona ao carrinho
function adicionarAoCarrinho(id) {
    // Busca o produto pelo ID
    const produto = produtos.find(p => p.id === id);

    // Adiciona ao array do carrinho
    carrinho.push(produto);

    // Atualiza sistema
    salvarCarrinho();
}

// ==================================
// RENDERIZAÇÃO DO CARRINHO PRINCIPAL
// ==================================

// Exibe os itens no carrinho principal
function renderizarCarrinho() {
    // Limpa lista antes de renderizar
    cartList.innerHTML = "";
    let total = 0;

    // Percorre itens do carrinho
    carrinho.forEach((item, index) => {

        // Soma o valor total
        total += item.preco;
        
        // Cria elemento da lista
        const li = document.createElement("li");
        
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco}
            <button>Remover</button>
        `;

        // Evento para remover item
        li.querySelector("button").addEventListener("click", () => {
            carrinho.splice(index, 1);
            salvarCarrinho();
        });

        // Adiciona ao DOM
        cartList.appendChild(li);
    });

    // Atualiza total
    totalEl.textContent = `Total: R$ ${total}`;
}

// ==========================
// MINI CARRINHO
// ==========================

// Atualiza o mini carrinho (ícone no topo)
function atualizarMiniCarrinho() {

    // Atualiza contador de itens
    cartCount.textContent = carrinho.length;

    // Limpa lista
    miniList.innerHTML = "";

    let total = 0;

    // Percorre itens
    carrinho.forEach(item => {

        total += item.preco;


        // Cria item da lista
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco}`;

        miniList.appendChild(li);
    });

    // Atualiza total
    miniTotal.textContent = `Total: R$ ${total}`;
}


// ==========================
// FINALIZAR COMPRA
// ==========================

// Simula finalização de compra
function finalizarCompra() {

    // Validação: carrinho vazio
    if (carrinho.length === 0) {
        mensagemCompra.textContent = "Seu carrinho está vazio!";
        mensagemCompra.style.color = "red";
        return;
    }

    // Mensagem de sucesso
    mensagemCompra.textContent = "Compra realizada com sucesso!";
    mensagemCompra.style.color = "green";

    // Limpa carrinho
    carrinho = [];

    salvarCarrinho();
}


// ==========================
// PERSISTÊNCIA (LOCALSTORAGE)
// ==========================

// Salva o carrinho no navegador e atualiza interface
function salvarCarrinho() {

    // Salva no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Atualiza telas
    renderizarCarrinho();
    atualizarMiniCarrinho();
}


// ==========================
// INICIALIZAÇÃO DO SISTEMA
// ==========================

// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {

    // Captura elementos do DOM
    productList = document.getElementById("section-produtos");
    cartList = document.getElementById("cart-list");
    totalEl = document.getElementById("total");

    cartCount = document.getElementById("cart-count");
    miniList = document.getElementById("mini-cart-list");
    miniTotal = document.getElementById("mini-total");

    // Elementos do checkout
    btnFinalizar = document.getElementById("finalizar-compra");

    mensagemCompra = document.getElementById("mensagem-compra");

    // Recupera dados salvos
    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Renderização inicial
    renderizarProdutos();
    renderizarCarrinho();
    atualizarMiniCarrinho();

    // Evento do botão finalizar compra
    btnFinalizar.addEventListener("click", finalizarCompra);
});
