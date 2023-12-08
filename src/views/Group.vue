<script setup lang="ts">
import BasePage from '@/components/BasePage.vue';
import AccountButton from '@/components/buttons/AccountButton.vue';
import ReportButton from '@/components/buttons/ReportButton.vue';
import { defineProps, onMounted } from 'vue';
import {
    getBattleCountByGroup,
    getGroupById,
    getReportByGroup,
} from '@/core/api';
import type { Group } from '@/types/model.types';
import { useLED } from '@/utils/led';

const props = defineProps<{
    groupId: number;
}>();

const { loading, error, data, loader } = useLED<
    Group & {
        battleCounts: {
            [reportId: number]: number;
        };
    }
>(
    async (data) => {
        const groupInfoResponse = await getGroupById(props.groupId);
        if (groupInfoResponse.status === 'success') {
            data.value.groupName = groupInfoResponse.data.groupName;
            data.value.accounts = groupInfoResponse.data.accounts;
        } else {
            throw groupInfoResponse.error;
        }
        const groupReportResponse = await getReportByGroup(props.groupId);
        if (groupReportResponse.status === 'success') {
            data.value.dailyReport = groupReportResponse.data;
        } else {
            throw groupReportResponse.error;
        }
        const groupBattleCountResponse = await getBattleCountByGroup(
            props.groupId,
        );
        if (groupBattleCountResponse.status === 'success') {
            data.value.battleCounts = groupBattleCountResponse.data;
        } else {
            throw groupBattleCountResponse.error;
        }
    },
    { groupId: props.groupId, battleCounts: {} },
);

data.value.groupId = props.groupId;

onMounted(() => {
    loader(data);
});
</script>

<template>
    <BasePage hasParent>
        <template v-slot:header>
            <div class="flex h-full items-center justify-center">
                <div class="text-center font-bold">
                    {{ data.groupName }}
                </div>
            </div>
        </template>
        <template v-slot:body>
            <div class="flex flex-col gap-14">
                <div class="flex flex-col gap-8">
                    <div class="text-3xl font-bold">成员</div>
                    <div class="flex flex-row flex-wrap gap-6">
                        <AccountButton
                            v-for="account in data.accounts"
                            :accountId="account.accountId"
                            :nickName="account.nickName"
                        />
                    </div>
                </div>
                <div class="flex flex-col gap-8">
                    <div class="text-3xl font-bold">每日战报</div>
                    <div class="flex flex-col gap-4">
                        <ReportButton
                            v-for="report in data.dailyReport"
                            v-bind="{
                                ...report,
                                battleCount:
                                    data.battleCounts[report.reportId] ?? 0,
                            }"
                        />
                    </div>
                </div>
            </div>
        </template>
    </BasePage>
</template>
