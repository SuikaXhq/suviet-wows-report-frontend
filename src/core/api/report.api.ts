import { httpService } from '@/core/http';
import type { APIResponse } from '@/types/api.types';
import type { GroupDailyReport } from '@/types/model.types';

export async function getDailyReportById(
    reportId: number,
): Promise<APIResponse<GroupDailyReport>> {
    const reportResponse = await httpService.get(`/report/${reportId}`);
    if (reportResponse.status === 200) {
        return reportResponse.data;
    } else {
        throw new Error('Failed to fetch daily report');
    }
}
