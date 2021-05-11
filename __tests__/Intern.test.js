const Intern = require("../src/lib/Intern");

const mockIntern = new Intern(
  "Jonathan",
  4567,
  "jonathan@email.domain",
  "intern",
  "University of Birmingham"
);

describe("Intern", () => {
  it("Does it contain a name?", () => {
    expect(mockIntern.name).toEqual(expect.any(String));
  });

  it("Does it contain an id?", () => {
    expect(mockIntern.id).toEqual(expect.any(Number));
  });

  it("Does it contain an Email address?", () => {
    expect(mockIntern.email).toContainEqual(expect.stringContaining("@", "."));
  });

  it("Does it contain a role?", () => {
    expect(mockIntern.role).toMatch("intern");
  });

  it("Does it contain an office number?", () => {
    expect(mockIntern.schoolName).toEqual(expect.any(String));
  });
});
