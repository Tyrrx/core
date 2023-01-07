import {Tuple} from 'fnxt/fnxt-types';

export const splitAt = (index: number) =>
  <T>(array: T[]): Tuple<T[], T[]> =>
    [array.slice(0, index), array.slice(index)];
