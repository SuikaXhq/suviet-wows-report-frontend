<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import type { Battle, GroupDailyReport } from '@/types/model.types';
import dayjs from 'dayjs';
import { computed } from 'vue';

const props = defineProps<Omit<GroupDailyReport, 'group'>>();

const routeTo = computed(() => {
    return {
        name: 'report',
        params: {
            reportId: props.reportId,
        },
    };
});

const reportTime = computed(() => {
    return dayjs.unix(props.reportTime).subtract(1, 'day').format('YYYY-MM-DD');
});
</script>
<template>
    <BaseButton :to="routeTo">
        <div class="flex flex-col divide-y-2 dark:divide-gray-500 divide-gray-300">
            <div class="p-4">
                {{ reportTime }}
            </div>
            <div class="p-4"></div>
        </div>
    </BaseButton>
</template>