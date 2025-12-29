export function filter<T>(
  target: T[],
  predicate: (item: T, index: number) => boolean,
): T[];

export function filter<T>(
  target: readonly T[],
  predicate: (item: T, index: number) => boolean,
): readonly T[];

/**
 * Returns a new array with all elements for which the predicate returns true.
 * If no elements are filtered, the original array is returned.
 */
export function filter<T>(
  target: T[] | readonly T[],
  predicate: (item: T, index: number) => boolean,
): T[] | readonly T[] {
  let modified = false;

  const result: Array<T> = [];

  for (let index = 0; index < target.length; index++) {
    const item = target[index];

    if (predicate(item, index)) {
      result.push(item);
    } else {
      modified = true;
    }
  }

  return modified ? result : target;
}
