const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quizContainer = document.getElementById("quiz")
const answerRadios = document.querySelectorAll(".answer")
const questionText = document.getElementById("question")
const answerLabelA = document.getElementById("a-text")
const answerLabelB = document.getElementById("b-text")
const answerLabelC = document.getElementById("c-text")
const answerLabelD = document.getElementById("d-text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

submitBtn.addEventListener("click", () => {
    const answer = getSelectedAnswer()
    if (!answer) return
    if (answer === quizData[currentQuiz].correct) score++

    currentQuiz++
    if (currentQuiz < quizData.length) loadQuiz()
    else quizContainer.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
    `
})

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionText.innerText = currentQuizData.question
    answerLabelA.innerHTML = currentQuizData.a
    answerLabelB.innerHTML = currentQuizData.b
    answerLabelC.innerHTML = currentQuizData.c
    answerLabelD.innerHTML = currentQuizData.d
}

function deselectAnswers() {
    answerRadios.forEach(radio => radio.checked = false)
}

function getSelectedAnswer() {
    let answer = null
    answerRadios.forEach(radio => {
        if (!radio.checked) return
        answer = radio.id
    })
    return answer
}