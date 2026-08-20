/* =====================================================
   DILEMAS DIGITAIS
   SISTEMA INTERATIVO 3D
===================================================== */


/* =====================================================
   SOLUÇÕES
===================================================== */

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


/* =====================================================
   SISTEMA DE SOLUÇÕES
===================================================== */

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


                <h3>

                    ${solution.title}

                </h3>


                <p>

                    ${solution.description}

                </p>


                <ul>

                    ${solution.items
                        .map(item => `
                            <li>${item}</li>
                        `)
                        .join("")
                    }

                </ul>

            </div>

        `;


        solutionDisplay.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    });

});


/* =====================================================
   QUIZ
===================================================== */

const quizButtons =
    document.querySelectorAll(".quiz-options button");

const quizResult =
    document.getElementById("quiz-result");


quizButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer =
            button.dataset.answer;


        if (answer === "correct") {

            quizResult.textContent =
                "✓ Correto! Verificar como seus dados serão utilizados é uma atitude importante antes de aceitar.";

            quizResult.className =
                "correct";

        }

        else {

            quizResult.textContent =
                "✕ Essa não é a melhor opção. Procure entender pelo menos os pontos principais antes de aceitar.";

            quizResult.className =
                "wrong";

        }

    });

});


/* =====================================================
   EFEITO 3D DOS CARDS
===================================================== */

const tiltCards =
    document.querySelectorAll(".tilt-card");


tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

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


        const rotateX =
            ((y - centerY) / centerY) * -7;


        const rotateY =
            ((x - centerX) / centerX) * 7;


        card.style.transform = `

            perspective(1000px)

            rotateX(${rotateX}deg)

            rotateY(${rotateY}deg)

            translateZ(10px)

        `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";

    });

});


/* =====================================================
   PARTÍCULAS
===================================================== */

const particlesContainer =
    document.getElementById("particles");


function createParticles() {

    if (!particlesContainer) {

        return;

    }


    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");


        particle.className =
            "particle";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            (5 + Math.random() * 10) + "s";


        particle.style.animationDelay =
            Math.random() * 10 + "s";


        particle.style.opacity =
            Math.random();


        particlesContainer.appendChild(
            particle
        );

    }

}


createParticles();


/* =====================================================
   ANIMAÇÃO AO APARECER
===================================================== */

const revealElements =
    document.querySelectorAll(

        ".section-title, .card, .principle, .solution-display"

    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
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

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";


    element.style.transition =
        "opacity .7s ease, transform .7s ease";


    observer.observe(element);

});


/* =====================================================
   ESTILO DINÂMICO DA ANIMAÇÃO
===================================================== */

const revealStyle =
    document.createElement("style");


revealStyle.textContent = `

    .visible {

        opacity: 1 !important;

        transform:
            translateY(0) !important;

    }

`;


document.head.appendChild(
    revealStyle
);


/* =====================================================
   PARALLAX DO FUNDO
===================================================== */

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;


    const grid =
        document.querySelector(
            ".background-grid"
        );


    if (grid) {

        grid.style.transform = `

            perspective(500px)

            rotateX(60deg)

            translateY(${scroll * 0.08}px)

            scale(2.2)

        `;

    }

});


/* =====================================================
   MENU ATIVO
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".menu a"
    );


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.color =
            link.getAttribute("href") === `#${current}`

                ? "white"

                : "";

    });

});


/* =====================================================
   CONSOLE
===================================================== */

console.log(

    "%c DILEMAS DIGITAIS %c SYSTEM ONLINE",

    "color:#00f5d4;font-weight:bold;font-size:16px;",

    "color:#725cff;font-weight:bold;"

);