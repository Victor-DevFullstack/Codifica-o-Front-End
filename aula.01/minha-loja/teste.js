// ==========================
// ARRAY DE PRODUTOS (CATÁLOGO)
// ==========================
const produtos = [
    {
        id: 1,
        nome: "Smartphone",
        preco: 7500,
        categoria: "Eletrônicos",
        imagem: "img/iphone.jpg"
    },
    {
        id: 2,
        nome: "Camiseta",
        preco: 250,
        categoria: "Roupas",
        imagem: "img/camisa.jpg"
    },
    {
        id: 3,
        nome: "Relógio",
        preco: 100000,
        categoria: "Acessórios",
        imagem: "img/relogio.jpg"
    }
];

// ==========================
// SELEÇÃO DO DOM
// ==========================
const container = document.getElementById("product-list");

// ==========================
// FUNÇÃO PARA RENDERIZAR PRODUTOS
// ==========================
function renderizarProdutos(lista) {

    // limpa antes de renderizar
    container.innerHTML = "";

    lista.forEach(produto => {

        // cria card
        const card = document.createElement("div");
        card.classList.add("product-card");

        // conteúdo do card
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco}</p>
        `;

        // adiciona no container
        container.appendChild(card);
    });
}

// ==========================
// EXECUÇÃO
// ==========================
renderizarProdutos(produtos);

// ==========================
// DESTRUCTURING
// ==========================
const { nome, preco } = produtos[0];
console.log(`Produto: ${nome} - R$ ${preco}`);

// ==========================
// LISTAR PRODUTOS
// ==========================
function listarProdutos(lista) {
    lista.forEach(produto => {
        console.log(`Produto: ${produto.nome} - R$ ${produto.preco}`);
    });
}

listarProdutos(produtos);

// ==========================
// FILTRAR POR CATEGORIA
// ==========================
function filtrarPorCategoria(categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}

const eletronicos = filtrarPorCategoria("Eletrônicos");
console.log(eletronicos);

// ==========================
// SPREAD OPERATOR
// ==========================
const novosProdutos = [
    ...produtos,
    {
        id: 4,
        nome: "Notebook",
        preco: 3500,
        categoria: "Eletrônicos",
        imagem: "https://via.placeholder.com/150"
    }
];

console.log(novosProdutos);

// ==========================
// SIMULAÇÃO JSON
// ==========================
const produtosJSON = JSON.stringify(produtos);
console.log(produtosJSON);

const produtosConvertidos = JSON.parse(produtosJSON);
console.log(produtosConvertidos);

// ==========================
// VALIDAÇÃO DE FORMULÁRIO
// ==========================
const form = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Formulário enviado com sucesso!";
        mensagem.style.color = "green";
    }
});

// ==========================
// TO-DO LIST
// ==========================
const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista-tarefas");

// carregar do localStorage
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// renderizar tarefas
function renderizarTarefas() {
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        // botão remover
        const btn = document.createElement("button");
        btn.textContent = "Remover";

        btn.addEventListener("click", () => {
            tarefas.splice(index, 1);
            salvar();
        });

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

// salvar no localStorage
function salvar() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    renderizarTarefas();
}

// adicionar tarefa
botaoAdicionar.addEventListener("click", () => {
    const nova = inputTarefa.value;

    if (nova !== "") {
        tarefas.push(nova);
        inputTarefa.value = "";
        salvar();
    }
});

// iniciar
renderizarTarefas();