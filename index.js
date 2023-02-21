const { prompt } = require('inquirer');

prompt([
    {
        type: 'confirm',
        name: 'needEmp',
        message: 'Do you need an employee?'
    },
    {
        type: 'list',
        name: 'position',
        message: 'What position would you like to fill?',
        choices: ['Manager','Engineer','Intern'],
        when: ({needEmp}) => needEmp
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?',
        when: ({needEmp}) => needEmp
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employees email?',
        
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees id?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s github?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?'
    }


]).then(console.log)