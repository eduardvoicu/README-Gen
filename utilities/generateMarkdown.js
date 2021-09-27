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
function generateMarkdown(answers) {
  return `${renderLicenseBadge(answers.license)}

  # ${answers.title}

  ## Table of Contents
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contribution Guidelines](#Contribution-Guidelines)
  5. [Test Instructions](#Test-Instructions)
  6. [License Policy](#License-Policy)
  7. [Questions](#Questions)

  ## Description
  - ${answers.description}

`;
}

module.exports = generateMarkdown;
