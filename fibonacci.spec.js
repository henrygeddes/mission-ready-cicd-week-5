const fibonacci = require("./fibonacci");

describe('fibonacci', () => {
    it('should resturn 0', () => {
        expect(fibonacci(0)).toBe([0]);
    })
})