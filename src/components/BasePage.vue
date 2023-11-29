<!--
    页面基础模版
-->
<script setup lang="ts">
defineProps<{
    hasParent: boolean;
}>();
</script>

<template>
    <div class="relative bg-bg dark:bg-bgDark divide-y">
        <div class="relative min-h-24 max-h-32">
            <div v-if="hasParent" class="absolute text-left block inset-y-0 left-0">
                <botton @click="$router.back()" class="">
                    <i class="eva eva-arrow-left text-4xl"></i>
                </botton>
            </div>
            <slot name="header"></slot>
        </div>

        <div>
            <slot name="body"></slot>
        </div>
    </div>
</template>