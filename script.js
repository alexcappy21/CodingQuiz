

var askQuestion= document.getElementById("#question");
askQuestion = questions.question[];
var questions = [
    {
        question: "Where is the JavaScript placed inside an HTML document or page?",
        choices: ["In the <body> and <head> sections.", "In the <meta> section.", "In the <title> section.", "In the <footer> section."],
        answer: "In the <body> and <head> sections."

    }, {
        question: "What kind of statement is used to execute actions based on a trigger or condition?",
        choices: ["Boolean Variable", "Conditional Statement", "Fired Event", "Regular Expression"],
        answer: "Conditional Statement"

    }, {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        choices: ["Functions", "Strings", "Variables", "Arrays"],
        answer: "Arrays"

    }, {
        question: "This is what you call the guide that defines coding conventions for all projects.",
        choices: ["Coding dictionary", "Style guide", "Main textbook", "Developer's reference"],
        answer: "Style guide"

    }, {
        question: "What is the name of the object that allows you to perform mathematical tasks with the interpreter?",
        choices: ["Solve", "Number", "Count", "Math"],
        answer: "Math"

    }
]

var questionIndex = 0


function checkAnswer(event){
    document.getElementById("answer-button").click();
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