let productList;
let cartList;
let totalEl;


let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

/* ADICIONAR AO CARRINHO */
export function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);

    carrinho.push(produto);

    salvarCarrinho();
}


/* RENDERIZAR CARRINHO*/
export function renderizarCarrinho() {
    cartList.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;
        const li =
            document.createElement("li");
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco}
            <button>Remover</button>
        `;
        li.querySelector("button")
            .addEventListener("click", () => {
            carrinho.splice(index, 1);
            salvarCarrinho();
        });
        cartList.appendChild(li);
    });

    totalEl.textContent =
    `Total: R$ ${total}`
;}


/* SALVAR CARRINHO */
export function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

document.addEventListener("DOMContentLoaded", () => { 
    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    
    }
);

