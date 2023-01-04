// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  { 
    if (license !== 'none') {
      return `[![badge](https://img.shields.io/badge/license-${license}-blueviolet)
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
    This project is licensed by ${license}.${renderLicenseLink(license)}
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
 
  
  ## Table of Contents(#table-of-contents) 
  
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
  
  ${data.contribute}
  
  ## [Tests](#table-of-contents)

${data.tests}

  ## [Questions](#table-of-contents)
  
  
Contact me through [e-mail](mailto:${data.email})

Connect with me through [GitHub.](https://www.github.com/${data.username})
  `;
}

module.exports = generateMarkdown;
