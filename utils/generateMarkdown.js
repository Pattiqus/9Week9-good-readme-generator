// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  console.log(licenseType);
  let badgeLicense = '';
  if(licenseType === 'GNU AGPLv3') {
    badgeLicense = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if(licenseType === 'GNU GPLv3') {
    badgeLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if(licenseType === 'GNU LGPLv3') {
    badgeLicense = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (licenseType === 'Mozilla Public License 2.0') {
  badgeLicense = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (licenseType === 'Apache License 2.0') {
    badgeLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (licenseType === 'MIT License') {
    badgeLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (licenseType === 'Boost Software License 1.0') {
    badgeLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (licenseType === 'The Unlicense') {
    badgeLicense = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  console.log(badgeLicense);
  return badgeLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license;
  let linkLicense = '';
  if(licenseType === 'GNU AGPLv3') {
    linkLicense = `https://www.gnu.org/licenses/agpl-3.0.en.html`
  } else if(licenseType === 'GNU GPLv3') {
    linkLicense = `https://opensource.org/licenses/GPL-3.0`
  } else if(licenseType === 'GNU LGPLv3') {
    linkLicense = 'https://opensource.org/licenses/LGPL-3.0'
  } else if (licenseType === 'Mozilla Public License 2.0') {
  linkLicense = 'https://opensource.org/licenses/MPL-2.0'
  } else if (licenseType === 'Apache License 2.0') {
    linkLicense = 'https://opensource.org/licenses/Apache-2.0'
  } else if (licenseType === 'MIT License') {
    linkLicense = 'https://opensource.org/licenses/MIT'
  } else if (licenseType === 'Boost Software License 1.0') {
    linkLicense = 'https://opensource.org/licenses/bsl1.0.html'
  } else if (licenseType === 'The Unlicense') {
    linkLicense = 'https://unlicense.org/'
  }
  return linkLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   renderLicenseBadge(badgeLicense);
//   renderLicenseLink(linkLicense);
// }

// const license = renderLicenseSection.value;
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
# Description
${data.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [license](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#tests)
# Installation
The following dependencies are necessary to run this application: ${data.installation}
# Usage
In order to use this application please follow these instructions ${data.usage}
# License
This project is licensed under: ${renderLicenseLink(data.license)}.

# Contributing
Contributors: ${data.contributing}
# Tests
The following instructions should be followed for testing of this application: ${data.tests}
# Questions
If you have any qestions regrading the repository or the project please contact: GitHub: ${data.questionsGithub} Email: ${data.questionsEmail}
`;
}

module.exports = generateMarkdown;
