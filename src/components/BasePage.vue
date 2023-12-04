<!--
    页面基础模版
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
    hasParent: boolean;
}>(), { hasParent: false });
</script>

<template>
    <div class="relative divide-y bg-bg dark:bg-bgDark">
        <div class="min-h-24 relative max-h-32">
            <div
                v-if="hasParent"
                class="absolute inset-y-0 left-0 block text-left"
            >
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
