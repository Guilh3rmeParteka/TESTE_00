const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const numeroPergunta = document.querySelector("#numero-pergunta");
const porcentagem = document.querySelector("#porcentagem");
const barraPreenchida = document.querySelector(".barra-preenchida");


const perguntas = [

    {
        enunciado: "Qual medida você considera mais importante para melhorar a saúde pública da sua comunidade?",

        alternativas: [

            {
                texto: "Investir em campanhas de vacinação, prevenção de doenças e educação em saúde. Acredito que prevenir problemas de saúde é melhor do que esperar as pessoas adoecerem para procurar atendimento.",

                afirmacao: [
                    "Uma pessoa preocupada com a prevenção busca se antecipar aos problemas e adota atitudes que protegem sua saúde e seu bem-estar.",
                    "Prevenir é cuidar do futuro: a pessoa atenta à prevenção toma decisões conscientes para reduzir riscos e evitar possíveis complicações."
                ]
            },

            {
                texto: "Ampliar e melhorar os postos de saúde e hospitais, reduzindo o tempo de espera e garantindo atendimento de qualidade para todos. Muitas pessoas precisam de atendimento rápido e não conseguem acesso quando necessitam.",

                afirmacao: [
                    "A pessoa preocupada com o acesso ao atendimento busca serviços de saúde de forma rápida, acessível e de qualidade.",
                    "Essa pessoa valoriza a facilidade para conseguir consultas, exames e orientações quando precisa de cuidados de saúde."
                ]
            }

        ]
    },


    {
        enunciado: "Qual deveria ser a principal prioridade do governo para melhorar a saúde pública?",

        alternativas: [

            {
                texto: "Investir mais em campanhas de prevenção e educação em saúde nas escolas, para que os jovens aprendam desde cedo sobre alimentação saudável, vacinação e prevenção de doenças.",

                afirmacao: [
                    "Um jovem estudante busca adquirir novos conhecimentos e desenvolver habilidades para construir um futuro melhor.",
                    "O jovem estudante se dedica aos estudos, enfrenta desafios e aproveita as oportunidades para crescer pessoal e academicamente."
                ]
            },

            {
                texto: "Melhorar o atendimento nos postos de saúde e hospitais, diminuindo as filas e garantindo consultas, exames e medicamentos para quem precisa, principalmente para os idosos.",

                afirmacao: [
                    "A pessoa idosa valoriza a qualidade de vida e busca manter hábitos que contribuam para sua saúde e bem-estar.",
                    "A pessoa idosa possui experiências e conhecimentos adquiridos ao longo da vida, contribuindo para a família e para a comunidade."
                ]
            }

        ]
    },


    {
        enunciado: "Na sua opinião, qual é o maior problema da saúde pública atualmente?",

        alternativas: [

            {
                texto: "Para mim, o principal problema é a demora para conseguir consultas e exames. Como mãe, preciso de um atendimento rápido quando meus filhos ficam doentes.",

                afirmacao: [
                    "A mãe de família se preocupa com o bem-estar e a segurança de seus familiares, buscando sempre prevenir problemas.",
                    "A mãe de família procura cuidar da saúde, da educação e das necessidades de todos, promovendo um ambiente de apoio e proteção."
                ]
            },

            {
                texto: "Na minha visão, o maior problema é a falta de profissionais e de recursos nos serviços públicos. Isso aumenta a sobrecarga dos trabalhadores e prejudica a qualidade do atendimento.",

                afirmacao: [
                    "O profissional da saúde busca promover a prevenção e o cuidado, orientando as pessoas para uma vida mais saudável.",
                    "O profissional da saúde atua com responsabilidade e atenção, contribuindo para o bem-estar e a qualidade de vida da população."
                ]
            }

        ]
    }

];


let atual = 0;

let historiaFinal = "";


/* Mostra a pergunta atual */

function mostraPergunta() {

    if (atual >= perguntas.length) {

        mostraResultado();

        return;
    }


    const perguntaAtual = perguntas[atual];


    caixaPerguntas.textContent =
        perguntaAtual.enunciado;


    caixaAlternativas.innerHTML = "";


    atualizaProgresso();


    mostraAlternativas();
}


/* Cria os botões das alternativas */

function mostraAlternativas() {

    const perguntaAtual = perguntas[atual];


    perguntaAtual.alternativas.forEach((alternativa) => {

        const botaoAlternativa =
            document.createElement("button");


        botaoAlternativa.textContent =
            alternativa.texto;


        botaoAlternativa.addEventListener(
            "click",
            () => respostaSelecionada(alternativa)
        );


        caixaAlternativas.appendChild(
            botaoAlternativa
        );

    });

}


/* Quando o usuário escolhe uma resposta */

function respostaSelecionada(opcaoSelecionada) {

    const afirmacoes =
        opcaoSelecionada.afirmacao;


    historiaFinal += `
        <p>${afirmacoes[0]}</p>
        <p>${afirmacoes[1]}</p>
    `;


    atual++;


    mostraPergunta();
}


/* Atualiza a barra de progresso */

function atualizaProgresso() {

    const total =
        perguntas.length;


    const numeroAtual =
        atual + 1;


    const progresso =
        (atual / total) * 100;


    numeroPergunta.textContent =
        `Pergunta ${numeroAtual} de ${total}`;


    porcentagem.textContent =
        `${Math.round(progresso)}%`;


    barraPreenchida.style.width =
        `${progresso}%`;
}


/* Mostra o resultado */

function mostraResultado() {

    caixaPerguntas.style.display =
        "none";


    caixaAlternativas.style.display =
        "none";


    document.querySelector(".progresso").style.display =
        "none";


    caixaResultado.style.display =
        "block";


    textoResultado.innerHTML =
        historiaFinal;


    porcentagem.textContent =
        "100%";


    barraPreenchida.style.width =
        "100%";
}


/* Reinicia o quiz */

function reiniciarQuiz() {

    atual = 0;

    historiaFinal = "";


    caixaResultado.style.display =
        "none";


    caixaPerguntas.style.display =
        "block";


    caixaAlternativas.style.display =
        "grid";


    document.querySelector(".progresso").style.display =
        "block";


    mostraPergunta();
}


/* Inicia o quiz */

mostraPergunta();
