const sum = require("./sum");

test('add 1+2 to equals 3', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(4, 6)).toBe(10)
})