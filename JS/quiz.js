/* 
    This is an IIFE - Immediately Invoked Function Expression
    IIFEs run as soon as they are defined. IIFEs are commonly used to keep variable/functions outside of the global mutiple scripts
*/

//This variable exist in the global scope, which means it's less secure and can be accessed by anything
var global;

(function () {
    //Because this variable is inside of an IIFE, it is not in the global scope
    var variable = 10;

    //Make reference to our elements that we're going to interact with
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitContainer = document.getElementById("submit");
    var resetContainer = document.getElementById("reset");

    var myQuestions = [];

    //What does a quiz question consists of?
    //Question Text, Answer Choices, Correct Answers


    var question1 = {
        question: "What color is the sky",
        answers: {
            a: "Blue",
            b: "Brown",
            c: "Green"
        },
        correctAnswer: "a"
    }

    console.log(question1.question); //Get the question text
    console.log(question1.answers.b); // Get answer b


    var question2 = {
        question: "What color is the grass",
        answers: {
            a: "Brown",
            b: "Yellow",
            c: "Green"
        },
        correctAnswer: "c"
    }

    console.log(question2.question);
    console.log(question2.answers.a);

    var question3 = {
        question: "What is the capital of Peru",
        answers: {
            a: "Lima",
            b: "Cusco",
            c: "No idea"
        }
    }

    //Add the question objects to our array of questions
    myQuestions.push(question1, question2, question3);

    //Function to build a quiz that goes through our question objects and generates HTML for each question
    function buildQuiz() {

    }

    //Function to show the results of the quiz
    function showResults() {

    }

    //Function to reset the quiz
    function resetQuiz() {
        
    }

})();