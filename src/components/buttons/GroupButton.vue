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
    <BaseButton :to="routeTo" class="p-2 lg:p-6">
        <div class="flex flex-row items-center justify-between text-center">
            <div class="mx-6 lg:ml-10 lg:mr-20 lg:w-44 text-xl lg:text-2xl font-bold">
                {{ data.groupName }}
            </div>
            <div class="flex flex-col lg:text-xl">
                <div class="text-textSecond dark:text-textSecondDark">
                    群组内帐号数
                </div>
                <div class="">
                    {{ data.numOfAccounts }}
                </div>
            </div>
            <div class="mr-6 lg:mr-14 flex flex-col lg:text-xl">
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
