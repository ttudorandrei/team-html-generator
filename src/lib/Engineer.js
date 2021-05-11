const Employee = require("./Employee");

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
