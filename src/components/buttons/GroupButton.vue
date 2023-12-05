<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import { computed } from 'vue';
const props = defineProps<{
    groupId: number;
}>();

const routeTo = computed(() => {
    return {
        name: 'group',
        params: {
            groupId: props.groupId,
        },
    };
});
</script>
<template>
    <BaseButton :to="routeTo">群组{{ props.groupId }}</BaseButton>
</template>
