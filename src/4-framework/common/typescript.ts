export type PickProperties<T, P> = Pick<
  T,
  { [K in keyof T]: T[K] extends P ? K : never }[keyof T]
>

export type ExactlySameKeys<T extends {}> = { [key in keyof T]-?: any }

export type SetDifference<A, B> = A extends B ? never : A

export type Diff<T extends object, U extends object> = Pick<
  T,
  SetDifference<keyof T, keyof U>
>

export type NotConflicting<T extends object, U extends object> = Omit<
  T,
  keyof U
> &
  Omit<U, keyof T>
