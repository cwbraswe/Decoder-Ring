// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius()", () => {
  describe("encoding", () => {
    it("should return a string when encoding", () => {
      const actual = polybius("thinkful");
      expect(actual).to.be.a("string");
    });
    it("should encode 'hello world' to '3251131343 2543241341'", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("hello world");
      expect(actual).to.equal(expected);
    });
    it("should convert both 'i' and 'j' to 42", () => {
      const expected = "4242";
      const actual = polybius("ij", true);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and ignore capital letters", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("Hello World");
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should return false if the number of characters in the string excluding spaces is odd", () => {
      const actual = polybius("443242335212541", false);
      expect(actual).to.be.false;
    });
    it("should decode '3251131343 2543241341' to 'hello world'", () => {
      const expected = "hello world";
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.equal(expected);
    });
    it("should decode 42 to '(i/j)'", () => {
      const expected = "(i/j)";
      const actual = polybius("42", false);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and ignore capital letters", () => {
      const expected = "hello world";
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.equal(expected);
    });
    it("should handle '(i/j)' in the input when decoding", () => {
      const expected = "th(i/j)nkful";
      const actual = polybius("4432423352125413", false);
      expect(actual).to.equal(expected);
    });
    it("should return false if there are an odd number of characters in the input string when decoding", () => {
      const actual = polybius("44324233521254134", false);
      expect(actual).to.be.false;
    });
  });
});