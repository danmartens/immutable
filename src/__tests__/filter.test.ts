import { filter } from '../filter';

describe('filter', () => {
  test('returns an empty array when no elements match predicate', () => {
    const input = [1, 3, 5];
    const expectedOutput: number[] = [];

    const result = filter(input, (item) => item % 2 === 0);

    expect(result).toEqual(expectedOutput);
  });

  test('returns the same array when all elements match predicate', () => {
    const input = [2, 4, 6];

    const result = filter(input, (item) => item % 2 === 0);

    expect(result).toBe(input);
  });

  test('returns the same array when no elements are filtered', () => {
    const input = [1, 2, 3, 4, 5];

    const result = filter(input, () => true);

    expect(result).toBe(input);
  });

  test('returns an empty array when input is empty', () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];

    const result = filter(input, (item) => item > 0);

    expect(result).toEqual(expectedOutput);
    expect(result).toBe(input);
  });

  test('passes correct index to predicate function', () => {
    const input = ['a', 'b', 'c', 'd'];
    const expectedOutput = ['a', 'c'];

    const result = filter(input, (_item, index) => index % 2 === 0);

    expect(result).toEqual(expectedOutput);
  });

  test('works with readonly arrays', () => {
    const input: readonly number[] = [1, 2, 3, 4, 5] as const;
    const expectedOutput = [1, 3, 5];

    const result = filter(input, (item) => item % 2 === 1);

    expect(result).toEqual(expectedOutput);
  });

  test('handles mixed data types', () => {
    const input = [1, 'hello', true, null, 42, 'world', false];
    const expectedOutput = ['hello', 'world'];

    const result = filter(input, (item) => typeof item === 'string');

    expect(result).toEqual(expectedOutput);
  });

  test('maintains order of elements', () => {
    const input = [5, 1, 4, 2, 3];
    const expectedOutput = [4, 2];

    const result = filter(input, (item) => item % 2 === 0);

    expect(result).toEqual(expectedOutput);
  });
});
