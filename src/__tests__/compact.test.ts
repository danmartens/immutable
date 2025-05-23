import { compact } from '../compact';

describe('compact', () => {
  test('removes null and undefined values from an array', () => {
    const input = [1, null, 2, undefined, 3];
    const expectedOutput = [1, 2, 3];

    const result = compact(input);

    expect(result).toEqual(expectedOutput);
  });

  test('returns an empty array when input is empty', () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];

    const result = compact(input);

    expect(result).toEqual(expectedOutput);
  });

  test('returns the same array when there are no null or undefined values', () => {
    const input = [1, 2, 3];

    const result = compact(input);

    expect(result).toBe(input);
  });
});
