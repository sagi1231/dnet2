type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PartialType<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
