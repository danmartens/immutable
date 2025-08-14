/** Appends a value to an array unless the array already contains that value. */
export function uniquePush<T>(target: T[], value: T): T[] {
  if (target.includes(value)) {
    return target;
  }

  return [...target, value];
}
