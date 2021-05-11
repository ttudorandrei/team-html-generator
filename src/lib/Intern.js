const Employee = require("./Employee");

//intern class extending employee class and adding school name
class Intern extends Employee {
  constructor(name, id, email, role, schoolName) {
    super(name, id, email, role);
    this.schoolName = schoolName;
  }

  getSchoolName() {
    return this.schoolName;
  }
}

module.exports = Intern;
