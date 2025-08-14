export function uniquePush<T>(target: T[], value: T): T[];

export function uniquePush<T>(target: readonly T[], value: T): readonly T[];

/** Appends a value to an array unless the array already contains that value. */
export function uniquePush<T>(
  target: T[] | readonly T[],
  value: T,
): T[] | readonly T[] {
  if (target.includes(value)) {
    return target;
  }

  return [...target, value];
}
