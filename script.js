'use strict';

let result = 0
let count = 0
let score = 0
let high_score = 0
const guess = document.querySelector('.guess')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const t_score = document.querySelector('.score')
const again = document.querySelector('.again')
const between = document.querySelector('.between')
const check = document.querySelector('.check')
const highscore = document.querySelector('.highscore')

function randomResult() {
    result = Math.floor(Math.random() *100)
    between.textContent = `Between 0 and 99`
}
randomResult()
check.addEventListener('click', () => {
    if (count > 20) {
        return false
    }
    else {
        if (guess.value == "") {
            message.textContent = 'Insert number'
        }
        else if (guess.value < result) {
            message.textContent = 'Higher'
            count += 1
        }
        else if (guess.value > result) {
            message.textContent = 'Smaller'
            count += 1
        }
        else {
            message.textContent = 'Congratulation'
            score = (20-count) *10
            t_score.textContent = `${score}`
            number.textContent = `${result}`

        }
    }
})
again.addEventListener('click', () => {
    if(high_score < score) {
        high_score = score
    }
    highscore.textContent = `${high_score}`
    message.textContent = "Start guessing..."
    guess.value = ""
    number.textContent = "?"
    score = 0
    t_score.textContent = `${score}`
    randomResult()
})











