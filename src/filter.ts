export function filter<T>(target: T[], predicate: (item: T) => boolean): T[];

export function filter<T>(
  target: readonly T[],
  predicate: (item: T) => boolean,
): readonly T[];

/**
 * Returns a new array with all elements for which the predicate returns true.
 * If no elements are filtered, the original array is returned.
 */
export function filter<T>(
  target: T[] | readonly T[],
  predicate: (item: T) => boolean,
): T[] | readonly T[] {
  let modified = false;

  const result: Array<T> = [];

  for (const item of target) {
    const include = predicate(item);

    if (include) {
      result.push(item);
    } else {
      modified = true;
    }
  }

  return modified ? result : target;
}
