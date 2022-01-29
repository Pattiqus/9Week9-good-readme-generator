// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
https://github.com/${data.questionsGithub}/${data.title}
# Description
${data.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#tests)
# Installation
The following dependencies are necessary to run this application: ${data.installation}
# Usage
In order to use this application please follow these instructions ${data.usage}
# Licence
This project is licenced under ${data.licence}.
![LICENCE](xxxxxxxxxxxx)
# Contributing
Contributors: ${data.contributing}
# Tests
The following instructions should be followed for testing of this application: ${data.tests}
# Questions
If you have any qestions regrading the repository or the project please contact: GitHub: ${data.questionsGithub} Email: ${data.questionsEmail}
`;
}

module.exports = generateMarkdown;
