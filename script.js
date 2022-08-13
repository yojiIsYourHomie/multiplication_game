const questionElement = document.getElementById('header')
const formElement = document.getElementById('form')
const inputElement = document.getElementById('input-window')
const scoreElement = document.getElementById('score')

const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;
const correctAnswer = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));

if(!score) {
 score = 0;
}






questionElement.innerText = `What is ${num1} multiplied by ${num2}?`
scoreElement.innerText = `score: ${score}`

formElement.addEventListener('submit', () => {
 const userAnswer = +inputElement.value;
 if(userAnswer === correctAnswer) {
  score++
  updateLocalStorage()
 } else {
  score--
  updateLocalStorage()
 }
});

function updateLocalStorage() {
 localStorage.setItem("score", JSON.stringify(score))
}
