//this imports the "inquirer" package to prompt the user with the questions
const inquirer = require("inquirer");

//constructor functions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("../src/utils/questions");
const {
  engineerSpecificQuestion,
  managerSpecificQuestion,
  internSpecificQuestion,
} = require("./utils/employeeTypeSpecificQuestions.js");
const writeToFile = require("../src/utils/writeToFile");
const generateHTML = require("../src/utils/generateHTML");

//this will ask the user if he wants to add another employee and based on the response it will either re-prompt the questions or exit the app;
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

// empty employees array
const myEmployeesArray = [];

//this will initialize the app
const init = async () => {
  try {
    //prompts the questions
    await inquirer
      .prompt(questions)
      // asks specific questions based on the type of the employee that the user chose
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
              // pushes the employee into the employee array
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
              // pushes the employee into the employee array
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
              // pushes the employee into the employee array
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
          //this will run the functions that generate the html and the write it to file
          const html = generateHTML(myEmployeesArray);
          writeToFile(html);
        }
      });
  } catch (err) {
    console.log(err);
  }
};

init();
