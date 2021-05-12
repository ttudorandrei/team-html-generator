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

module.exports = internSpecificQuestion;
