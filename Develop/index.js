// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    { message: 'What is your Git Hub username?', name: 'gitHub' },
    { message: 'What is your email address?', name: 'email' },
    { message: 'Project Name: Title of the project', name: 'title' },
    { message: 'Description: Describe your project', name: 'description' },
    { message: 'Installation: What are the steps required to install your project?', name: 'installation' },
    { message: 'Usage: How do you use the application?', name: 'usage' },
    { message: 'Credits: List your collaborators?', name: 'collab' },
    { message: 'Test: List your test instructions', name: 'test' },
    { type: 'list', message: 'License: Choose your license', name: 'license', choices: ['MIT License', 'The Unlicense', 'Boost Software License 1.0', 'Apache License 2.0', 'No license']}
];

// TODO: Create a function to write README file

async function askQuestion() {
    const response = await inquirer.prompt(questions)
    console.log(response)
    const output = generateMarkdown(response)
    fs.writeFileSync('README.md', output)
}

askQuestion();






