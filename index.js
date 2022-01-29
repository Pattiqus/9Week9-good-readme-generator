// # Require: These packages in order to run the application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
// # Array: questions to prompt user for creation generateMarkdown
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
        type: 'list',
        name: 'license',
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
/**
 * Function: writeToFile
 * Description: writes information obtained from prompts (inquirer) to new README
 * @param {*} fileName 
 * @param {*} data 
 */
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log(fileName);
        console.log(data);
        (err) => err ? console.log(err) : console.log('Success!')
    })
};

/**
 * Function: init
 * Description: Initializes the application 
 */
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", generateMarkdown(data))
        });
}

// # Call: init
init();
