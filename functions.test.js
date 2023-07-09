// A capitalize function that takes a string and returns it with the first character capitalized.
const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./functions");

test("capitalize-callable", () => {
  expect(typeof capitalize).toBe("function");
  capitalize("hello");
});

test("capitalize-empty", () => {
  expect(capitalize("")).toBe("");
});

test("capitalize-number", () => {
  expect(capitalize("1")).toBe("1");
});

test("capitalize-single", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalize-word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize-sentence", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

// A reverseString function that takes a string and returns it reversed.
test("reverseString-callable", () => {
  expect(typeof reverseString).toBe("function");
  reverseString("hello");
});

test("reverseString-empty", () => {
  expect(reverseString("")).toBe("");
});

test("reverseString-number", () => {
  expect(reverseString("1")).toBe("1");
});

test("reverseString-single", () => {
  expect(reverseString("a")).toBe("a");
});

test("reverseString-word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverseString-sentence", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

// extra "fun" requirement: handle emojis
test("reverseString-emoji-single", () => {
  expect(reverseString("👋🏼")).toBe("👋🏼");
});

test("reverseString-emoji-sentence", () => {
  expect(reverseString("hello 👋🏼")).toBe("👋🏼 olleh");
});

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.

test("calculator-add-callable", () => {
  expect(typeof calculator.add).toBe("function");
  calculator.add(1, 2);
});

test("calculator-add", () => {
  expect(calculator.add(0, 0)).toBe(0);
  expect(calculator.add(1, 0)).toBe(1);
  expect(calculator.add(117, 2)).toBe(119);
  expect(calculator.add(23902, -1)).toBe(23901);
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("calculator-sub-callable", () => {
  expect(typeof calculator.subtract).toBe("function");
  calculator.subtract(1, 2);
});

test("calculator-sub", () => {
  expect(calculator.subtract(0, 0)).toBe(0);
  expect(calculator.subtract(1, 0)).toBe(1);
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(10, 2)).toBe(8);
  expect(calculator.subtract(0, 2)).toBe(-2);
  expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
});

test("calculator-add-negative-equals-sub", () => {
  expect(calculator.add(1, -2)).toBe(calculator.subtract(1, 2));
});

test("calculator-multiply-callable", () => {
  expect(typeof calculator.multiply).toBe("function");
  calculator.multiply(1, 2);
});

test("calculator-multiply", () => {
  expect(calculator.multiply(0, 0)).toBe(0);
  expect(calculator.multiply(1, 0)).toBe(0);
  expect(calculator.multiply(1, 1)).toBe(1);
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(-1, 5)).toBe(-5);
  expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
});

test("calculator-multiplication-is-repeated-addition", () => {
  expect(calculator.multiply(2, 3)).toBe(
    calculator.add(calculator.add(2, 2), 2)
  );
});

test("calculator-divide-callable", () => {
  expect(typeof calculator.divide).toBe("function");
  calculator.divide(1, 2);
});

test("calculator-divide", () => {
  expect(calculator.divide(0, 1)).toBe(0);
  expect(calculator.divide(1, 1)).toBe(1);
  expect(calculator.divide(1, -1)).toBe(-1);
  expect(calculator.divide(2, 1)).toBe(2);
  expect(calculator.divide(1, 2)).toBe(0.5); // exact float
  expect(calculator.divide(1, 10)).toBeCloseTo(0.1); // inexact float
  expect(calculator.divide(1, -10)).toBeCloseTo(-0.1);
});

// A caesarCipher function that takes a string and a shift factor
// and returns it with each character "shifted".

test("caesarCipher-callable", () => {
  expect(typeof caesarCipher).toBe("function");
  caesarCipher("hello", 1);
});

test("caesarCipher-error-on-bad-shift", () => {
  expect(() => caesarCipher("hello", "a")).toThrow();
  expect(() => caesarCipher("hello", 0.1)).toThrow();
});

test("caesarCipher-error-on-bad-string", () => {
  expect(() => caesarCipher(1, 2)).toThrow();
});

test("caesarCipher-empty", () => {
  expect(caesarCipher("", 1)).toBe("");
});

test("caesarCipher-number", () => {
  expect(caesarCipher("1", 1)).toBe("1");
});

test("caesarCipher-single-shift-0", () => {
  expect(caesarCipher("a", 0)).toBe("a");
});

test("caesarCipher-single-shift-1", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});

test("caesarCipher-single-shift-12", () => {
  expect(caesarCipher("a", 12)).toBe("m");
});

test("caesarCipher-single-shift-27", () => {
  expect(caesarCipher("a", 27)).toBe("b");
});

test("caesarCipher-single-shift-negative-1", () => {
  expect(caesarCipher("a", -1)).toBe("z");
});

test("caesarCipher-single-shift-negative-26", () => {
  expect(caesarCipher("a", -26)).toBe("a");
});

test("caesarCipher-word-shift-0", () => {
  expect(caesarCipher("sesilnvfijnsev", 0)).toBe("sesilnvfijnsev");
});

test("caesarCipher-word-shift-26", () => {
  expect(caesarCipher("eruaenleriuvnare", 0)).toBe("eruaenleriuvnare");
});

test("caesarCipher-word-shift-1", () => {
  expect(caesarCipher("sesilnvfijnsev", 1)).toBe("tftjmowgjkotfw");
});

test("caesarCipher-word-shift-capitalization", () => {
  expect(caesarCipher("SESILNVFIJNSEV", 1)).toBe("TFTJMOWGJKOTFW");
});

test("caesarCipher-word-shift-special-ascii", () => {
  expect(caesarCipher("s!@dew#fv$tstn%ynny^um&t*hty(jyt)", 1)).toBe(
    "t!@efx#gw$utuo%zooz^vn&u*iuz(kzu)"
  );
});

test("caesarCipher-word-shift-special-ascii", () => {
  expect(caesarCipher("hello 👋🏼", 2)).toBe("jgnnq 👋🏼");
});

// An analyzeArray function that takes an array of numbers
// and returns an object with the following properties:
// average, min, max, and length.

test("analyzeArray-callable", () => {
  expect(typeof analyzeArray).toBe("function");
  analyzeArray([1, 2, 3]);
});

test("analyzeArray-error-on-bad-array", () => {
  expect(() => analyzeArray(1)).toThrow();
});

test("analyzeArray-empty", () => {
  expect(analyzeArray([])).toEqual({
    average: NaN, // 0 / 0 is Not-a-Number
    min: Infinity, // lower bound of empty array is oo
    max: -Infinity, // upper bound of empty array is -oo
    length: 0,
  });
});

test("analyzeArray-single", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("analyzeArray-has-nan", () => {
  expect(analyzeArray([1, NaN])).toEqual({
    average: NaN,
    min: NaN,
    max: NaN,
    length: 2,
  });
});

test("analyzeArray-generic", () => {
  expect(
    analyzeArray([
      39.843783701522824, 13.983014879505838, 19.489216254393753,
      31.82618335523115, 19.26247858537215, 12.541612990973448,
      -26.13048347125828, -4.680098173239955, -8.795140665488546,
      19.72955092663142,
    ])
  ).toEqual({
    average: 11.707011838364377,
    min: -26.13048347125828,
    max: 39.843783701522824,
    length: 10,
  });
});
