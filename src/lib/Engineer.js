const Employee = require("./Employee");

//engineer class extending employee class and adding a github profile
class Engineer extends Employee {
  constructor(name, id, email, role, gitHubProfile) {
    super(name, id, email, role);
    this.gitHub = gitHubProfile;
  }

  getGitHub() {
    return this.gitHub;
  }
}

module.exports = Engineer;
