<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps } from 'radix-vue';
import { cn } from '@/lib/utils';
import { inject } from 'vue';
const variant = inject('variant', '');
console.log(variant);
const props = defineProps<CollapsibleContentProps>();
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    class="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
  >
  <div  :class="
      cn(
        'cursor-pointer hover:text-primary pl-20 ml-2',
        {
          'cursor-pointer hover:text-primary hover:bg-accordion data-[state=open]:bg-background  pl-12 ml-2':
            variant === 'secondary',
        },
        props.class
      )
    "><slot /></div>
    
  </CollapsibleContent>
</template>
