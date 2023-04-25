// Write your tests here!
const { expect } = require('chai');
const { caesar } = require('../src/caesar');

describe('caesar', () => {
  it('should return false if shift value is 0', () => {
    const actual = caesar('thinkful', 0);
    expect(actual).to.be.false;
  });

  it('should return false if shift value is less than -25', () => {
    const actual = caesar('thinkful', -26);
    expect(actual).to.be.false;
  });

  it('should return false if shift value is greater than 25', () => {
    const actual = caesar('thinkful', 99);
    expect(actual).to.be.false;
  });

  it('should ignore capital letters', () => {
    const actual = caesar('A Message', 3);
    const expected = caesar('a message', 3);
    expect(actual).to.equal(expected);
  });

  it('should handle shifts that go past the end of the alphabet', () => {
    const actual = caesar('z', 3);
    expect(actual).to.equal('c');
  });

  it('should maintain spaces and other nonalphabetic symbols', () => {
    const actual = caesar('Hello, world!', 5);
    const expected = 'mjqqt, btwqi!';
    expect(actual).to.equal(expected);
  });

  it('should decode the message when encode is false', () => {
    const actual = caesar('mjqqt, btwqi!', 5, false);
    const expected = 'hello, world!';
    expect(actual).to.equal(expected);
  });
});