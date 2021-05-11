//this imports the "inquirer" package to prompt the user with the questions
const inquirer = require("inquirer");
//this imports the "fs" package to write the file
const fs = require("fs");

//constructor functions
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//this will initialize the app
const init = () => {
  console.log("App Initialized");
};

init();
