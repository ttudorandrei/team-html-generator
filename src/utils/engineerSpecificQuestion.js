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

module.exports = engineerSpecificQuestion;
