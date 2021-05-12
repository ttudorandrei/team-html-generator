//this imports the "inquirer" package to prompt the user with the questions
const inquirer = require("inquirer");

//constructor functions
const Employee = require("./lib/Employee");
const writeToFile = require("../src/utils/writeToFile");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("../src/utils/questions");
const managerSpecificQuestion = require("./utils/managerSpecificQuestion");
const engineerSpecificQuestion = require("../src/utils/engineerSpecificQuestion");
const internSpecificQuestion = require("../src/utils/internSpecificQuestion");
const generateHTML = require("../src/utils/generateHTML");

const addAnotherEmployee = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add an employee?",
        name: "addEmployee",
      },
    ])
    .then((response) => {
      if (response.addEmployee === true) {
        init();
      } else {
        console.log("Eng of app");
      }
    });
};

const myEmployeesArray = [];

//this will initialize the app
const init = async () => {
  try {
    const answers = await inquirer
      .prompt(questions)
      .then(async function (answers) {
        if (answers.employeeRole === "Manager") {
          await inquirer
            .prompt(managerSpecificQuestion)
            .then(function (response) {
              console.log(response.officeNumber, "3");
              const TeamManager = new Manager(
                answers.employeeName,
                answers.employeeId,
                answers.employeeEmail,
                answers.employeeRole,
                response.officeNumber
              );
              console.log(TeamManager, "2");
              myEmployeesArray.push(TeamManager);
            });
        } else if (answers.employeeRole === "Engineer") {
          await inquirer
            .prompt(engineerSpecificQuestion)
            .then(function (response) {
              console.log(response.officeNumber, "3");
              const TeamEngineer = new Engineer(
                answers.employeeName,
                answers.employeeId,
                answers.employeeEmail,
                answers.employeeRole,
                response.gitHub
              );
              console.log(TeamEngineer, "2");
              myEmployeesArray.push(TeamEngineer);
            });
        } else if (answers.employeeRole === "Intern") {
          await inquirer
            .prompt(internSpecificQuestion)
            .then(function (response) {
              console.log(response.officeNumber, "3");
              const TeamIntern = new Intern(
                answers.employeeName,
                answers.employeeId,
                answers.employeeEmail,
                answers.employeeRole,
                response.schoolName
              );
              console.log(TeamIntern, "2");
              myEmployeesArray.push(TeamIntern);
            });
        }

        addAnotherEmployee();
        return answers;
      })
      .then((response) => {
        if (response.addEmployee === true) {
          init();
        } else {
          console.log(myEmployeesArray, "my team");
          const html = generateHTML(myEmployeesArray);
          writeToFile(html);
        }
      });
    console.log(myEmployeesArray);
  } catch (err) {
    console.log(err);
  }
};

init();
