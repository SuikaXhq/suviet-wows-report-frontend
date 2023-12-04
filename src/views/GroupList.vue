<script setup lang="ts">
import BasePage from "../components/BasePage.vue";
</script>

<template>
    <BasePage>
        <template v-slot:header>
            TestHeader
        </template>
        <template v-slot:body>
            TestBody
        </template>
    </BasePage>
</template>