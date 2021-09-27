// TODO: Include packages needed for this application
const { error } = require("console");
const { fstat } = require("fs");
var inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project about?",
  },
  {
    type: "input",
    name: "installInstruction",
    message: "Provide installation instructions for your application.",
  },
  {
    type: "input",
    name: "useInfo",
    message: "Provide information of application usage.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Provide contribution guidelines in regards to your application.",
  },
  {
    type: "input",
    name: "testInstruction",
    message: "Provide test instructions for your application.",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license for your application.",
    choices: ["ISC", "MIT", "N/A"],
  },
  {
    type: "input",
    name: "GitHub",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error)
            throw error;
        console.log("Data created in README.")
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
