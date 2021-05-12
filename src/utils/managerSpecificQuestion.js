const managerSpecificQuestion = [
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
];

module.exports = managerSpecificQuestion;
