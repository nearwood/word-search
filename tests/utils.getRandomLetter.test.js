const { getRandomLetter } = require("../src/utils.js");

describe("utils.getRandomLetter", () => {
  it(`returns an uppercase letter`, () => {
    const alpha1 = "abcdef";
    const alpha2 = "jklmnopqrstuvwxyz";

    const r1 = getRandomLetter(alpha1, true);
    expect(r1).toEqual(r1.toUpperCase());

    const r2 = getRandomLetter(alpha2, true);
    expect(r2).toEqual(r2.toUpperCase());

    expect(alpha1.includes(r1));
    expect(!alpha1.includes(r2));

    expect(alpha2.includes(r2));
    expect(!alpha2.includes(r1));
  });
  it(`returns an lowercase letter`, () => {
    const res = getRandomLetter("abcdefghijklmnopqrstuvwxyz", false);
    expect(res).toEqual(res.toLowerCase());
  });
});
