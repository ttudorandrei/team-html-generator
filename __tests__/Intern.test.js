//importing intern class
const Intern = require("../src/lib/Intern");

const mockIntern = new Intern(
  "Jonathan",
  4567,
  "jonathan@email.domain",
  "intern",
  "University of Birmingham"
);

describe("Intern", () => {
  //tests to see if name is a string
  it("Does it contain a name?", () => {
    expect(mockIntern.employeeName).toEqual(expect.any(String));
  });

  //tests to see if name is at least two characters long
  it("Is the name at least 2 characters long?", () => {
    expect(mockIntern.employeeName.length).toBeGreaterThanOrEqual(2);
  });

  //check to see if the id exists and is a number
  it("Does it contain an id?", () => {
    expect(mockIntern.employeeId).toEqual(expect.any(Number));
  });

  //verifies that the user input text is an email by verifying that the string contains the "@" and "." symbols
  it("Does it contain an Email address?", () => {
    expect(mockIntern.employeeEmail).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });

  //check if role matches class
  it("Does it contain a role?", () => {
    expect(mockIntern.employeeRole).toMatch("intern");
  });

  //checks if a school name was typed in
  it("Does it contain a School Name?", () => {
    expect(mockIntern.schoolName).toEqual(expect.any(String));
  });
});
