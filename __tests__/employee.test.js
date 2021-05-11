const Employee = require("../src/lib/Employee");

const mockEmployee = new Employee(
  "Peter",
  1234,
  "peter@email.domain",
  "employee"
);

describe("Employee", () => {
  it("Does it contain a name?", () => {
    expect(mockEmployee.name).toEqual(expect.any(String));
  });

  it("Is the name at least 2 characters long?", () => {
    expect(mockEmployee.name.length).toBeGreaterThanOrEqual(2);
  });

  it("Does it contain an id?", () => {
    expect(mockEmployee.id).toEqual(expect.any(Number));
  });

  it("Does it contain an Email address?", () => {
    expect(mockEmployee.email).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });

  it("Does it contain a role?", () => {
    expect(mockEmployee.role).toMatch("employee");
  });
});
