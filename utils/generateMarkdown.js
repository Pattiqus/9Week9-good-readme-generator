// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenceType = data.licence;
  let badgeLicence = '';
  if(licenceType === 'GNU AGPLv3') {
    badgeLicence = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if(licenceType === 'GNU GPLv3') {
    badgeLicence = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if(licenceType === 'GNU LGPLv3') {
    badgeLicence = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (licenceType === 'Mozilla Public License 2.0') {
  badgeLicence = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (licenceType === 'Apache License 2.0') {
    badgeLicence = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (licenceType === 'MIT License') {
    badgeLicence = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (licenceType === 'Boost Software License 1.0') {
    badgeLicence = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (licenceType === 'The Unlicense') {
    badgeLicence = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  return badgeLicence;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenceType = data.licence;
  let linkLicence = '';
  if(licenceType === 'GNU AGPLv3') {
    linkLicence = `https://www.gnu.org/licenses/agpl-3.0.en.html`
  } else if(licenceType === 'GNU GPLv3') {
    linkLicence = `https://opensource.org/licenses/GPL-3.0`
  } else if(licenceType === 'GNU LGPLv3') {
    linkLicence = 'https://opensource.org/licenses/LGPL-3.0'
  } else if (licenceType === 'Mozilla Public License 2.0') {
  linkLicence = 'https://opensource.org/licenses/MPL-2.0'
  } else if (licenceType === 'Apache License 2.0') {
    linkLicence = 'https://opensource.org/licenses/Apache-2.0'
  } else if (licenceType === 'MIT License') {
    linkLicence = 'https://opensource.org/licenses/MIT'
  } else if (licenceType === 'Boost Software License 1.0') {
    linkLicence = 'https://opensource.org/licenses/bsl1.0.html'
  } else if (licenceType === 'The Unlicense') {
    linkLicence = 'https://unlicense.org/'
  }
  return linkLicence;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(badgeLicence);
  renderLicenseLink(linkLicence);
}

const licence = renderLicenseSection.value;
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
This project is licenced under: ${licence}.

# Contributing
Contributors: ${data.contributing}
# Tests
The following instructions should be followed for testing of this application: ${data.tests}
# Questions
If you have any qestions regrading the repository or the project please contact: GitHub: ${data.questionsGithub} Email: ${data.questionsEmail}
`;
}

module.exports = generateMarkdown;
