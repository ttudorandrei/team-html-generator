//importing manager class
const Manager = require("../src/lib/Manager");

const mockManager = new Manager(
  "David",
  2345,
  "david@email.domain",
  "manager",
  111
);

describe("Manager", () => {
  //tests to see if name is a string
  it("Does it contain a name?", () => {
    expect(mockManager.employeeName).toEqual(expect.any(String));
  });

  //tests to see if name is at least two characters long
  it("Is the name at least 2 characters long?", () => {
    expect(mockManager.employeeName.length).toBeGreaterThanOrEqual(2);
  });

  //check to see if the id exists and is a number
  it("Does it contain an id?", () => {
    expect(mockManager.employeeId).toEqual(expect.any(Number));
  });

  //verifies that the user input text is an email by verifing that the string contains the "@" and "." symbols
  it("Does it contain an Email address?", () => {
    expect(mockManager.employeeEmail).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });

  //check if role matches class
  it("Does it contain a role?", () => {
    expect(mockManager.employeeRole).toMatch("manager");
  });

  //checks if office number exists and is a number
  it("Does it contain an office number?", () => {
    expect(mockManager.officeNumber).toEqual(expect.any(Number));
  });
});
