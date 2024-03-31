interface LoadingQueryState<T> {
    data?: T;
    isLoading: true;
    isError: false;
}

interface ErrorQueryState<T> {
    data?: T;
    isLoading: false;
    isError: true;
}

interface LoadedQueryState<T> {
    data: T;
    isLoading: false;
    isError: false;
}

type QueryState<T> =
    | LoadingQueryState<T>
    | ErrorQueryState<T>
    | LoadedQueryState<T>
