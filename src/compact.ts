import { filter } from './filter';

export function compact<T>(target: T[]): NonNullable<T>[] {
  return filter(target, (item) => item != null) as NonNullable<T>[];
}
