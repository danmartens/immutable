import { splice } from './splice';

export function insert<T>(target: T[], index: number, value: T): T[] {
  return splice(target, index, 0, value);
}
