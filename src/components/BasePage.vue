<!--
    页面基础模版
-->
<script setup lang="ts">
import Spinner from 'vue-spinner-component/src/Spinner.vue';
const props = defineProps({
    hasParent: Boolean,
    loading: Boolean,
});
</script>

<template>
    <div
        class="relative flex grow cursor-default flex-col divide-y divide-gray-200 dark:divide-gray-700"
    >
        <div class="relative h-28 text-2xl lg:text-3xl">
            <div
                v-if="hasParent"
                class="absolute inset-y-0 left-0 ml-4 flex items-center text-left"
            >
                <button
                    @click="$router.back()"
                    type="button"
                    title="返回"
                    class="flex items-center justify-center p-2 text-5xl transition hover:text-gray-500 hover:dark:text-gray-400"
                >
                    <i class="eva eva-arrow-left"></i>
                </button>
            </div>
            <div v-if="loading" class="flex h-full items-center justify-center">
                <Spinner :size="60" :depth="6" :speed="0.3" />
            </div>
            <slot v-else name="header"></slot>
        </div>

        <div class="flex grow flex-col text-base lg:text-2xl">
            <div v-if="loading" class="flex grow items-center justify-center">
                <Spinner :size="100" :depth="10" :speed="0.3" />
            </div>
            <slot v-else name="body"></slot>
        </div>
    </div>
</template>
