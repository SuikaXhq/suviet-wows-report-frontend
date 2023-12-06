<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BasePage from '@/components/BasePage.vue';
import GroupButton from '@/components/buttons/GroupButton.vue';
import { getGroupList } from '@/core/api';

const loading = ref(false);
const error = ref('');
const groupList = ref<number[]>([]);

async function loadGroupList() {
    loading.value = true;
    const groupListResponse = await getGroupList();
    if (groupListResponse.status === 'success') {
        groupList.value = groupListResponse.data;
    } else {
        error.value = groupListResponse.error;
    }
    loading.value = false;
}

onMounted(() => {
    loadGroupList();
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
                    v-for="groupId in groupList"
                    :groupId="groupId"
                />
            </div>
        </template>
    </BasePage>
</template>
