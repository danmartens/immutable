import { splice } from './splice';

export function insert<T>(target: T[], index: number, value: T): T[];

export function insert<T>(
  target: readonly T[],
  index: number,
  value: T,
): readonly T[];

export function insert<T>(
  target: T[] | readonly T[],
  index: number,
  value: T,
): T[] | readonly T[] {
  return splice(target, index, 0, value);
}
