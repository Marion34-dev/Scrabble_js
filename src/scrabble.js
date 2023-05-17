class Scrabble {
  constructor(word) {
    // Error handling - in case value of null or undefined
    if (word === null || word === undefined) {
      this.word = '';
      // Error handling - converting word to lowercases so the program accepts an input with capital letters
    } else {
      this.word = word.toLowerCase();
    }
  }

  // Function contains for loop to go through each character & if statements defining the value for each letter
  score() {
    let totalScore = 0;

    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word[i];
      if (["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"].includes(letter)) {
        totalScore += 1;
      } else if (["d", "g"].includes(letter)) {
        totalScore += 2;
      } else if (["b", "c", "m", "p"].includes(letter)) {
        totalScore += 3;
      } else if (["f", "h", "v", "w", "y"].includes(letter)) {
        totalScore += 4;
      } else if (["k"].includes(letter)) {
        totalScore += 5;
      } else if (["j", "x"].includes(letter)) {
        totalScore += 8;
      } else if (["q", "z"].includes(letter)) {
        totalScore += 10;
        // Error handling - in case of an empty string
      } else {
        totalScore += 0;
      }
    }

    return totalScore;
  }
}

export default Scrabble;
