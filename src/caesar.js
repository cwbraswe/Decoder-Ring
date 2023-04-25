// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //check if shift value is valid
    if (shift === 0 || shift < -25 || shift > 25) return false;
    // Set up variables for the alphabet and the output
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let output = "";
  
  // Determine whether to encode or decode the input
  const direction = encode ? 1 : -1;
  
  // Iterate over each character in the input
  for (let i = 0; i < input.length; i++) {
    // Convert the character to lowercase
    const char = input[i].toLowerCase();
    
    // Check if the character is a letter
    if (alphabet.includes(char)) {
      // Determine the index of the shifted letter
      const index = (alphabet.indexOf(char) + shift * direction + 26) % 26;
      
      // Add the shifted letter to the output
      output += alphabet[index];
    } else {
      // Add the non-letter character to the output
      output += char;
    }
  }
  
  return output;
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
