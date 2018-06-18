import greeting = require("./greeting");

describe("greeting", () => {
  it("greets the world", () => {
    expect(greeting).toBe("hello world");
  });
});
