<script setup lang="ts">
import { getGroupById, getGroupLastBattleTime } from '@/core/api';
import BaseButton from './BaseButton.vue';
import { computed, ref, onMounted } from 'vue';
import dayjs from 'dayjs';

const props = defineProps<{
    groupId: number;
}>();

const loading = ref(false);
const error = ref('');
const data = ref({
    groupName: '',
    numOfAccounts: 0,
    lastUpdatedTime: 0,
});

const routeTo = computed(() => {
    return {
        name: 'group',
        params: {
            groupId: props.groupId,
        },
    };
});

const lastUpdatedTime = computed(() => {
    return dayjs.unix(data.value.lastUpdatedTime).format('YYYY-MM-DD HH:mm:ss');
});

async function loadGroupInfo() {
    loading.value = true;
    const [groupInfoResponse, groupLastBattleTimeResponse] = await Promise.all([
        getGroupById(props.groupId),
        getGroupLastBattleTime(props.groupId),
    ]);
    if (groupInfoResponse.status === 'success') {
        data.value.groupName = groupInfoResponse.data.groupName;
        data.value.numOfAccounts = groupInfoResponse.data.accounts?.length ?? 0;
    } else {
        error.value = groupInfoResponse.error;
    }
    if (groupLastBattleTimeResponse.status === 'success') {
        data.value.lastUpdatedTime = groupLastBattleTimeResponse.data;
    } else {
        error.value = groupLastBattleTimeResponse.error;
    }
    loading.value = false;
}

onMounted(() => {
    loadGroupInfo();
});
</script>
<template>
    <BaseButton :to="routeTo">
        <div class="flex flex-row items-center justify-between">
            <div class="pl-10 pr-20 text-2xl">
                {{ data.groupName }}
            </div>
            <div class="flex flex-col text-center text-xl">
                <div class="text-textSecond dark:text-textSecondDark">
                    群组内帐号数
                </div>
                <div class="">
                    {{ data.numOfAccounts }}
                </div>
            </div>
            <div class="mr-14 flex flex-col text-center text-xl">
                <div class="text-textSecond dark:text-textSecondDark">
                    最后战斗时间
                </div>
                <div class="">
                    {{ lastUpdatedTime }}
                </div>
            </div>
        </div>
    </BaseButton>
</template>
