/* =========================================================
   DILEMAS DIGITAIS
   SISTEMA INTERATIVO 3D
========================================================= */


/* =========================================================
   SOLUÇÕES
========================================================= */

const solutions = {

    privacidade: {

        title: "🔒 Privacidade e proteção de dados",

        description:
            "Os sites devem explicar de forma clara quais dados são coletados, por que são necessários e durante quanto tempo serão armazenados.",

        items: [

            "Criar um resumo visual sobre a coleta de dados.",

            "Explicar a finalidade de cada tipo de dado coletado.",

            "Permitir que o usuário altere suas preferências.",

            "Oferecer uma forma simples de excluir os dados."

        ]

    },


    complexidade: {

        title: "📚 Termos mais fáceis de entender",

        description:
            "Documentos jurídicos podem continuar existindo, mas o usuário deveria receber uma versão resumida e escrita em linguagem simples.",

        items: [

            "Criar um resumo dos pontos mais importantes.",

            "Destacar mudanças importantes nos termos.",

            "Usar exemplos para explicar regras complexas.",

            "Permitir que o usuário consulte o documento completo."

        ]

    },


    aceitacao: {

        title: "⚡ Aceitação consciente",

        description:
            "Em vez de depender apenas de um botão de 'Aceitar', os sites podem apresentar as informações mais importantes antes do consentimento.",

        items: [

            "Mostrar um resumo antes da aceitação.",

            "Destacar direitos e responsabilidades.",

            "Avisar quando os termos forem modificados.",

            "Evitar que o usuário seja pressionado a aceitar rapidamente."

        ]

    },


    consentimento: {

        title: "🎯 Consentimento realmente livre",

        description:
            "As opções de aceitar ou recusar determinadas práticas devem ser apresentadas de maneira equilibrada, sem esconder a alternativa de recusa.",

        items: [

            "Deixar aceitar e recusar igualmente visíveis.",

            "Permitir escolher quais dados serão compartilhados.",

            "Evitar configurações pré-selecionadas quando possível.",

            "Facilitar a alteração das escolhas posteriormente."

        ]

    }

};


/* =========================================================
   SISTEMA DE SOLUÇÕES
========================================================= */

const buttons =
    document.querySelectorAll(".solution-btn");

const solutionDisplay =
    document.getElementById("solution-display");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.target;

        const solution =
            solutions[target];


        if (!solution) {
            return;
        }


        solutionDisplay.innerHTML = `

            <div class="solution-content">

                <div class="mini-label">
                    SOLUTION_PROTOCOL // ACTIVE
                </div>

                <h3>${solution.title}</h3>

                <p>
                    ${solution.description}
                </p>

                <ul>

                    ${solution.items
                        .map(item => `
                            <li>${item}</li>
                        `)
                        .join("")}

                </ul>

            </div>

        `;


        solutionDisplay.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    });

});


/* =========================================================
   QUIZ
========================================================= */

const quizButtons =
    document.querySelectorAll(
        ".quiz-options button"
    );


const quizResult =
    document.getElementById("quiz-result");


quizButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer =
            button.dataset.answer;


        quizButtons.forEach(btn => {

            btn.style.borderColor =
                "rgba(112, 128, 180, 0.22)";

            btn.style.transform =
                "translateX(0)";

        });


        if (answer === "correct") {

            button.style.borderColor =
                "#00ffc8";

            quizResult.textContent =
                "✓ CORRETO — Verificar como seus dados serão utilizados é uma atitude importante antes de aceitar.";

            quizResult.className =
                "correct";

        }

        else {

            button.style.borderColor =
                "#ff4d73";

            quizResult.textContent =
                "✕ RESPOSTA INCORRETA — Procure entender pelo menos os pontos principais antes de aceitar.";

            quizResult.className =
                "wrong";

        }

    });

});


/* =========================================================
   REVEAL AO ENTRAR NA TELA
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".card, .principle, .section-title"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   EFEITO 3D NOS CARDS
========================================================= */

const tiltCards =
    document.querySelectorAll(".tilt-card");


const isTouchDevice =
    window.matchMedia(
        "(pointer: coarse)"
    ).matches;


if (!isTouchDevice) {

    tiltCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    ((x - centerX) / centerX) * 10;


                const rotateX =
                    ((centerY - y) / centerY) * 10;


                card.style.transform = `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateZ(8px)
                `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";

            }
        );

    });

}


/* =========================================================
   CURSOR DIGITAL
========================================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


if (!isTouchDevice) {

    document.addEventListener(
        "mousemove",
        event => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        }
    );

}


/* =========================================================
   PARALLAX DO HERO
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (!isTouchDevice && heroVisual) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX / window.innerWidth - 0.5);

            const y =
                (event.clientY / window.innerHeight - 0.5);


            heroVisual.style.transform = `
                translate(
                    ${x * 12}px,
                    ${y * 12}px
                )
            `;

        }
    );

}


/* =========================================================
   HEADER DINÂMICO
========================================================= */

const header =
    document.querySelector("header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 15px 50px rgba(0,0,0,0.3)";

        }

        else {

            header.style.boxShadow =
                "none";

        }

    }
);


/* =========================================================
   ACTIVE MENU
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const menuLinks =
    document.querySelectorAll(
        ".menu a"
    );


const menuObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    menuLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                    });


                    const active =
                        document.querySelector(
                            `.menu a[href="#${entry.target.id}"]`
                        );


                    if (active) {

                        active.classList.add(
                            "active"
                        );

                    }

                }

            });

        },

        {
            threshold: 0.5
        }

    );


sections.forEach(section => {

    menuObserver.observe(section);

});


/* =========================================================
   EFEITO DE DIGITAÇÃO NO STATUS
========================================================= */

const statusTexts = [

    "SYSTEM ONLINE",

    "DATA PROTECTED",

    "PROTOCOL ACTIVE",

    "USER CONNECTED"

];


const statusElements =
    document.querySelectorAll(
        ".status"
    );


let statusIndex = 0;


setInterval(() => {

    statusIndex =
        (statusIndex + 1) %
        statusTexts.length;


    statusElements.forEach(element => {

        const span =
            element.querySelector("span");


        if (span) {

            element.innerHTML = `

                <span></span>

                ${statusTexts[statusIndex]}

            `;

        }

    });

}, 3500);


/* =========================================================
   EFEITO DE DIGITAÇÃO DO MINI LABEL
========================================================= */

const miniLabels =
    document.querySelectorAll(
        ".mini-label"
    );


miniLabels.forEach(label => {

    label.addEventListener(
        "mouseenter",
        () => {

            label.style.textShadow =
                "0 0 15px #00e5ff";

        }
    );


    label.addEventListener(
        "mouseleave",
        () => {

            label.style.textShadow =
                "none";

        }
    );

});


/* =========================================================
   PROTEÇÃO CONTRA ERROS
========================================================= */

window.addEventListener(
    "error",
    event => {

        console.warn(
            "Dilemas Digitais:",
            event.message
        );

    }
);


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "%c DILEMAS DIGITAIS ",
    `
        background:#6c63ff;
        color:white;
        padding:10px;
        font-weight:bold;
        border-radius:5px;
    `
);


console.log(
    "Sistema tecnológico carregado."
);


console.log(
    "3D Interface: ACTIVE"
);


console.log(
    "Privacy Protocol: ACTIVE"
);