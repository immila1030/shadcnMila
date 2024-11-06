<script setup lang="ts">
import { CollapsibleTrigger, type CollapsibleTriggerProps } from 'radix-vue';

const props = defineProps<CollapsibleTriggerProps>();
</script>

<template>
  <CollapsibleTrigger v-bind="props">
    <slot />
    <ChevronRight
      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
    />
  </CollapsibleTrigger>
</template>
