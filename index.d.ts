import { Primitive } from 'type-fest';

export type Expand<T> = T extends Primitive
  ? T
  : T extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

export type ExpandDeep<T> = T extends Primitive
  ? T
  : T extends infer O
  ? { [K in keyof O]: ExpandDeep<O[K]> }
  : never;
