

var questions = [
    {
        question: "question",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option2"

    }, {
        question: "question",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option2"

    }, {
        question: "question",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option2"

    }, {
        question: "question",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option2"

    }, {
        question: "question",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option2"

    }
]

var questionIndex = 0

function checkAnswer(event){
    var userChoice = event.target.innerText
    if (userChoice === questions[questionIndex].answer){
        alert("correct");
    } else{
        alert("wrong");
    }
    questionIndex ++;
    if(questionIndex < questions.length){
        //call get question function
    } else{
        //call end game function
    }
}