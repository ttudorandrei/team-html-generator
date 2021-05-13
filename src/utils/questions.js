const questions = [
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

module.exports = questions;
