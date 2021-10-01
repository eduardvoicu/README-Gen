// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/npm/l/readme-gen?style=for-the-badge)](https://opensource.org/licenses/MIT)'
    } else if (license === 'ISC'){
      return '[![License: ISC]](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    } else (license === 'N/A')
      return 'No License'
    }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `Copyright 2021
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
 else if (license === 'ISC'){
  return `Copyright 2021
  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
} else (license === 'N/A')
  return 'No license information.'
}


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
  - ${renderLicenseLink(answers.license)}

  ## Questions
  - GitHub: <a href="https://github.com/${answers.GitHub}">My GitHub!</a><br>
  - E-mail: ${answers.email}<br>
  **Thank you for checking out this application**

`;
};

module.exports = generateMarkdown;
