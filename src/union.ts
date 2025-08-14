export function union<T>(target: T[], source: T[]): T[];

export function union<T>(
  target: readonly T[],
  source: readonly T[],
): readonly T[];

export function union<T>(
  target: T[] | readonly T[],
  source: T[] | readonly T[],
): T[] | readonly T[] {
  if (target === source) {
    return target;
  }

  if (source.every((item) => target.includes(item))) {
    return target;
  }

  return Array.from(new Set([...target, ...source]));
}
