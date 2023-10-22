const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: input => input ? true : 'Name cannot be empty',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project:',
        validate: input => input ? true : 'Description cannot be empty',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions:',
        validate: input => input ? true : 'installation instructions cannot be empty',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage information:',
        validate: input => input ? true : 'Usage information cannot be empty',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide the contributing guidelines:',
        validate: input => input ? true : 'Contribution guidelines cannot be empty',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide the test instructions:',
        validate: input => input ? true : 'Test instructions cannot be empty',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Please provide your GitHub username:',
        validate: input => input ? true : 'Username cannot be empty',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address:',
        validate: input => /\S+@\S+\.\S+/.test(input) ? true : 'Please enter a valid email address',
          },

];

function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);
    const outputPath = path.join(__dirname, './generated_readme_files', fileName)

    fs.writeFile(outputPath, readmeContent, (err) => {
        if (err) {
        console.error('There was an error writing your README file:', err);
      
        } else {
          console.log('README file created successfully! Well Done!!!! Go Team!!!!');
        }
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
