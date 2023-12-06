import { httpService } from '@/core/http';
import type { APIResponse } from '@/types/api.types';
import type { Group } from '@/types/model.types';

export async function getGroupList(): Promise<APIResponse<number[]>> {
    const response = await httpService.get<APIResponse<number[]>>('/group');
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Failed to fetch group list');
    }
}

export async function getGroupById(
    groupId: number,
): Promise<APIResponse<Group>> {
    const response = await httpService.get<APIResponse<Group>>(
        `/group/${groupId}`,
    );
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Failed to fetch group by id');
    }
}

export async function getGroupLastBattleTime(
    groupId: number,
): Promise<APIResponse<number>> {
    const response = await httpService.get<APIResponse<number>>(
        `/group/${groupId}/lastBattleTime`,
    );
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Failed to fetch group last battle time');
    }
}
