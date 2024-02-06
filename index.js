// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What dependencies need to be installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What will this application be used for?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for the application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'If any, how do tests need to be initiated?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license used for your application, if one.',
        choices: ['MIT', 'Apache 2.0', 'GPL v3', 'Mozilla', 'BSD-2', 'BSD-3', 'Boost', 'Creative Commons Zero', 'Eclipse', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const readMeContent = generateMarkdown(data);
            writeToFile('./assets/generated/README.md', readMeContent);
        });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('README.md successfully created!')
    );
}

// Function call to initialize app
init();
