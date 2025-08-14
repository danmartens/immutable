export function set<T extends Record<string, unknown>, K extends keyof T>(
  target: T,
  key: K,
  value: T[K],
): T;

export function set<T extends Array<unknown>, K extends keyof T>(
  target: T,
  key: K,
  value: T[K],
): T;

export function set<T extends ReadonlyArray<unknown>, K extends keyof T>(
  target: T,
  key: K,
  value: T[K],
): T;

export function set<
  T extends Record<string, unknown> | Array<unknown> | ReadonlyArray<unknown>,
  K extends keyof T,
>(target: T, key: K, value: T[K]): T {
  if (target[key] === value) {
    return target;
  }

  if (Array.isArray(target)) {
    const result = [...target];

    result[key as number] = value;

    return result as unknown as T;
  } else {
    return {
      ...target,
      [key]: value,
    };
  }
}
