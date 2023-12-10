<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BasePage from '@/components/BasePage.vue';
import GroupButton from '@/components/buttons/GroupButton.vue';
import { getGroupList } from '@/core/api';
import { useLED } from '@/utils/led';

const { loading, error, data, loader } = useLED<number[]>(async (data) => {
    const groupListResponse = await getGroupList();
    if (groupListResponse.status === 'success') {
        data.value = groupListResponse.data;
    } else {
        throw groupListResponse.error;
    }
});

onMounted(() => {
    loader(data);
});
</script>

<template>
    <BasePage :loading="loading">
        <template v-slot:header>
            <div class="flex h-full items-center justify-center">
                <div class="text-center font-bold">群组列表</div>
            </div>
        </template>
        <template v-slot:body>
            <div class="flex flex-col gap-8 p-4 lg:p-8" v-if="!loading">
                <GroupButton v-for="groupId in data" :groupId="groupId" />
            </div>
        </template>
    </BasePage>
</template>
