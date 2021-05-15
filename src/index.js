//this imports the "inquirer" and "path" packages
const inquirer = require("inquirer");
const path = require("path");

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

//this sets the filepath for the function that writes the html
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team-profile.html");

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
    const answers = await inquirer.prompt(questions);
    // asks specific questions based on the type of the employee that the user chose
    if (answers.employeeRole === "Manager") {
      const response = await inquirer.prompt(managerSpecificQuestion);
      const TeamManager = new Manager(
        answers.employeeName,
        answers.employeeId,
        answers.employeeEmail,
        answers.employeeRole,
        response.officeNumber
      );
      // pushes the employee into the employee array
      myEmployeesArray.push(TeamManager);
    } else if (answers.employeeRole === "Engineer") {
      const response = await inquirer.prompt(engineerSpecificQuestion);
      const TeamEngineer = new Engineer(
        answers.employeeName,
        answers.employeeId,
        answers.employeeEmail,
        answers.employeeRole,
        response.gitHub
      );
      // pushes the employee into the employee array
      myEmployeesArray.push(TeamEngineer);
    } else if (answers.employeeRole === "Intern") {
      const response = await inquirer.prompt(internSpecificQuestion);
      const TeamIntern = new Intern(
        answers.employeeName,
        answers.employeeId,
        answers.employeeEmail,
        answers.employeeRole,
        response.schoolName
      );
      // pushes the employee into the employee array
      myEmployeesArray.push(TeamIntern);
    }

    addAnotherEmployee();
    // return answers;
    if (answers.addEmployee === true) {
      init();
    } else {
      //this will run the functions that generate the html and the write it to file
      const html = generateHTML(myEmployeesArray);
      writeToFile(html, outputPath);
    }
  } catch (err) {
    console.log(err);
  }
};

init();
