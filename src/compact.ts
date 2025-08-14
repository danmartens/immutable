import { filter } from './filter';

export function compact<T>(target: T[]): NonNullable<T>[];

export function compact<T>(target: readonly T[]): readonly NonNullable<T>[];

export function compact<T>(
  target: T[] | readonly T[],
): NonNullable<T>[] | readonly NonNullable<T>[] {
  return filter(target, (item) => item != null) as NonNullable<T>[];
}
