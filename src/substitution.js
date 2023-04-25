// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || /(.).*\1/.test(alphabet)) return false;

  const inputArr = input.toLowerCase().split('');
  const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const substitutionAlphabet = alphabet.split('');
  const resultArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    let char = inputArr[i];
    let index = -1;

    if (char === ' ') {
      resultArr.push(' ');
      continue;
    }

    if (encode) {
      index = standardAlphabet.indexOf(char);
      if (index !== -1) char = substitutionAlphabet[index];
    } else {
      index = substitutionAlphabet.indexOf(char);
      if (index !== -1) char = standardAlphabet[index];
    }

    resultArr.push(char);
  }

  return resultArr.join('');
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
