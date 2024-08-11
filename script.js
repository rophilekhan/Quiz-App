const questions = [
    {
        question: "What is the capital city of Pakistan?",
        answers: [
            { text: "Karachi", correct: false},
            { text: "Lahore", correct: false},
            { text: "Islamabad", correct: true},
            { text: "Rawalpindi", correct: false},
        ]
    },{
        question: "Who is known as the Father of the Nation in Pakistan?",
        answers: [
            { text: " Allama Iqbal", correct: false},
            { text: "Liaquat Ali Khan", correct: false},
            { text: "Benazir Bhutto", correct: false},
            { text: "Muhammad Ali Jinnah", correct: true},
        ]
    },{
        question: "What is the national language of Pakistan?",
        answers: [
            { text: "Urdu", correct: true},
            { text: "Punjabi", correct: false},
            { text: "English", correct: false},
            { text: "Sindhi", correct: false},
        ]
    },{
        question: " In which year did Pakistan gain independence from British rule??",
        answers: [
            { text: "1945", correct: false},
            { text: "1947", correct: true},
            { text: "1946", correct: false},
            { text: "1948", correct: false},
        ]
    },{
        question: "Who was the first Prime Minister of Pakistan?",
        answers: [
            { text: "Liaquat Ali Khan", correct: true},
            { text: "Zulfikar Ali Bhutto", correct: false},
            { text: "Imran Khsn", correct: false},
            { text: "Pervez Musharraf", correct: false},
        ]
    },{
        question: "What was the name of the movement that led to the creation of Pakistan?",
        answers: [
            { text: "Khilafat Movement", correct: false},
            { text: "Pakistan Movement", correct: true},
            { text: "Quit India Movement", correct: false},
            { text: "Freedom Movement", correct: false},
        ]
    },{
        question: "What is the highest peak in Pakistan?",
        answers: [
            { text: "Nanga Parbat", correct: false},
            { text: "K2", correct: true},
            { text: "Broad Peak", correct: false},
            { text: "Gasherbrum", correct: false},
        ]
    },{
        question: "Which river is known as the lifeline of Pakistan?",
        answers: [
            { text: "Indus River", correct: false},
            { text: "Chenab River", correct: false},
            { text: "Jhelum River", correct: false},
            { text: "Ravi River", correct: true},
        ]
    },{
        question: "Which Pakistani city is known as the City of Lights?",
        answers: [
            { text: "Hyderabad", correct: false},
            { text: "Karachi", correct: true},
            { text: "lahore", correct: false},
            { text: "Rawal Pindi", correct: false},
        ]
    },{
        question: "Which province is the largest by area in Pakistan?",
        answers: [
            { text: "Punjab", correct: false},
            { text: "Sindh", correct: false},
            { text: "Khyber Pakhtunkhwa", correct: false},
            { text: "Balochistan", correct: true},
        ]
    },{
        question: "What is the traditional dress worn by men in Pakistan?",
        answers: [
            { text: "Sherwani", correct: false},
            { text: "Shalwar Kameez", correct: true},
            { text: "Dhoti", correct: false},
            { text: "Kurta", correct: false},
        ]
    },{
        question: "What is the popular Pakistani dish made from rice, lentils, and spices?",
        answers: [
            { text: "Biryani", correct: true},
            { text: "Nihari", correct: false},
            { text: "Haleem", correct: false},
            { text: "Pulao", correct: false},
        ]
    },{
        question: "What is the name of the Pakistan-based organization that is known for its role in disaster management and humanitarian relief?",
        answers: [
            { text: "Edhi Foundation", correct: true},
            { text: "JDC Foundation", correct: false},
            { text: "SOS Children's Village", correct: false},
            { text: "Chippa Foudation", correct: false},
        ]
    },{
        question: "In which city was the recent major international conference on Pakistan’s economic development held?",
        answers: [
            { text: "Islamabad", correct: true},
            { text: "Karachi", correct: false},
            { text: "Lahore", correct: false},
            { text: "Peshawar", correct: false},
        ]
    },{
        question: "Who is the current Prime Minister of Pakistan?",
        answers: [
            { text: "Shehbaz Sharif", correct: true},
            { text: "Imran Khan", correct: false},
            { text: "Asad Umar", correct: false},
            { text: "Bilawal Bhutto Zardari", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button-container")
const nextButton = document.getElementById("nextBtn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // currentQuestion.answers.forEach(answer => {
    //     const button = document.createElement("button");
    //     button.innerHTML = answer.text;
    //     button.classList.add("btn");
    //     answerButton.appendChild(button)
    //   });

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })

    }


    function resetState(){
        nextButton.style.display = "none"
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild)
        }
    }
    function selectAnswer(e){
        const selectBtn = e.target
        const isCorrect = selectBtn.dataset.correct === "true"
        if(isCorrect){
            selectBtn.classList.add("correct")
            score++
        }else{
            selectBtn.classList.add("incorrect")
        }
        Array.from(answerButtons.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct")
            }
            button.disabled = "true"
        })
        nextButton.style.display = "block"
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
        nextButton.innerHTML = "Play Again"
        nextButton.style.display = "block"
    }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
    })

startQuiz();