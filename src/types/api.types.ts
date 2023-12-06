export interface APIResponse<T> {
    status: string;
    data?: T;
    error?: string;
}
