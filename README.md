# Professional README Generator

## Description

This is an application that automatically generates a README.md file after answering a set of questions in the terminal.


    User Story

        AS A developer
        I WANT a README generator
        SO THAT I can quickly create a professional README for a new project

    Acceptance Criteria

        GIVEN a command-line application that accepts user input
        WHEN I am prompted for information about my application repository
        THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
        WHEN I enter my project title
        THEN this is displayed as the title of the README
        WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        WHEN I choose a license for my application from a list of options
        THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
        WHEN I enter my GitHub username
        THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        WHEN I enter my email address
        THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        WHEN I click on the links in the Table of Contents
        THEN I am taken to the corresponding section of the README

        
## Installation

* 1) clone the repository
* 2) run the command 'npm install'

## Usage

     1)run the command 'node index'
     2)answer the question prompt until the "Readme file has been created" alert is shown

## Demo 

[step-by-step-video](readme-generator-functionality-sr.webm)


## Credits

 used https://choosealicense.com/ for the licenses \n https://shields.io/ is used for the badges and  used the  npm package inquirer 

## License
<br>

## Contribute

No more contributions are needed for this project.
<br>

## Tests

To run a test run the following command in your terminal:
    node index