<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import { computed } from 'vue';

const props = defineProps<{
    accountId: number;
    nickName: string;
}>();

const routeTo = computed(() => {
    return {
        name: 'account',
        params: {
            accountId: props.accountId,
        },
    };
});

</script>

<template>
    <BaseButton :to="routeTo" class="p-4">
        <div class="text-xl">
            {{ props.nickName }}
        </div>
    </BaseButton>
</template>