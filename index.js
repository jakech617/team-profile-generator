const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
employeeArray = [];

const init = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter your company or team name',
            name: 'name',
        },
    ]).then((answers) => {
        const name = answers.name;
        employeeArray.push(name);
        
        newManager();
    })
}

const newManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your team manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your team manager's employee ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is your team manager's email address?",
            name: 'email',
        },

        {
            type: 'input',
            message: "What is your team manager's office number?",
            name: 'officeNumber',
        },
    ]).then((answers) => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const officeNumber = answers.officeNumber;
        const newEmployee = new Manager(name, id, email, officeNumber);
        employeeArray.push(newEmployee);
        
	    newMember();
    });
};

const newMember = () => {
    inquirer.prompt([
        { 
            type: 'list',
            message: 'Would you like to add any more additional new team members?',
            choices: [
                'Engineer',
                'Intern',
                'No (Finish and exit the application)',
            ],
            name: 'newMemberData'
        },
    ]).then((answers) => {
        switch (answers.newMemberData) {
            case 'Engineer':
                newEngineer();
                break;
            case 'Intern':
                newIntern();
                break;
            case 'No (Finish and exit the application)':
                generateTeam();
                break;
        };
    });
};

const newEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the Engineer's employee ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the Engineer's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the Engineer's GitHub username?",
            name: 'github',
        },
    ]).then((answers) => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const github = answers.github;
        const newEmployee = new Engineer(name, id, email, github)
        employeeArray.push(newEmployee);

        newMember();
    });
};

const newIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name",
        },
        {
            type: 'input',
            message: "What is the Intern's employee ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the Intern's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the school your Intern attended?",
            name: 'school',
        },
    ]).then((answers) => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const school = answers.school;
        const newEmployee = new Intern(name, id, email, school)
        employeeArray.push(newEmployee);

        newMember();
    });
};