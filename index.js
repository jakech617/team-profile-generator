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

const generateTeam = () => {

    const newArray = []
    const html1 = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${employeeArray[0]}</title>
</head>
<body>
    <div>
        <h1 class="logo">${employeeArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    newArray.push(html1);

    for (i = 1; i < employeeArray.length; i++) {
        let output = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${employeeArray[i].name}</h2>
                <h2 class="card-subtitle mb-2 text-muted">${employeeArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p class="card-text">ID: ${employeeArray[i].id}</p>
                <p class="card-text">Email: <a class="card-link" href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></p>
        `
        if (employeeArray[i].officeNumber) {
            output += `
            <p>${employeeArray[i].officeNumber}</p>
            `
        }
        if (employeeArray[i].github) {
            output += `
            <p>GitHub: <a href="https://github.com/${employeeArray[i].github}">${employeeArray[i].github}</a></p>
            `
        }
        if (employeeArray[i].school) {
            output += `
            <p>School: ${employeeArray[i].school}</p>
            `
        }
        output += `
        </div>
        </div>
        `
        newArray.push(output)
    }

    const html2 = `
    </div>
    </body>
    </html>
    `
    newArray.push(html2);

    fs.writeFile('./dist/index.html', newArray.join(""), function (err) {
        if (err) throw err
        else {
            console.log("Team Generated");
            console.log('Success');
        }
    })
}

init();