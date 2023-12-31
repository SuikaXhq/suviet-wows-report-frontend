<script setup lang="ts">
import { BattleTypeEnum, type Battle } from '@/types/model.types';
import BaseButton from './BaseButton.vue';
import { defineProps, computed } from 'vue';
import dayjs from 'dayjs';

const props = defineProps<Battle>();

const routeTo = computed(() => {
    return {
        name: 'battle',
        params: {
            battleId: props.battleId,
        },
    };
});

const battleTime = computed(() => {
    return dayjs.unix(props.battleTime).format('YYYY.MM.DD HH:mm:ss');
});
const shipName = computed(() => {
    return props.ship.shipName;
});
const isWin = computed(() => {
    return props.wins === 1;
});
const inDivision = computed(() => {
    switch (props.battleType) {
        case BattleTypeEnum.PVP_DIV2:
            return '自行车';
        case BattleTypeEnum.PVP_DIV3:
            return '三轮车';
        default:
            return null;
    }
});
const hitRateMain = computed(() => {
    return props.shotsByMain === 0
        ? '无'
        : ((props.hitsByMain / props.shotsByMain) * 100).toFixed(2) + '%';
});
const hitRateTorpedo = computed(() => {
    return props.shotsByTorpedoes === 0
        ? '无'
        : ((props.hitsByTorpedoes / props.shotsByTorpedoes) * 100).toFixed(2) +
              '%';
});
const battleItems = computed(() => {
    return [
        {
            title: '场均',
            value: props.damageDealt,
        },
        {
            title: '击杀',
            value: props.fragsTotal,
        },
        {
            title: '点亮',
            value: props.damageScouting,
        },
        {
            title: '潜在',
            value: props.damagePotential,
        },
        {
            title: '击落',
            value: props.planesKilled,
        },
        {
            title: '经验',
            value: props.xp,
        },
        {
            title: '主炮命中',
            value: hitRateMain.value,
        },
        {
            title: '鱼雷命中',
            value: hitRateTorpedo.value,
        },
    ];
});
</script>
<template>
    <BaseButton :to="routeTo">
        <div
            class="flex flex-row items-center justify-around gap-1 p-2 lg:gap-8 lg:p-4"
        >
            <div class="flex grow flex-col items-center gap-2">
                <div v-if="isWin" class="font-bold text-[#46dba0]">胜利!</div>
                <div v-else class="font-bold text-[#f66301]">失败</div>
                <div class="w-[6rem] text-center lg:w-[8rem] lg:text-xl">
                    {{ shipName }}
                </div>
                <div
                    class="max-w-[5rem] text-center text-sm text-textSecond dark:text-textSecondDark lg:max-w-full lg:text-base"
                >
                    {{ battleTime }}
                </div>
            </div>
            <div
                class="grid auto-cols-fr grid-flow-col grid-rows-2 place-content-center gap-2 lg:gap-x-8 lg:gap-y-4"
            >
                <div
                    v-for="item in battleItems"
                    :class="`${
                        item.title === '主炮命中' || item.title === '鱼雷命中'
                            ? 'hidden lg:flex'
                            : 'flex'
                    } w-12 flex-col items-center gap-1 text-sm lg:w-24 lg:text-xl `"
                >
                    <div
                        class="font-bold text-textSecond dark:text-textSecondDark"
                    >
                        {{ item.title }}
                    </div>
                    <div>
                        {{ item.value }}
                    </div>
                </div>
            </div>
        </div>
    </BaseButton>
</template>
