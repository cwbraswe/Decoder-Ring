// Write your tests here!
const expect = require('chai').expect;
const { substitution } = require('../src/substitution');

describe('substitution', () => {
  it('should encode a message with a given substitution alphabet', () => {
    const expected = 'jrufscpw';
    const actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
    expect(actual).to.equal(expected);
  });

  it('should decode a message with a given substitution alphabet', () => {
    const expected = 'thinkful';
    const actual = substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false);
    expect(actual).to.equal(expected);
  });

  it('should maintain spaces and ignore capital letters', () => {
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev');
    expect(actual).to.equal(expected);
  });

  it('should return false if the substitution alphabet is not exactly 26 characters long', () => {
    const expected = false;
    const actual1 = substitution('thinkful', 'short');
    const actual2 = substitution('thinkful', 'abcabcabcabcabcabcabcabcyz');
    expect(actual1).to.equal(expected);
    expect(actual2).to.equal(expected);
  });

  it('should return false if the substitution alphabet contains duplicate characters', () => {
    const expected = false;
    const actual = substitution('thinkful', 'aabbccddeeffgghhiijjkkllmno');
    expect(actual).to.equal(expected);
  });
});