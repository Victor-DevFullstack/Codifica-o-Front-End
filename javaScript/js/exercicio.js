const tenisNike = [
    {
        id: 1,
        nome: "Revolution 8 Masculino",
        categoria: "Corrida",
        preco: 300
    },
    {
        id: 2,
        nome: "SB Force 58 Masculino",
        categoria: "Skateboarding",
        preco: 300
    },
    {
        id: 3,
        nome: "Air Max Excee Masculino",
        categoria: "Casual",
        preco: 420
    }
]

const container = document.getElementById("product-list")

tenisNike.forEach(
    tenis => {
        const card = document.createElement("div")
        card.classList.add("card");

        card.innerHTML = `
        <h3>${tenis.nome}</h3>
        <p>${tenis.categoria}</p>
        <h3>R$${tenis.preco} no Pix</h3>     
        `
        container.appendChild(card);
    }
);
