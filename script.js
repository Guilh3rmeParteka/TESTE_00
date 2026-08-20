/* =========================================================
   DILEMAS DIGITAIS
   SCRIPT.JS
   QUIZ + SOLUÇÕES + PARTÍCULAS + EFEITOS 3D
========================================================= */

/* =========================================================
   PARTÍCULAS
========================================================= */

const particlesContainer = document.getElementById("particles");

if (particlesContainer) {

    for (let i = 0; i < 70; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (5 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particle.style.opacity =
            Math.random();

        particlesContainer.appendChild(particle);
    }
}

/* =========================================================
   SOLUÇÕES DOS DILEMAS
========================================================= */

const solutionDisplay =
    document.getElementById("solution-display");

const solutionButtons =
    document.querySelectorAll(".solution-btn");

const solutions = {

    privacidade: {
        title: "🔒 Privacidade",
        text:
            "O usuário deve saber quais dados estão sendo coletados, por que são necessários e como serão utilizados.",
        items: [
            "Verifique quais dados estão sendo solicitados.",
            "Leia as configurações de privacidade.",
            "Evite fornecer informações desnecessárias.",
            "Procure entender com quem os dados podem ser compartilhados."
        ]
    },

    complexidade: {
        title: "📚 Textos complexos",
        text:
            "Termos de uso podem ser longos, mas isso não significa que o usuário precise aceitar tudo sem compreender.",
        items: [
            "Procure resumos ou versões simplificadas.",
            "Identifique as partes sobre dados e privacidade.",
            "Observe regras, responsabilidades e limitações.",
            "Não tenha pressa para clicar em aceitar."
        ]
    },

    aceitacao: {
        title: "⚡ Aceitação automática",
        text:
            "Clicar rapidamente em 'Aceitar' pode fazer com que o usuário ignore informações importantes.",
        items: [
            "Pare alguns segundos antes de aceitar.",
            "Leia os pontos principais.",
            "Confira as permissões solicitadas.",
            "Faça perguntas quando alguma regra não estiver clara."
        ]
    },

    consentimento: {
        title: "🎯 Consentimento",
        text:
            "Uma escolha realmente livre deve permitir que o usuário compreenda suas opções antes de decidir.",
        items: [
            "Confira se existe uma alternativa para recusar.",
            "Compare as opções disponíveis.",
            "Evite decisões tomadas apenas pela aparência do botão.",
            "Revise suas permissões quando necessário."
        ]
    }
};

solutionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target = button.dataset.target;

        const solution = solutions[target];

        if (!solution || !solutionDisplay) {
            return;
        }

        solutionDisplay.innerHTML = `
            <div class="solution-content">

                <div class="mini-label">
                    SOLUTION_LOADED // ${target.toUpperCase()}
                </div>

                <h3>${solution.title}</h3>

                <p>
                    ${solution.text}
                </p>

                <ul>
                    ${solution.items
                        .map(item => `<li>${item}</li>`)
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
   EFEITO 3D DOS CARDS
========================================================= */

const tiltCards =
    document.querySelectorAll(".tilt-card");

tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        card.style.transform = `
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-5px)
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";
    });

});

/* =========================================================
   BANCO DE PERGUNTAS
========================================================= */

const questions = [

    {
        question:
            "Antes de aceitar um termo de uso, qual atitude é mais segura?",

        options: [
            "Clicar em Aceitar rapidamente",
            "Verificar como meus dados serão utilizados",
            "Ignorar as configurações de privacidade",
            "Aceitar sem ler porque todos fazem isso"
        ],

        correct: 1
    },

    {
        question:
            "Por que é importante verificar quais dados um aplicativo coleta?",

        options: [
            "Porque todo aplicativo precisa saber tudo sobre você",
            "Porque os dados podem ser utilizados de diferentes maneiras",
            "Porque isso deixa o aplicativo mais bonito",
            "Porque aumenta automaticamente a velocidade da internet"
        ],

        correct: 1
    },

    {
        question:
            "O que fazer quando um termo de uso possui uma linguagem muito complexa?",

        options: [
            "Aceitar imediatamente",
            "Ignorar completamente",
            "Procurar um resumo ou explicação dos pontos principais",
            "Desativar o celular"
        ],

        correct: 2
    },

    {
        question:
            "Qual destas informações merece atenção especial em um termo de uso?",

        options: [
            "Como os dados pessoais serão utilizados",
            "A cor do botão de aceitar",
            "O tamanho do logotipo",
            "A animação da página"
        ],

        correct: 0
    },

    {
        question:
            "Se um site oferece uma opção para compartilhar mais dados, o que você deve fazer?",

        options: [
            "Aceitar automaticamente",
            "Verificar por que os dados são necessários",
            "Compartilhar tudo para ganhar pontos",
            "Ignorar qualquer explicação"
        ],

        correct: 1
    },

    {
        question:
            "Qual atitude demonstra um consentimento mais consciente?",

        options: [
            "Aceitar sem observar as opções",
            "Escolher depois de compreender o que está sendo solicitado",
            "Clicar sempre no primeiro botão",
            "Deixar outra pessoa decidir por você"
        ],

        correct: 1
    },

    {
        question:
            "Por que devemos verificar as configurações de privacidade?",

        options: [
            "Para entender e controlar algumas opções relacionadas aos nossos dados",
            "Para deixar a tela mais colorida",
            "Para aumentar o número de anúncios",
            "Para remover todos os aplicativos"
        ],

        correct: 0
    },

    {
        question:
            "Qual comportamento pode representar uma aceitação automática?",

        options: [
            "Ler os pontos importantes antes de decidir",
            "Comparar as opções disponíveis",
            "Clicar em Aceitar sem verificar as informações",
            "Verificar as configurações de privacidade"
        ],

        correct: 2
    },

    {
        question:
            "Se você não entendeu uma regra importante dos termos de uso, o que é melhor fazer?",

        options: [
            "Aceitar mesmo assim",
            "Ignorar a dúvida",
            "Buscar uma explicação antes de decidir",
            "Compartilhar sua senha"
        ],

        correct: 2
    },

    {
        question:
            "Qual é o principal objetivo de uma experiência digital mais transparente?",

        options: [
            "Fazer o usuário clicar mais rápido",
            "Dificultar as escolhas",
            "Ajudar o usuário a compreender e tomar decisões conscientes",
            "Esconder informações importantes"
        ],

        correct: 2
    }

];

/* =========================================================
   ELEMENTOS DO QUIZ
========================================================= */

const questionCounter =
    document.getElementById("question-counter");

const scoreCounter =
    document.getElementById("score-counter");

const progressFill =
    document.getElementById("progress-fill");

const quizQuestion =
    document.getElementById("quiz-question");

const quizOptions =
    document.getElementById("quiz-options");

const quizResult =
    document.getElementById("quiz-result");

const nextQuestion =
    document.getElementById("next-question");

const quizFinal =
    document.getElementById("quiz-final");

const finalScore =
    document.getElementById("final-score");

const finalMessage =
    document.getElementById("final-message");

const restartQuiz =
    document.getElementById("restart-quiz");

/* =========================================================
   ESTADO DO QUIZ
========================================================= */

let currentQuestion = 0;
let score = 0;
let answered = false;

/* =========================================================
   CARREGAR PERGUNTA
========================================================= */

function loadQuestion() {

    answered = false;

    quizResult.textContent = "";

    nextQuestion.hidden = true;

    const question =
        questions[currentQuestion];

    questionCounter.textContent =
        `PERGUNTA ${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;

    scoreCounter.textContent =
        `PONTOS: ${score}`;

    progressFill.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    quizQuestion.textContent =
        question.question;

    quizOptions.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.innerHTML = `
            <span>${letters[index]}</span>
            ${option}
        `;

        button.addEventListener(
            "click",
            () => checkAnswer(index, button)
        );

        quizOptions.appendChild(button);
    });
}

/* =========================================================
   VERIFICAR RESPOSTA
========================================================= */

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const question =
        questions[currentQuestion];

    const allButtons =
        quizOptions.querySelectorAll("button");

    allButtons.forEach(button => {
        button.disabled = true;
    });

    const correctButton =
        allButtons[question.correct];

    correctButton.classList.add(
        "correct-answer"
    );

    if (selectedIndex === question.correct) {

        score++;

        selectedButton.classList.add(
            "correct-answer"
        );

        quizResult.innerHTML =
            "✓ RESPOSTA CORRETA! Muito bem!";

        quizResult.className =
            "correct";

        triggerCorrectEffect();

    } else {

        selectedButton.classList.add(
            "wrong-answer"
        );

        quizResult.innerHTML =
            "✕ RESPOSTA INCORRETA! A alternativa correta foi destacada.";

        quizResult.className =
            "wrong";

        triggerWrongEffect();
    }

    scoreCounter.textContent =
        `PONTOS: ${score}`;

    if (currentQuestion < questions.length - 1) {

        nextQuestion.hidden = false;

    } else {

        setTimeout(showFinalResult, 900);
    }
}

/* =========================================================
   PRÓXIMA PERGUNTA
========================================================= */

nextQuestion.addEventListener("click", () => {

    currentQuestion++;

    loadQuestion();

});

/* =========================================================
   EFEITO DE ACERTO
========================================================= */

function triggerCorrectEffect() {

    document.body.classList.remove(
        "quiz-wrong"
    );

    document.body.classList.add(
        "quiz-correct"
    );

    createParticles(
        "correct-particle"
    );

    setTimeout(() => {

        document.body.classList.remove(
            "quiz-correct"
        );

    }, 800);
}

/* =========================================================
   EFEITO DE ERRO
========================================================= */

function triggerWrongEffect() {

    document.body.classList.remove(
        "quiz-correct"
    );

    document.body.classList.add(
        "quiz-wrong"
    );

    createParticles(
        "wrong-particle"
    );

    setTimeout(() => {

        document.body.classList.remove(
            "quiz-wrong"
        );

    }, 800);
}

/* =========================================================
   PARTÍCULAS DE RESPOSTA
========================================================= */

function createParticles(className) {

    const amount = 25;

    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            `answer-particle ${className}`;

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        const x =
            (Math.random() - .5) * 700;

        const y =
            (Math.random() - .5) * 500;

        particle.style.setProperty(
            "--x",
            `${x}px`
        );

        particle.style.setProperty(
            "--y",
            `${y}px`
        );

        document.body.appendChild(
            particle
        );

        setTimeout(() => {
            particle.remove();
        }, 1100);
    }
}

/* =========================================================
   RESULTADO FINAL
========================================================= */

function showFinalResult() {

    quizOptions.style.display = "none";

    nextQuestion.hidden = true;

    quizResult.style.display = "none";

    quizFinal.hidden = false;

    finalScore.textContent =
        score;

    let message = "";

    const percentage =
        (score / questions.length) * 100;

    if (percentage === 100) {

        message =
            "PERFEITO! Você demonstrou excelente conhecimento sobre privacidade, consentimento e termos de uso.";

    } else if (percentage >= 80) {

        message =
            "EXCELENTE! Você está muito preparado para tomar decisões mais conscientes no ambiente digital.";

    } else if (percentage >= 60) {

        message =
            "BOM TRABALHO! Você já conhece vários conceitos, mas ainda pode melhorar seu conhecimento.";

    } else if (percentage >= 40) {

        message =
            "ATENÇÃO! Vale a pena revisar os dilemas digitais e tentar novamente.";

    } else {

        message =
            "CONTINUE TREINANDO! Conhecer seus direitos e entender os termos de uso é importante para sua cidadania digital.";
    }

    finalMessage.textContent =
        message;

    createParticles(
        "correct-particle"
    );
}

/* =========================================================
   REINICIAR QUIZ
========================================================= */

restartQuiz.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    answered = false;

    quizOptions.style.display =
        "flex";

    quizResult.style.display =
        "block";

    quizFinal.hidden = true;

    loadQuestion();

    document.getElementById("quiz")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
});

/* =========================================================
   INICIAR QUIZ
========================================================= */

loadQuestion();

/* =========================================================
   EFEITO DE APARECER AO ROLAR
========================================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );
                }

            });

        },
        {
            threshold: .15
        }
    );

document
    .querySelectorAll(
        ".card, .principle, .section-title, .solution-display"
    )
    .forEach(element => {

        observer.observe(element);

    });