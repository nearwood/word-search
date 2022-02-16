const { fillGrid } = require("../src/utils.js");

const testCases = [
  {
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    name: "A",
    grid: [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."]
    ],
    upperCase: false
  },
  {
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    name: "B",
    grid: [
      [".", "."],
      [".", "."],
      [".", "."],
      ["X", "X"],
      [".", "."],
      [".", "."],
      [".", "."]
    ],
    upperCase: true
  },
  {
    alphabet: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
    name: "РУ",
    grid: [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."]
    ],
    upperCase: true
  },
];

describe("utils.fillGrid", () => {
  testCases.forEach(t => {
    it(`returns correct grid (case ${t.name})`, () => {
      const res = fillGrid(t.grid, t.upperCase, t.alphabet);
      const resString = res.map(l => l.join("")).join("");
      expect(resString).toEqual(
        resString[t.upperCase ? "toUpperCase" : "toLowerCase"]()
      );
    });
  });
});
