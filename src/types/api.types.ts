export interface APIResponseSuccess<T> {
    status: 'success';
    data: T;
}

export interface APIResponseError {
    status: 'error';
    error: string;
}
export type APIResponse<T> = APIResponseSuccess<T> | APIResponseError;
