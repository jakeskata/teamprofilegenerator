
module.exports = [
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
        when: ({needEmp}) => needEmp
        
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees id?',
        when: ({needEmp}) => needEmp
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
        when: ({position}) => position == 'Manager'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s github?',
        when: ({position}) => position == 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
        when: ({position}) => position == 'Intern'
    }
];