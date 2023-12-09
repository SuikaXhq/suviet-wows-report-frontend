<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import type { Battle, GroupDailyReport } from '@/types/model.types';
import dayjs from 'dayjs';
import { computed } from 'vue';

const props = defineProps<
    Omit<GroupDailyReport, 'group'> & {
        battleCount: number;
    }
>();

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

const reportItems = computed(() => {
    return [
        {
            title: '今日演子',
            nickName: props.actorOfTheDay?.account.nickName ?? null,
        },
        {
            title: '今日战犯',
            nickName: props.prisonerOfWarOfTheDay?.account.nickName ?? null,
        },
        {
            title: '场均小子',
            nickName: props.damageBoyOfTheDay?.account.nickName ?? null,
        },
        {
            title: 'K头小子',
            nickName: props.fragBoyOfTheDay?.account.nickName ?? null,
        },
        {
            title: '点亮小子',
            nickName: props.scoutBoyOfTheDay?.account.nickName ?? null,
        },
        {
            title: '打飞机小子',
            nickName: props.antiAirBoyOfTheDay?.account.nickName ?? null,
        },
    ];
});
</script>
<template>
    <BaseButton :to="routeTo">
        <div
            class="hover-trans flex max-h-12 lg:max-h-16 flex-col divide-y-2 divide-gray-300 overflow-hidden transition-all duration-500 hover:max-h-96 hover:duration-200 dark:divide-gray-500">
            <div class="flex h-12 lg:h-16 flex-row items-center justify-between p-4">
                <div>{{ reportTime }}</div>
                <div class="flex flex-row text-base lg:text-xl text-textSecond dark:text-textSecondDark">
                    <div>组队战斗</div>
                    <div class="w-8 lg:w-12 text-center text-textMain dark:text-textMainDark">
                        {{ props.battleCount }}
                    </div>
                    <div>人次</div>
                </div>
            </div>
            <div
                class="grid grid-flow-col grid-rows-2 place-content-center gap-x-4 lg:gap-x-20 gap-y-8 p-4 text-center text-base lg:text-xl">
                <div class="flex flex-col gap-2 text-textSecond dark:text-textSecondDark" v-for="item in reportItems">
                    <div>
                        {{ item.title }}
                    </div>
                    <div v-if="item.nickName !== null" class="font-bold text-textMain dark:text-textMainDark">
                        {{ item.nickName }}
                    </div>
                    <div v-else>无</div>
                </div>
            </div>
        </div>
    </BaseButton>
</template>
