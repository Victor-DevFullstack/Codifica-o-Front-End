const track = document.querySelector(".slider-track");

const slides = document.querySelectorAll(".slide");

const proximo = document.querySelector("#proximo");

const anterior = document.querySelector("#anterior");


let atual = 0;

let tempo;


// move o slider

function moverSlider(){

    track.style.transform =
    `translateX(-${atual * 100}%)`;

}


// próximo

function irProximo(){

    atual++;

    if(atual >= slides.length){

        atual = 0;

    }

    moverSlider();

}


// anterior

function irAnterior(){

    atual--;

    if(atual < 0){

        atual = slides.length - 1;

    }

    moverSlider();

}


// reinicia contador automático

function reiniciarTempo(){

    clearInterval(tempo);

    tempo = setInterval(irProximo,5000);

}



// botão direita

proximo.addEventListener("click",()=>{

    irProximo();

    reiniciarTempo();

});



// botão esquerda

anterior.addEventListener("click",()=>{

    irAnterior();

    reiniciarTempo();

});



// inicia automático

tempo = setInterval(irProximo,5000);