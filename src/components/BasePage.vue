<!--
    页面基础模版
-->
<script setup lang="ts">
const props = defineProps({
    hasParent: Boolean,
});
</script>

<template>
    <div class="relative grow cursor-default divide-y divide-gray-200 dark:divide-gray-700">
        <div class="relative h-28 text-2xl lg:text-3xl">
            <div v-if="hasParent" class="absolute inset-y-0 left-0 ml-4 flex items-center text-left">
                <button @click="$router.back()" type="button" title="返回"
                    class="flex items-center justify-center p-2 text-5xl transition hover:text-gray-500 hover:dark:text-gray-400">
                    <i class="eva eva-arrow-left"></i>
                </button>
            </div>
            <slot name="header"></slot>
        </div>

        <div class="grow text-base lg:text-2xl">
            <slot name="body"></slot>
        </div>
    </div>
</template>
