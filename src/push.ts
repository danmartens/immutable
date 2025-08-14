export function push<T>(target: T[], value: T): T[];

export function push<T>(target: readonly T[], value: T): readonly T[];

export function push<T>(
  target: T[] | readonly T[],
  value: T,
): T[] | readonly T[] {
  return [...target, value];
}
