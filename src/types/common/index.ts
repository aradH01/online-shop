export type Nullable<T> = T | null;
export type ColorValueHex = `#${string}`;
export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;


