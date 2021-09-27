// TODO: Include packages needed for this application
var inquirer =  require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    "type": "input",
    "name": "title",
    "message": "What is your project title?",
},
{
    "type": "input",
    "name": "description",
    "message": "What is your project about?",
},
{
    "type": "input",
    "name": "installInstruction",
    "message": "Provide installation instructions for your application.",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
