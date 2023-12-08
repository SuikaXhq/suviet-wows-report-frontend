<script setup lang="ts">
import BasePage from '@/components/BasePage.vue';
import AccountButton from '@/components/buttons/AccountButton.vue';
import ReportButton from '@/components/buttons/ReportButton.vue';
import { defineProps, onMounted } from 'vue';
import { getGroupById, getReportByGroup } from '@/core/api';
import type { Group } from '@/types/model.types';
import { useLED } from '@/utils/led';

const props = defineProps<{
    groupId: number;
}>();

const { loading, error, data, loader } = useLED<Group>(
    async (data) => {
        const groupInfoResponse = await getGroupById(props.groupId);
        if (groupInfoResponse.status === 'success') {
            data.value.groupName = groupInfoResponse.data.groupName;
            data.value.accounts = groupInfoResponse.data.accounts;
            data.value.dailyReport = groupInfoResponse.data.dailyReport;
        } else {
            throw groupInfoResponse.error;
        }
        const groupReportResponse = await getReportByGroup(props.groupId);
        if (groupReportResponse.status === 'success') {
            data.value.dailyReport = groupReportResponse.data;
        } else {
            throw groupReportResponse.error;
        }
    },
    { groupId: props.groupId },
);

data.value.groupId = props.groupId;

onMounted(() => {
    loader(data);
});
</script>

<template>
    <BasePage hasParent>
        <template v-slot:header>
            <div class="text-center font-bold">{{ data.groupName }}</div>
        </template>
        <template v-slot:body>
            <div class="flex flex-col gap-14">
                <div class="flex flex-col gap-8">
                    <div class="text-3xl font-bold">
                        成员
                    </div>
                    <div class="flex flex-row flex-wrap gap-6">
                        <AccountButton v-for="account in data.accounts" :accountId="account.accountId"
                            :nickName="account.nickName" />
                    </div>
                </div>
                <div class="flex flex-col gap-8">
                    <div class="text-3xl font-bold">
                        每日战报
                    </div>
                    <div class="flex flex-col gap-6">
                        <ReportButton v-for="report in data.dailyReport" v-bind="report" />
                    </div>
                </div>
            </div>
        </template>
    </BasePage>
</template>
