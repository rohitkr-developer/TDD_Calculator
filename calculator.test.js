
const StringCalculator = require('./calculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('should return 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    expect(calculator.add("1")).toBe(1);
  });

  it('should return the sum of numbers for comma-separated input', () => {
    expect(calculator.add("1,5")).toBe(6);
  });

  it('should handle new lines between numbers', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  it('should support custom delimiters', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => calculator.add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2,-4");
  });
});
