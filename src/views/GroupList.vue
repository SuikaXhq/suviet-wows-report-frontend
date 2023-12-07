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
    <BasePage>
        <template v-slot:header>
            <div class="text-center font-bold">群组列表</div>
        </template>
        <template v-slot:body>
            <div v-if="loading">Loading...</div>
            <div v-if="error">{{ error }}</div>
            <div class="flex flex-col" v-if="!loading">
                <GroupButton
                    v-if="!loading"
                    v-for="groupId in data"
                    :groupId="groupId"
                />
            </div>
        </template>
    </BasePage>
</template>
