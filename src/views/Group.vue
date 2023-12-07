<script setup lang="ts">
import BasePage from '@/components/BasePage.vue';
import { defineProps, ref, onMounted, reactive } from 'vue';
import { getGroupById } from '@/core/api';
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
        <template v-slot:body> </template>
    </BasePage>
</template>
