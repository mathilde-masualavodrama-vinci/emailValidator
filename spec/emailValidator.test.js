import { Main } from "../src/emailValidator.js";

const main = new Main();
describe("Email Validator", function () {

  it("IsValid return false when given test.com", function () {
    let email = "test.com";
    expect(main.IsValid(email)).toBe(false);
  });

  it("IsValid return false when given mathy@vinci.com", function () {
    let email = "mathy@vinci.com";
    expect(main.IsValid(email)).toBe(true);
  });

  it("IsValid return false when given mathy@vinci  .com", function () {
    let email = "mathy@vinci .com";
    expect(main.IsValid(email)).toBe(false);
  });

  it("IsValid return false when given mathy@", function () {
    let email = "mathy@";
    expect(main.IsValid(email)).toBe(false);
  });

  it("isValid return false when  given @student.vinci.be", function () {
    let email = "@student.vinci.be";
    expect(main.IsValid(email)).toBe(false);
  });

  it("isValid return true when given mathy@student.vinci.com", function () {
    let email = "mathy@student.vinci.com";
    expect(main.IsValid(email)).toBe(true);
  });

  it("isValid return false when given mathy@studentvinci", function () {
    let email = "mathy@studentvinci";
    expect(main.IsValid(email)).toBe(false);
  });
});
