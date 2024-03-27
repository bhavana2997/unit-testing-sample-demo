// add jest test cases for the ‘add’ function
const { add } = require('./mathFunctions');	     
// this first test suite checks if the ‘add’ function correctly adds 2 numbers together
describe('add function', () => {  
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(10, -5)).toBe(5);
  });

// this second test suite checks how the ‘add’ function handles edge cases like infinity, -infinity, and NaN.
  it('should handle edge cases', () => {
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, -1)).toBe(-Infinity);
    expect(add(NaN, 1)).toBe(NaN);
    expect(add(1, NaN)).toBe(NaN);
  });
});
