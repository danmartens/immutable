import { compactMap } from '../compactMap';

describe('compactMap', () => {
  test('maps elements and removes null or undefined values', () => {
    const input = [1, null, 2, undefined, 3];
    const expectedOutput = ['1', '2', '3'];

    const result = compactMap(input, (item) => item?.toString());

    expect(result).toEqual(expectedOutput);
  });

  test('returns the same array if no elements are changed', () => {
    const input = [1, 2, 3];

    const result = compactMap(input, (item) => item);

    expect(result).toBe(input);
  });

  test('indexes are passed correctly', () => {
    const input = ['a', null, 'b', undefined, 'c'];
    const expectedOutput = [0, 1, 2, 3, 4];

    const result = compactMap(input, (_item, index) => index);

    expect(result).toEqual(expectedOutput);
  });
});
