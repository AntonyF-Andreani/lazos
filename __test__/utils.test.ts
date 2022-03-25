import { joinClasses } from "utils";

describe("joinClasses()", () => {
  it("must return a string", () => {
    expect(joinClasses("a", "b")).toBe("a b");
  });
  it("must return a string with filter undefined", () => {
    expect(joinClasses("a", undefined)).toBe("a");
  });
});
