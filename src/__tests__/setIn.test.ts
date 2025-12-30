import { setIn } from '../setIn';

describe('setIn', () => {
  test('sets a property on an object', () => {
    const target = { a: 1, b: 2 };
    const result = setIn(target, 'a', 3);

    expect(result).toEqual({ a: 3, b: 2 });
    expect(result).not.toBe(target); // Ensure immutability
  });

  test('sets an element in an array', () => {
    const target = [1, 2, 3];
    const result = setIn(target, 1, 4);

    expect(result).toEqual([1, 4, 3]);
    expect(result).not.toBe(target); // Ensure immutability
  });

  test('sets a nested property on an object', () => {
    const target = { a: { b: { c: 1 } } };
    const result = setIn(target, 'a', 'b', 'c', 2);

    expect(result).toEqual({ a: { b: { c: 2 } } });
    expect(result).not.toBe(target); // Ensure immutability
    expect(result.a).not.toBe(target.a); // Ensure immutability of nested object
    expect(result.a.b).not.toBe(target.a.b); // Ensure immutability of nested object
  });

  test('sets a nested element in an array', () => {
    const target = [{ a: 1 }, { a: 2 }];
    const result = setIn(target, 1, 'a', 3);

    expect(result).toEqual([{ a: 1 }, { a: 3 }]);
    expect(result).not.toBe(target); // Ensure immutability
    expect(result[1]).not.toBe(target[1]); // Ensure immutability of nested object
  });

  test('throws error when trying to set a property on a non-object', () => {
    const target = { a: 1 };

    expect(() => {
      // @ts-expect-error Testing runtime error
      setIn(target, 'a', 'b', 2);
    }).toThrow(
      'Value at key path "a" is a number and therefore cannot be updated via setIn',
    );
  });
});
