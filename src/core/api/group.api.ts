import { httpService } from '@/core/http';
import type { APIResponse } from '@/types/api.types';
import type { Group } from '@/types/model.types';

export async function getGroupList(): Promise<APIResponse<number[]>> {
    return httpService.get('/group');
}

export async function getGroupById(
    groupId: number,
): Promise<APIResponse<Group>> {
    return httpService.get(`/group/${groupId}`);
}
