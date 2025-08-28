import { Main } from "../src/emailValidator.js";

describe("Main", () => {
  it("should be defined", () => {
    expect(Main).toBeDefined();
  });

  describe("containsAt check if email containt @",function(){
    it("containsAt return false when given test.com", function() {
      let email = "test.com";
      let main = new Main();
      expect(main.containsAt(email)).toBe(false);
    });
  });
});
