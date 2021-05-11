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
    message:
      "Please say hello Please say hello Please say hello Please say hello",
    name: "hello",
  },

  {
    type: "input",
    message:
      "Please say goodbye Please say goodbye Please say goodbye Please say goodbye",
    name: "goodbye",
  },
];

//this will initialize the app
const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
  } catch (err) {
    console.log(err);
  }
};

init();
