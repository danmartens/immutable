export function map<T, U>(
  target: T[],
  updater: (item: T, index: number) => U,
): U[] {
  let modified = false;

  const result: U[] = [];

  let index = 0;

  for (const item of target) {
    const updated = updater(item, index);

    if (updated !== (item as unknown as U)) {
      modified = true;
    }

    result.push(updated);

    index++;
  }

  return modified ? result : (target as unknown as U[]);
}
