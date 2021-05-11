const Engineer = require("../src/lib/Engineer");

const mockEngineer = new Engineer(
  "Annie",
  3456,
  "annie@email.domain",
  "engineer",
  "annieongithub"
);

describe("Engineer", () => {
  it("Does it contain a name?", () => {
    expect(mockEngineer.name).toEqual(expect.any(String));
  });

  it("Is the name at least 2 characters long?", () => {
    expect(mockEngineer.name.length).toBeGreaterThanOrEqual(2);
  });

  it("Does it contain an id?", () => {
    expect(mockEngineer.id).toEqual(expect.any(Number));
  });

  it("Does it contain an Email address?", () => {
    expect(mockEngineer.email).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });

  it("Does it contain a role?", () => {
    expect(mockEngineer.role).toMatch("engineer");
  });

  it("Does it contain a GitHub profile?", () => {
    expect(mockEngineer.gitHub).toEqual(expect.any(String));
  });
});
