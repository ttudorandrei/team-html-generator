//employee class
class Employee {
  constructor(name, id, email, role) {
    this.employeeName = name;
    this.employeeId = id;
    this.employeeEmail = email;
    this.employeeRole = role;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;
