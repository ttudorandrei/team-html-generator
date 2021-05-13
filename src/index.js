//this imports the "inquirer" package to prompt the user with the questions
const inquirer = require("inquirer");

//constructor functions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("../src/utils/questions");
const employeeSpecificQuestion = require("./utils/employeeTypeSpecificQuestions.js");
const engineerSpecificQuestion =
  employeeSpecificQuestion.engineerSpecificQuestion;
const managerSpecificQuestion =
  employeeSpecificQuestion.managerSpecificQuestion;
const internSpecificQuestion = employeeSpecificQuestion.internSpecificQuestion;
const writeToFile = require("../src/utils/writeToFile");
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
        console.info(
          "+++++++ Your Team profile was successfully generated +++++++"
        );
      }
    });
};

const myEmployeesArray = [];

//this will initialize the app
const init = async () => {
  try {
    await inquirer
      .prompt(questions)
      .then(async function (answers) {
        if (answers.employeeRole === "Manager") {
          await inquirer
            .prompt(managerSpecificQuestion)
            .then(function (response) {
              const TeamManager = new Manager(
                answers.employeeName,
                answers.employeeId,
                answers.employeeEmail,
                answers.employeeRole,
                response.officeNumber
              );
              myEmployeesArray.push(TeamManager);
            });
        } else if (answers.employeeRole === "Engineer") {
          await inquirer
            .prompt(engineerSpecificQuestion)
            .then(function (response) {
              const TeamEngineer = new Engineer(
                answers.employeeName,
                answers.employeeId,
                answers.employeeEmail,
                answers.employeeRole,
                response.gitHub
              );
              myEmployeesArray.push(TeamEngineer);
            });
        } else if (answers.employeeRole === "Intern") {
          await inquirer
            .prompt(internSpecificQuestion)
            .then(function (response) {
              const TeamIntern = new Intern(
                answers.employeeName,
                answers.employeeId,
                answers.employeeEmail,
                answers.employeeRole,
                response.schoolName
              );
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
          const html = generateHTML(myEmployeesArray);
          writeToFile(html);
        }
      });
  } catch (err) {
    console.log(err);
  }
};

init();
