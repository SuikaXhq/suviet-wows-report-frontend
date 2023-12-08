import { httpService } from '@/core/http';
import type { APIResponse } from '@/types/api.types';
import type { Group, GroupDailyReport } from '@/types/model.types';

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

export async function getReportByGroup(groupId: number) {
    const response = await httpService.get<APIResponse<GroupDailyReport[]>>(
        `/group/${groupId}/report`,
    );
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Failed to fetch group report');
    }
}

export async function getBattleCountByGroup(groupId: number) {
    const response = await httpService.get<
        APIResponse<{
            [reportId: number]: number;
        }>
    >(`/group/${groupId}/report/battleCount`);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Failed to fetch group battle count');
    }
}
