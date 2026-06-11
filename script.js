const botao =
document.getElementById("btn-acessibilidade");

const painel =
document.getElementById("painel");

const aumentar =
document.getElementById("aumentar");

const diminuir =
document.getElementById("diminuir");

const contraste =
document.getElementById("contraste");

const voz =
document.getElementById("voz");

const dislexia =
document.getElementById("dislexia");

let tamanho = 100;

botao.addEventListener("click",()=>{

document
.getElementById("painel-acessibilidade")
.classList.toggle("ativo");

});

aumentar.addEventListener("click",()=>{

tamanho += 10;

document.body.style.fontSize =
tamanho + "%";

});

diminuir.addEventListener("click",()=>{

if(tamanho > 70){

tamanho -= 10;

document.body.style.fontSize =
tamanho + "%";

}

});

contraste.addEventListener("click",()=>{

document.body.classList.toggle(
"alto-contraste"
);

});

dislexia.addEventListener("click",()=>{

document.body.classList.toggle(
"fonte-dislexia"
);

});

voz.addEventListener("click",()=>{

const texto =
document.body.innerText;

const leitura =
new SpeechSynthesisUtterance(texto);

leitura.lang = "pt-BR";

speechSynthesis.speak(leitura);

});