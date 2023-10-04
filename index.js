// inquirer package
const inquirer = require('inquirer');
// file system module
const fs = require('fs');
// file path to include the generateMarkdown.js module
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do users install your application?',
    },
    {
       type: 'input',
       name: 'usage',
       message: 'How can users utilize your application?', 
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions to your application?',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Please choose a license to apply to your application:',
        choices: ['MIT License', 'Apache License 2.0', 'Artistic License 2.0',],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

// function to write to the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err): console.log(`Successfully wrote to ${fileName}`)
    });
}

// function to initalize the app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const readmeContent = generateMarkdown(response);
        writeToFile('README.md', readmeContent);
        fs.writeFile('README.md', readmeContent, (err) => err ? console.error(err): console.log('The README file has been sucessfully created!')
        );
    });
    }

// function call to initialize app
init();
