//this imports the "inquirer" package to prompt the user with the questions
const inquirer = require("inquirer");
//this imports the "fs" package to write the file
const fs = require("fs");

//constructor functions
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const questions = [
  {
    type: "input",
    message: "Please choose a name for your file:",
    name: "filename",
  },

  {
    type: "input",
    message: "Please type in the employee name:",
    name: "employeeName",
    validate: (name) => {
      if (!name || name.length < 2) {
        return "Please type in the employee name:";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    message: "Please type in the employee id:",
    name: "employeeId",
    validate: (id) => {
      if (!id) {
        return "Please type in the employee id:";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    message: "Please type in the employee email address",
    name: "employeeEmail",
    validate: (email) => {
      if (!email) {
        return "Please type in the email address of the employee";
      } else {
        return true;
      }
    },
  },

  {
    type: "list",
    message: "Please choose the employee role you want to add.",
    name: "employeeRole",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const checkSpecificRoles = function (answers) {
  if (answers.employeeRole === "Manager") {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Please type in the office number:",
          name: "officeNumber",
          validate: (officeNumberInput) => {
            if (officeNumberInput) {
              return true;
            } else {
              return "Please type in the correct office number!";
            }
          },
        },
      ])
      .then((response) => {
        console.log(response.officeNumberInput, "4");
        const TeamManager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
      });
  } else {
    console.log("++++++++++ Nada ++++++++++");
  }
};

//this will initialize the app
const init = async () => {
  try {
    const answers = await inquirer
      .prompt(questions)
      .then(async function (answers) {
        if (answers.employeeRole === "Manager") {
          await inquirer
            .prompt([
              {
                type: "input",
                message: "Please type in the office number:",
                name: "officeNumber",
                validate: (officeNumber) => {
                  if (officeNumber) {
                    return true;
                  } else {
                    return "Please type in the correct office number!";
                  }
                },
              },
            ])
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
            });
        } else {
          console.log("++++++++++ Nada ++++++++++");
        }
      });
    console.log(answers, "1");
  } catch (err) {
    console.log(err);
  }
};

init();
