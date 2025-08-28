import { Main } from "../src/emailValidator.js";
describe("Email Validator", function() {

  describe("containsAt check if email containt @",function(){
    it("containsAt return false when given test.com", function() {
      let email = "test.com";
      let main = new Main();
      expect(main.containsAt(email)).toBe(false);
    });

    it("containsAt return true when given test@test.com", function() {
      let email = "test@test.com";
      let main = new Main();
      expect(main.containsAt(email)).toBe(true);
    });

  });

  describe("containsPeriod check if email contains .", function() {

    it("containsPeriod return false when given test@testcom", function() {
      let email = "test@testcom";
      let main = new Main();
      expect(main.containsPeriod(email)).toBe(false);
    });

    it("containsPeriod return true when given test@test.com", function() {
      let email = "test@test.com";
      let main = new Main();
      expect(main.containsPeriod(email)).toBe(true);
    });

    it("containsPeriod return false when given testcom.", function() {
      let email = "testcom.";
      let main = new Main();
      expect(main.containsPeriod(email)).toBe(false);
    });

  });

  describe("containtsSpace check if email contains space", function() {

    it("containtsSpace return false when given test@ .com", function() {
      let email = "test@ .com";
      let main = new Main();
      expect(main.containtsSpace(email)).toBe(false);
    });


  });
});
