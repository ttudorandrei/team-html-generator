const Manager = require("../src/lib/Manager");

const mockManager = new Manager(
  "David",
  2345,
  "david@email.domain",
  "manager",
  111
);

describe("Manager", () => {
  it("Does it contain a name?", () => {
    expect(mockManager.name).toEqual(expect.any(String));
  });

  it("Does it contain an id?", () => {
    expect(mockManager.id).toEqual(expect.any(Number));
  });

  it("Does it contain an Email address?", () => {
    expect(mockManager.email).toContainEqual(expect.stringContaining("@", "."));
  });

  it("Does it contain a role?", () => {
    expect(mockManager.role).toMatch("manager");
  });

  it("Does it contain an office number?", () => {
    expect(mockManager.officeNumber).toEqual(expect.any(Number));
  });
});
