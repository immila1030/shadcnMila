<script setup lang="ts">
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-vue-next';
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-center justify-between px-8 py-10 font-bold text-fz5 transition-all hover:bg-accordion hover:rounded-t-10 [&[data-state=open]>svg]:rotate-0  [&[data-state=open]]:bg-accordion [&[data-state=open]]:rounded-t-10',
          props.class
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="h-13 w-13 shrink-0 transition-transform duration-200 -rotate-90"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
