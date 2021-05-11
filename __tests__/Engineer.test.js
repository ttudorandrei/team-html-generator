//importing engineer class
const Engineer = require("../src/lib/Engineer");

const mockEngineer = new Engineer(
  "Annie",
  3456,
  "annie@email.domain",
  "engineer",
  "annieongithub"
);

describe("Engineer", () => {
  //tests to see if name is a string
  it("Does it contain a name?", () => {
    expect(mockEngineer.name).toEqual(expect.any(String));
  });

  //tests to see if name is at least two characters long
  it("Is the name at least 2 characters long?", () => {
    expect(mockEngineer.name.length).toBeGreaterThanOrEqual(2);
  });

  //check to see if the id exists and is a number
  it("Does it contain an id?", () => {
    expect(mockEngineer.id).toEqual(expect.any(Number));
  });

  //verifies that the user input text is an email by verifing that the string contains the "@" and "." symbols
  it("Does it contain an Email address?", () => {
    expect(mockEngineer.email).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });

  //check if role matches class
  it("Does it contain a role?", () => {
    expect(mockEngineer.role).toMatch("engineer");
  });

  //checks if a github username is typed
  it("Does it contain a GitHub profile?", () => {
    expect(mockEngineer.gitHub).toEqual(expect.any(String));
  });
});
