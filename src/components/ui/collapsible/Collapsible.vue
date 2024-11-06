<script setup lang="ts">
import type { CollapsibleRootEmits, CollapsibleRootProps } from 'radix-vue';
import { CollapsibleRoot, useForwardPropsEmits } from 'radix-vue';
import { cn } from '@/lib/utils';
import { provide } from 'vue';
const props = defineProps<
  CollapsibleRootProps & {
    variant?: '' | 'secondary';
  }
>();
const emits = defineEmits<CollapsibleRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
const collapsibleClass = cn('flex items-center', props.class);
provide('variant', props.variant);
</script>

<template>
  <CollapsibleRoot
    v-slot="{ open, toggle }"
    v-bind="forwarded"
    :class="collapsibleClass"
  >
    <slot :open="open" :toggle="toggle" :variant="variant" />
  </CollapsibleRoot>
</template>
