<script setup lang="ts">
import BasePage from '../components/BasePage.vue';
</script>

<template>
    <BasePage hasParent>
        <template v-slot:header>
            <div class="text-center">Header</div>
        </template>
        <template v-slot:body> TestBody </template>
    </BasePage>
</template>
