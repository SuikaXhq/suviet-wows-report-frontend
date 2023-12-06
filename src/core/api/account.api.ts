import { httpService } from '@/core/http';
import type { APIResponse } from '@/types/api.types';
import type { Account } from '@/types/model.types';

export async function getAccountById(
    accountId: number,
): Promise<APIResponse<Account>> {
    return httpService.get(`/account/${accountId}`);
}
