export type Callback<R = void> = () => R;

export type CallbackWith<T, R = void> = (t: T) => R;

export type CallbackWithArgs<T extends unknown[], R = void> = (...args: T) => R;

export type CallbackAsync<R = void> = () => Promise<R>;

export type CallbackAsyncWith<T, R = void> = (t: T) => Promise<R>;

export type CallbackAsyncWithArgs<T extends unknown[], R = void> = (...args: T) => Promise<R>;
