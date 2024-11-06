<script setup lang="ts">
import { CollapsibleTrigger, type CollapsibleTriggerProps } from 'radix-vue';
import { ChevronRight } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

const props = defineProps<
  CollapsibleTriggerProps & { variant?: '' | 'secondary' }
>();
</script>

<template>
  <CollapsibleTrigger v-bind="props">
    <div
      @click="toggle"
      :class="
        cn(
          'cursor-pointer hover:bg-accordion hover:text-primary pl-18',
          {
            'cursor-pointer hover:bg-accordion data-[state=open]:bg-accordion data-[state=open]:text-primary data-[state=open]:font-bold pl-12':
              props.variant === 'secondary',
          },
          props.class
        )
      "
    >
      <slot :variant="variant" />
      <ChevronRight
        class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
      />
    </div>
  </CollapsibleTrigger>
</template>
