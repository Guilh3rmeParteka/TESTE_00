let tamanhoAtual = 100;

const aumentarFonte =
document.getElementById("fonteMais");

const diminuirFonte =
document.getElementById("fonteMenos");

const contraste =
document.getElementById("contraste");

const voz =
document.getElementById("voz");

aumentarFonte.addEventListener("click", () => {

    tamanhoAtual += 10;

    document.body.style.fontSize =
    tamanhoAtual + "%";

});

diminuirFonte.addEventListener("click", () => {

    tamanhoAtual -= 10;

    document.body.style.fontSize =
    tamanhoAtual + "%";

});

contraste.addEventListener("click", () => {

    document.body.classList.toggle(
        "alto-contraste"
    );

});

voz.addEventListener("click", () => {

    let texto =
    document.body.innerText;

    let mensagem =
    new SpeechSynthesisUtterance(texto);

    mensagem.lang = "pt-BR";

    speechSynthesis.speak(mensagem);

});

/* Efeito futurista nos cards */

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const x =
        e.offsetX;

        const y =
        e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(0,255,136,.25),
        rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,.05)";

    });

});