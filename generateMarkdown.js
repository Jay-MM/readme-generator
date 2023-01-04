// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  { 
    if (license !== 'none') {
      return `
    [badge](https://img.shields.io/badge/license-${license}-blueviolet)
      `;
    } else {
      return ' ';
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== 'none') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
    ## [License](#license)
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
   
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## [Description](table-of-conents)
  
  ${data.description}
 
  
  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contribute](#contribute)
  * 
  
  
  ## [Installation](#table-of-contents)

  ${data.installation}
  
  ## [Usage](#table-of-contents)

  ${data.usage}
  
  ## [Credits](#table-of-contents)
  
  ${data.credits}
  
  ## [License](#table-of-contents)
  
  ${renderLicenseSection(data.license)}
  
  ## [Contribute](#table-of-contents)
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  

`;
}

module.exports = generateMarkdown;
