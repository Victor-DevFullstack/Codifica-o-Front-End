/*
<article class="product">
    <img class="img-product" src="img/tenis4.webp" alt="Tênis de passeio marrom masculino">
    <p>Dunk Low Retro Premium<br>
    R$588,99 no Pix</p>
</article>

article class="product">
    <img class="img-product" src="img/tenis2.webp" alt="Tênis de corrida preto">
    <p>Tênis Nike Revolution 8 Masculino<br>
    R$299,99 no Pix</p>
                
    <span class="novo">NOVO</span>
</article>
*/

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
            `;

            container.appendChild(card); 
        }
    );
}

renderizarProdutos(produtosLoja);