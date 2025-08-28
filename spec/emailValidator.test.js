import { Main } from "../src/emailValidator.js";

describe("Email Validator", function() {

    it("IsValid return false when given test.com", function() {
      let email = "test.com";
      let main = new Main();
      expect(main.IsValid(email)).toBe(false);
    });

    it("IsValid return false when given mathy@vinci .com", function() {
      let email = "mathy@vinci.com";
      let main = new Main();
      expect(main.IsValid(email)).toBe(true);
    });
    });
