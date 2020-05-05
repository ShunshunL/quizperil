
// temp variables for mockup
// REMOVE THESE IN PRODUCTION
// let user_id = 1
// let num_right = 6
// let num_wrong = 7
// let total = 13

// Hide gameplay elements
let quizQuestion = document.getElementById('quiz_question')
quizQuestion.classList.toggle('hidden')
let question = document.getElementById('question')
let answers = document.getElementById('answers')

// Create result elements
let resultsContainer = document.createElement('div')
resultsContainer.id = "results"


let rightContainer = document.createElement('p')
rightContainer.id = "number_right"
rightContainer.innerText = `Correct: ${num_right}`

let wrongContainer = document.createElement('p')
wrongContainer.id = "number_wrong"
wrongContainer.innerText = `Incorrect: ${num_wrong}`

let totalContainer = document.createElement('p')
totalContainer.id = "total"
totalContainer.innerText = `Total: ${total}`

resultsContainer.append(rightContainer, wrongContainer, totalContainer)

document.body.appendChild(resultsContainer)


// Percentage? Snarky comments?

// Button to start new quiz
let quizBtn = document.createElement('button')
quizBtn.id = "quiz_button"
quizBtn.innerText = "Start a new quiz!"
document.body.appendChild(quizBtn)

quizBtn.addEventListener('click', function() {
    // toggle results off
    resultsContainer.classList.toggle('hidden')
    
    // toggle button off
    quizBtn.classList.toggle('hidden')

    // toggle quiz form on
    quizQuestion.classList.toggle('hidden')
    question.classList.toggle('hidden')
    answers.classList.toggle('hidden')

    // fetch post to Quiz to create new quiz?
    fetch('http://localhost:3000/quizzes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify("quiz", quiz_id, "user_id", user_id)
    })
})



