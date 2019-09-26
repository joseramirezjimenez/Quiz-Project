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
    var  resultsContainer = document.getElementById("results");
    var submitContainer = document.getElementById("submit");
    var resetContainer = document.getElementById("reset");

    var myQuestions = [];

    //What does a quiz question consists of?
    //Question Text, Answer Choices, Correct Answers


    var question1 = {
        question: "What color is the sky?",
        answers: {
            a: "Blue",
            b: "Brown",
            c: "Green"
        },
        correctAnswer: "a"
    }

    //console.log(question1.question); //Get the question text
    //console.log(question1.answers.b); // Get answer b


    var question2 = {
        question: "What color is the grass?",
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
        question: "What is the capital of Peru?",
        answers: {
            a: "Lima",
            b: "Cusco",
            c: "No idea"
        },
        correctAnswer: "a"
    }

    //Add the question objects to our array of questions
    myQuestions.push(question1, question2, question3);

    //Function to build a quiz that goes through our question objects and generates HTML for each question
    function buildQuiz() {
        //We need to go through each of our question objects and use them to build out the HTML to show a question

        for (var i = 0; i < myQuestions.length; i++) {
            //Create a display for the question text
            //Creating a new dic called questionDiv that will hold information about a single question
            var questionDiv = document.createElement("div");
            //Get the question text from the question we are looking at with this iteration of the loop
            questionDiv.innerText = myQuestions[i].question;

            //Display the answer choices (and take userinput to select an answer)

            //Create a dic to hold the question answers
            var answersDiv = document.createElement("div");
            answersDiv.classList.add("answers");

            /* A for-in loop is used to go through the properties of an object */
            for (letter in myQuestions[i].answers) {
                //Create the label for the radio button input
                var label = document.createElement("label");

                //Create a radio button for each answer for this question
                var input = document.createElement("input");
                //Configure the input element
                input.type = "radio";
                input.name = "question" + i;
                input.value = letter;

                //Add the input to our label
                label.appendChild(input);

                //Create some text from the current letter we're looking at and the corresponding anser for that letter
                var labelText = document.createTextNode(`${letter} : ${myQuestions[i].answers[letter]}`);

                //Add the text tot the label
                label.appendChild(labelText);

                //Add the label to the answer div
                answersDiv.appendChild(label);
            }

            //Once all the answers are added , add the answerDiv to the questionDiv
            questionDiv.appendChild(answersDiv);

            //Add the questionDiv to the quizContainer
            quizContainer.appendChild(questionDiv);
        }
    }

    buildQuiz()

    //Function to show the results of the quiz
    function showResults() {
        //Get all the answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll(".answers"); //Ths will basically give us back an array containing everything in the quizContainer with the class "answers"

        //Variable to keep track of how many they get right
        var numCorrect = 0;

        for (var i = 0; i < answerContainers.length; i++) {
            //Get the current answer container we're looking
            var answerContainer = answerContainers[i];

            //String to find which is checked for the current question
            var selector = `input[name=question${i}]:checked`;

            //Try to find the selected answer in the container and print out the value
            var userAnswer = 
            (answerContainer.querySelector(selector) || {}).value; //If it can't find a selected input for a question, querySelector will give back null,

            if (userAnswer === myQuestions[i].correctAnswer) {
                //They got it right!
                //Add 1 to numCorrect
                numCorrect++;
                answerContainer.style.color = "green";
            } else {
                //They got it wrong!
                answerContainer.style.color = "red";
            }
        }

        //Add text to the results container to show how many they got it right
        resetContainer.innerText = "You got " + numCorrect + "out of " + myQuestions.length;
    }

    //Call the showResults function when the submit button is clicked
    submitContainer.addEventListener("click", showResults);

    //Function to reset the quiz
    function resetQuiz() {
        //Clear out what's in the results container
        resetContainer.innerText = "";
        //Clear out the quiz container
        quizContainer.innerHTML = "",
        //Rebuild the quiz
        buildQuiz();
    }

    //Call the resetQuiz function when the reset button is clicked
    resetContainer.addEventListener("click", resetQuiz);

})();