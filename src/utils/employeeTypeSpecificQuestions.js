const engineerSpecificQuestion = [
  {
    type: "input",
    message: "Please type in your GitHub username:",
    name: "gitHub",
    validate: (gitHub) => {
      if (gitHub) {
        return true;
      } else {
        return "Please make sure your username is correct!";
      }
    },
  },
];

const internSpecificQuestion = [
  {
    type: "input",
    message: "Please type in the name of the School you attended:",
    name: "schoolName",
    validate: (schoolName) => {
      if (schoolName) {
        return true;
      } else {
        return "Please type in the name of the School you attended!";
      }
    },
  },
];

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

//exports an object containing the employee type specific questions
module.exports = {
  engineerSpecificQuestion,
  internSpecificQuestion,
  managerSpecificQuestion,
};
