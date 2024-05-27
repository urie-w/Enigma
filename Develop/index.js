// TODO: Include packages needed for this application
const readMe = require('readMe');

// Example usage
readMe.get('./enigma')
    .then(response => {
        console.log('Questions received:', response.questions);
    });
// TODO: Create an array of questions for user input
const questions = [
    "What's the motivation?"
    "Why did you choose this project?",
    "What problems did you solve?",
    "What did you learn?",
    "Issues you ran into?",
    "How did you resolve challenges?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    this.questions.pop();
}

// TODO: Create a function to initialize app
function init() {
    console.log('Initalize App');
}

// Function call to initialize app
init();
