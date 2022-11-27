// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter a Title for your project.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a short description for your project.',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation for building this Project?',
  },
  {
    type: 'input',
    name: 'why',
    message: 'Why did you build this project?',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem were you trying to solve?',
  },
  {
    type: 'input',
    name: 'learn',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples for use.',
  },
  {
    type: 'input',
    name: 'screenshot',
    message:
      'Please enter a path to a screenshot of your project or a video file.(Please leave blank if there is none)',
  },
  {
    type: 'input',
    name: 'altText',
    message: 'please provide alternate text for your screenshot if one was provided.',
  },
  {
    type: 'input',
    name: 'credits',
    message:
      'Please list your collaborators, if any, or any third-party assets that required attribution, or any tutorials used.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide how to run any tests you have written for the project.',
  },
  {
    type: 'list',
    name: 'license',
    choices: ['MIT', 'Mozilla Public License 2.0', 'Other', 'None'],
    message: 'Please select the name of your license used.',
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'Please provide your github username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your Email address.',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log('Success!')));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const mrkdwnTemplate = generateMarkdown(answers);
    writeToFile('./Output/README.md', mrkdwnTemplate);
    console.log(answers);
  });
}

// Function call to initialize app
init();
