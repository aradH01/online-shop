interface PaginatedData<T> {
    results: T,
    count: number
    next: string | null
    previous: string | null
}

interface ApiListResponse<T> {
    result: T | PaginatedData<T>;
    status: number;
    message: string;
}

export function apiDataConverter<T>(rawData: ApiListResponse<T>) {
    let count: number | null = null;
    let previous: string | null = null;
    let next: string | null = null;
    let result: T = rawData.result as T;
    if (typeof rawData.result === "object" && rawData.result && 'count' in rawData.result) {
        let tmp = rawData.result as PaginatedData<T>;
        count = tmp.count;
        result = tmp.results;
        next = tmp.next;
        previous = tmp.previous;
    }
    return {
        count,
        previous,
        next,
        result
    }
}
