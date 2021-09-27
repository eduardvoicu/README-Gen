// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT]](https://img.shields.io/npm/l/readme-gen?style=for-the-badge)'
    } else if (license === 'ISC'){
      return '[![License: ISC]('
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `${renderLicenseBadge(answers.license)}

  # ${answers.title}

  ## Table of Contents
  1. [Description](#Description)
  2. [Installation](#Installation-Instructions)
  3. [Usage](#Usage)
  4. [Contribution Guidelines](#Contribution-Guidelines)
  5. [Test Instructions](#Test-Instructions)
  6. [License Policy](#License-Policy)
  7. [Questions](#Questions)

  ## Description
  - ${answers.description}

  ## Installation Instructions
  - ${answers.installInstruction}

  ## Usage
  - ${answers.useInfo}

  ## Contribution Guidelines
  - ${answers.contribution}

  ## Test Instructions
  - ${answers.testInstruction}

  ## License Policy
  - ${answers.license}

  ## Questions
  - GitHub: <a href="https://github.com/${answers.GitHub}">My GitHub!</a><br>
  - E-mail: ${answers.email}<br>
  **Thank you for checking out this application**

`;
};

module.exports = generateMarkdown;
