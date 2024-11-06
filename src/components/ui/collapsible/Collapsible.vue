<script setup lang="ts">
import type { CollapsibleRootEmits, CollapsibleRootProps } from 'radix-vue';
import { CollapsibleRoot, useForwardPropsEmits } from 'radix-vue';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-vue-next';
const props = defineProps<CollapsibleRootProps>();
const emits = defineEmits<CollapsibleRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
const collapsibleClass = cn('flex mx-10', props.class);
</script>

<template>
  <CollapsibleRoot
    v-slot="{ open }"
    v-bind="forwarded"
    :class="collapsibleClass"
  >
    <slot :open="open" />
  </CollapsibleRoot>
</template>
