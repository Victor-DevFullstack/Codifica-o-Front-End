const filmes = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
        diretor: "Peter Jackson",
        ano: 2001
    },
    {
        id:2,
        titulo: "Matrix",
        diretor: "Lana e Lilly Wachowski",
        ano: 1999
    },
    {
        id:3,
        titulo: "De Volta Para o Futuro",
        diretor: "Robert Zemeckis",
        ano: 1985
    }
]

const container = document.getElementById("lista-filmes");

filmes.forEach(
    filme => {
        const card = document.createElement("article");
        card.classList.add("filme-card");

        card.innerHTML = `
        <img src="../img/tenis.webp">
        <h3>${filme.titulo}</h3>
        <p>Diretor: ${filme.diretor}</p>
        <p>Ano: ${filme.ano}</p>
        `
        container.appendChild(card);
    }
);

//const primeiroFilme = document.querySelector("filme-card");
//primeiroFilme.classList.add("destaque")

//const todosOsFilmes = document.querySelectorAll(".filme-card");
//const ultimoFilme = todosOsFilmes[todosOsFilmes.length-1];
//ultimoFilme.remove();