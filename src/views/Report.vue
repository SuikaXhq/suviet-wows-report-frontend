<script setup lang="ts">
import BasePage from '@/components/BasePage.vue';
import BattleButton from '@/components/buttons/BattleButton.vue';
import { defineProps, onMounted, computed } from 'vue';
import { useLED } from '@/utils/led';
import { getDailyReportById } from '@/core/api';
import { type GroupDailyReport } from '@/types/model.types';
import dayjs from 'dayjs';

const props = defineProps<{
    reportId: number;
}>();

const { loading, error, data, loader } = useLED<GroupDailyReport>(
    async (data) => {
        const response = await getDailyReportById(props.reportId);
        if (response.status === 'success') {
            data.value = response.data;
        } else {
            throw response.error;
        }
    },
);

const reportDateDisplayed = computed(() => {
    return dayjs
        .unix(data.value.reportTime)
        .subtract(1, 'day')
        .format('YYYY年MM月DD日战报');
});

const reportItems = computed(() => {
    return [
        {
            title: '今日演子',
            battle: data.value.actorOfTheDay,
        },
        {
            title: '今日战犯',
            battle: data.value.prisonerOfWarOfTheDay,
        },
        {
            title: '场均小子',
            battle: data.value.damageBoyOfTheDay,
        },
        {
            title: 'K头小子',
            battle: data.value.fragBoyOfTheDay,
        },
        {
            title: '点亮小子',
            battle: data.value.scoutBoyOfTheDay,
        },
        {
            title: '打飞机小子',
            battle: data.value.antiAirBoyOfTheDay,
        },
    ];
});

onMounted(() => {
    loader(data);
});
</script>
<template>
    <BasePage hasParent>
        <template v-slot:header>
            <div class="flex h-full flex-col items-center justify-center gap-2">
                <div class="font-bold">
                    {{ data.group?.groupName ?? '' }}
                </div>
                <div>
                    {{ reportDateDisplayed }}
                </div>
            </div>
        </template>
        <template v-slot:body>
            <div class="flex flex-col gap-4 p-2 lg:gap-10 lg:p-8">
                <div class="flex flex-col gap-6 lg:gap-10">
                    <div
                        class="flex flex-row items-center justify-evenly"
                        v-for="item in reportItems"
                    >
                        <div
                            class="flex w-36 flex-col items-center gap-2 text-textSecond dark:text-textSecondDark lg:w-56 lg:gap-4"
                        >
                            <div class="text-xl lg:text-3xl">
                                {{ item.title }}
                            </div>
                            <div
                                v-if="item.battle"
                                class="font-bold text-textMain dark:text-textMainDark"
                            >
                                {{ item.battle!.account.nickName }}
                            </div>
                            <div v-else>无</div>
                        </div>
                        <BattleButton v-if="item.battle" v-bind="item.battle" />
                    </div>
                </div>
            </div>
        </template>
    </BasePage>
</template>
