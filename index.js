const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlRender");

const teamMembers = [];

//start() FUNCTION ASSUMES A MANAGER HAS LAUNCHED THE APPLICATION
function start() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter Team Manager's name: ",
            },
            {
                type: "input",
                name: "id",
                message: "Enter Team Manager's ID number: ",
            },
            {
                type: "input",
                name: "email",
                message: "Enter Team Manager's email address: ",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter Team Manager's office number: ",
            },
        ])
        .then((answers) => {
            console.log(answers);
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            console.log(manager);
            teamMembers.push(manager);
            addTeamMember();
        });
}

function addTeamMember() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "memberType",
                message: "Select the Team Member you would like or end selection process: ",
                choices: ["Engineer", "Intern", "No more Team Members"],
            },
        ])
        .then((answers) => {
            if (answers.memberType === "Engineer") {
                addEngineer();
            } else if (answers.memberType === "Intern") {
                addIntern();
            } else {
                console.log("Your team is being assembled!");
                html.htmlRender(teamMembers);
            }
        });
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter Engineer's name: ",
            },
            {
                type: "input",
                name: "id",
                message: "Enter Engineer's ID number: ",
            },
            {
                type: "input",
                name: "email",
                message: "Enter Engineer's email address: ",
            },
            {
                type: "input",
                name: "github",
                message: "Enter Engineer's GitHub Username: ",
            },
        ])
        .then((answers) => {
            console.log(answers);
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            console.log(engineer);
            teamMembers.push(engineer);
            addTeamMember();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter Intern's name: ",
            },
            {
                type: "input",
                name: "id",
                message: "Enter Intern's ID number: ",
            },
            {
                type: "input",
                name: "email",
                message: "Enter Intern's email address: ",
            },
            {
                type: "input",
                name: "school",
                message: "Enter Intern's current school of attendance: ",
            },
        ])
        .then((answers) => {
            console.log(answers);
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            console.log(intern);
            teamMembers.push(intern);
            addTeamMember();
        });
}

start();