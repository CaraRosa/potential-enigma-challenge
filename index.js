// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
        choices: ['MIT License', 'Microsoft Public License', 'Academic Free License', 'Artistic License', 'Eclipse Public License'],
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

inquirer.prompt(questions)
    .then((response) => {
        const readmeContent = generateReadme(response);
        fs.writeFile('README.md', readmeContent, (err) => err ? console.log(err): console.log('The README file has been sucessfully created!')
        );
    });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
