import { set } from '../set';

describe('set', () => {
  test('sets a property on an object', () => {
    const target = { a: 1, b: 2 };
    const result = set(target, 'a', 3);

    expect(result).toEqual({ a: 3, b: 2 });
    expect(result).not.toBe(target); // Ensure immutability
  });

  test('sets an element in an array', () => {
    const target = [1, 2, 3];
    const result = set(target, 1, 4);

    expect(result).toEqual([1, 4, 3]);
    expect(result).not.toBe(target); // Ensure immutability
  });
});
