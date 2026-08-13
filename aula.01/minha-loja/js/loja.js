/*import { adicionarAoCarrinho } from "./carrinhoUtils.js";*/

const produtosLoja = [
    {
        id: 1,
        nome: "Dunk Low Retro Premium",
        classe: "Casual",
        preco: 588.99,
        img:"./img/tenis4.webp"
    },
    {
        id: 2,
        nome: "Tênis Nike Revolution 8 Masculino",
        classe: "Corrida",
        preco: 299.99,
        img:"./img/tenis2.webp"
    },
    {
        id: 3,
        nome: "Dunk Low Retro Premium",
        classe: "Casual",
        preco: 588.99,
        img:"./img/tenis4.webp"
    },
    {
        id: 4,
        nome: "Dunk Low Retro Premium",
        classe: "Casual",
        preco: 588.99,
        img:"./img/tenis4.webp"
    },
    {
        id: 5,
        nome: "Dunk Low Retro Premium",
        classe: "Casual",
        preco: 588.99,
        img:"./img/tenis4.webp"
    },
    {
        id: 6,
        nome: "Dunk Low Retro Premium",
        classe: "Casual",
        preco: 588.99,
        img:"./img/tenis4.webp"
    }
];

const container = document.getElementById("section-produtos");

function renderizarProdutos(lista){
    container.innerHTML="";

    lista.forEach(
        produto => {
            const card = document.createElement("article");
            card.classList.add("product");

            card.innerHTML=`
            <img class="img-product" src="${produto.img}" alt="${produto.nome}">
            <p>${produto.nome}</p>
            <p>${produto.classe}</p>
            <h3>R$${produto.preco}</h3>
            <button class="btn-comprar">Comprar</button>
            `;

            /*card
            .querySelector("btn-comprar")
            .addEventListener("click", () => {
                adicionarAoCarrinho(produto);
                alert("Produto adicionado ao carrinho")
            });*/

            container.appendChild(card); 
        }
    );
}

renderizarProdutos(produtosLoja);