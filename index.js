// packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown'
// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project. If you need help choosing a license, refer to https://choosealicense.com/.',
        choices: ['mit' ,'isc' , 'apache-2.0', 'gpl-3.0', 'none'],
    },
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('README.md saved!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(answers){
        console.log(answers)
        writeToFile(`${answers.title}.md`, answers)
    });
    
}

// Function call to initialize app
init();
