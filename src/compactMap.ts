export function compactMap<T, U>(
  target: T[],
  updater: (item: T, index: number) => U,
): NonNullable<U>[];

export function compactMap<T, U>(
  target: readonly T[],
  updater: (item: T, index: number) => U,
): readonly NonNullable<U>[];

export function compactMap<T, U>(
  target: T[] | readonly T[],
  updater: (item: T, index: number) => U,
): NonNullable<U>[] | readonly NonNullable<U>[] {
  let modified = false;

  const result: NonNullable<U>[] = [];

  let index = 0;

  for (const item of target) {
    const updated = updater(item, index);

    if (updated !== (item as unknown as U)) {
      modified = true;
    }

    if (updated != null) {
      result.push(updated);
    }

    index++;
  }

  return modified ? result : (target as unknown as NonNullable<U>[]);
}
