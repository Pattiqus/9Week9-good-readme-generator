// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = 
inquirer
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'Please enter the title of your project.'

        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please enter a detailed description of your project'
        },
        {
            type: 'input',
            name: 'Table of contents',
            message: 'Table of Contents'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What else is the user required to install to run this application?'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please leave some short & detailed instructions on how the user can use this application.'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please leave some instructions on how the user can use this application'
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What commands are needed in order to test this application'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What commands are needed in order to test this application'
        },
        {
            type: 'input',
            name: 'Licence',
            message: 'Which Licences are being used for this application?'
        },
        {
            type: 'input',
            name: 'Questions-github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'Questions-email',
            message: 'What is your email?'
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize application
function init() {}

// Function call to initialize app
init();
