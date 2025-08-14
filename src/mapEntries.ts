type RecordValue<T> = T extends Record<string, infer V> ? V : never;

export function mapEntries<T extends Record<string, any>>(
  target: T,
  update: (entry: [keyof T, RecordValue<T>]) => RecordValue<T>,
): T {
  let modified = false;

  const entries = Object.entries(target).map(([key, value]) => {
    const updatedValue = update([key, value]);

    if (updatedValue !== value) {
      modified = true;
    }

    return [key, updatedValue];
  });

  if (!modified) {
    return target;
  }

  return Object.fromEntries(entries) as T;
}
