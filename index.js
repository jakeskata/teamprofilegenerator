const { prompt } = require('inquirer');
const { questions, Manager, Engineer, Intern } = require('./lib');

const Positions = {Managers:[],Engineers:[],Interns:[]};

prompt(questions).then(console.log)