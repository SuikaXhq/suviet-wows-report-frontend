import { httpService } from '@/core/http';
import type { APIResponse } from '@/types/api.types';
import { BattleTypeEnum, type GroupDailyReport, ShipTypeEnum } from '@/types/model.types';

export async function getReportByGroup(groupId: number) {
    const response = await httpService.get<APIResponse<GroupDailyReport[]>>(
        `/report/${groupId}`,
    );
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Failed to fetch group report');
    }
}