<script setup lang="ts">
import BasePage from '../components/BasePage.vue';
import GroupButton from '../components/buttons/GroupButton.vue';
</script>

<template>
    <BasePage>
        <template v-slot:header>
            <div class="text-center font-bold">群组列表</div>
        </template>
        <template v-slot:body
            ><div class="flex flex-col">
                <GroupButton :groupId="1" />
            </div>
        </template>
    </BasePage>
</template>
