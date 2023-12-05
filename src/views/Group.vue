<script setup lang="ts">
import BasePage from '../components/BasePage.vue';

const props = defineProps<{
    groupId: number;
}>();
</script>

<template>
    <BasePage hasParent>
        <template v-slot:header>
            <div class="text-center font-bold">群组{{ props.groupId }}</div>
        </template>
        <template v-slot:body> </template>
    </BasePage>
</template>
