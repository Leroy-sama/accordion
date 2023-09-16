const questions = document.querySelectorAll(".question");
const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".answer");

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        //remove all the answers so that the selected question can be answered
        answers.forEach((answer) => {
            answer.classList.remove('active')
        })
        //all the arrows to point downwards so that the selected question can point upwards
        arrows.forEach((arrow) => {
            arrow.classList.remove('active')
        })
        arrows[index].classList.toggle('active')
        answers[index].classList.toggle('active')
    })
})