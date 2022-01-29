// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a detailed description of your project'
    },
    // {
    //     type: 'input',
    //     name: 'table of contents',
    //     message: 'Table of Contents'
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'What else is the user required to install to run this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please leave some short & detailed instructions on how the user can use this application.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What commands are needed in order to test this application'
    },
    {
        type: 'checkbox',
        name: 'licence',
        message: 'Which Licences are being used for this application?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'questionsGithub',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'What is your email?'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // let fileName = `README.md`;
    fs.writeFile(fileName, data, (err) => {
        console.log(fileName);
        console.log(data);
        (err) => err ? console.log(err) : console.log('Success!')
    })
};

// TODO: Create a function to initialize application
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", generateMarkdown(data))
        });
}

// Function call to initialize app
init();
