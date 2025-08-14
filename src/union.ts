export function union<T>(target: T[], source: T[]): T[] {
  if (target === source) {
    return target;
  }

  if (source.every((item) => target.includes(item))) {
    return target;
  }

  return Array.from(new Set([...target, ...source]));
}
