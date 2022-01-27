// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = 
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project'

        },
        {
            type: 'input',
            name: 'description-motivation',
            message: 'What was your motivation for this project?'
        },
        {
            type: 'input',
            name: 'description-why',
            message: 'Why did you create this project?'
        },
        {
            type: 'input',
            name: 'description-problem',
            message: 'What problem does this project solve?'
        },
        {
            type: 'input',
            name: 'description-problem',
            message: 'What problem does this project solve?'
        },

    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
