// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let alphabet = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];
  const inputChars = input.split("");
  let correctedInputArray = inputChars.map((string) => {
    let lower = string.toLowerCase();
    if (lower === "i" || lower === "j"){
      return "(i/j)"
    }
    return lower
  })
  let coordsX = []
  let coordsY = correctedInputArray.map((letter) => {
    for (let i = 0; i < alphabet.length; i++) {
          const row = alphabet[i];
       if (row.find((alpha) => alpha === letter)) {
  // adds x-coordinate when "row" meets condition. "+1" corrects for x/y axis given in prompt
            coordsX.push(i + 1);
            // adds Y-coordinate.  "+1" corrects for x/y axis given in prompt
            return row.indexOf(letter) + 1;
       }
    }
  })
        // adds x-coordinate and y-coordinate arrays together so X/Y pairs are in sequence
      result = coordsX.reduce((acc, xValue, index) => {
        let pair = `${coordsY[index]}${xValue}`;
        // converts numeric representation of a space back to " ".
        if (pair === "65") {
          pair = " ";
        }
        acc.push(pair);
        return acc;
      }, []);
      // decoding
    if (!encode) {
      let spacesAdded = input.replace(" ", 65);
      // checks that there are an even number of characters so that all coordinate pairs are kept together
      if (spacesAdded.length % 2 !== 0) return false;
      let coordinates = spacesAdded.match(/..?/g);
      result = coordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        let columnIndex = yx.split("")[0] - 1;
        return alphabet[rowIndex][columnIndex];
      });
    }
    // output
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
