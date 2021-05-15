//importing employee class
const Employee = require("../src/lib/Employee");

const mockEmployee = new Employee(
  "Peter",
  1234,
  "peter@email.domain",
  "employee"
);

describe("Employee", () => {
  //tests to see if name is a string
  it("Does it contain a name?", () => {
    expect(mockEmployee.employeeName).toEqual(expect.any(String));
  });

  //tests to see if name is at least two characters long
  it("Is the name at least 2 characters long?", () => {
    expect(mockEmployee.employeeName.length).toBeGreaterThanOrEqual(2);
  });

  //check to see if the id exists and is a number
  it("Does it contain an id?", () => {
    expect(mockEmployee.employeeId).toEqual(expect.any(Number));
  });

  //verifies that the user input text is an email by verifing that the string contains the "@" and "." symbols
  it("Does it contain an Email address?", () => {
    expect(mockEmployee.employeeEmail).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });

  //check if role matches class
  it("Does it contain a role?", () => {
    expect(mockEmployee.employeeRole).toMatch("employee");
  });
});
