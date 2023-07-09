// A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(string) {
  if (typeof string !== "string") {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// handles emojis and other more complex characters properly
// turns out doing it yourself is an absolute PITA
const GraphemeSplitter = require("grapheme-splitter");

function reverseString(str) {
  if (typeof str !== "string") {
    return str;
  }

  const splitter = new GraphemeSplitter();
  const graphemes = splitter.splitGraphemes(str);
  return graphemes.reverse().join("");
}

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.

function caesarCipher(str, shift) {
  if (typeof str !== "string") {
    throw new Error("str must be a string");
  }
  if (typeof shift !== "number" || !Number.isInteger(shift)) {
    throw new Error("shift must be an integer");
  }

  shift = shift % 26;
  if (shift < 0) {
    shift += 26;
  }

  if (shift === 0) {
    return str;
  }

  const splitter = new GraphemeSplitter();
  const graphemes = splitter.splitGraphemes(str);

  result = graphemes.map((grph) => _caesarCipherSingle(grph, shift)).join("");

  return result;
}

function _caesarCipherSingle(char, shift) {
  if (char.length > 1) {
    return char;
  }
  const charCode = char.charCodeAt(0);
  const isUpperCase = charCode >= 65 && charCode <= 90;
  const isLowerCase = charCode >= 97 && charCode <= 122;

  if (isUpperCase) {
    return _shiftCodeWithBase(charCode, 65, shift);
  } else if (isLowerCase) {
    return _shiftCodeWithBase(charCode, 97, shift);
  } else {
    return char;
  }
}

function _shiftCodeWithBase(charCode, base, shift) {
  return String.fromCharCode(((charCode - base + shift) % 26) + base);
}

// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("arr must be an array");
  }
  const length = arr.length;
  const average = [...arr].reduce((a, b) => a + b, 0) / length;
  const min = [...arr].reduce((a, b) => Math.min(a, b), Infinity);
  const max = [...arr].reduce((a, b) => Math.max(a, b), -Infinity);

  return { average, min, max, length };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
